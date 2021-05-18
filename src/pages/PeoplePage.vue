<template>
  <TheWrapper>
    <h1>PEOPLE</h1>
    <section v-if="!isLoading">
      <div>
        <label for="filter" class="filter-label">Filtrar</label>
        <input
          type="text"
          id="filter"
          name="filter"
          v-model.trim="name"
          @change="onChangeFilter"
          class="filter"
        />
        <LoadButton type="button" @click="loadMore" v-if="canLoad" class="load">LOAD MORE</LoadButton>
      </div>
      <h2>{{current}} / {{total}}</h2>

      <TheCard
        v-for="person in peopleFiltered"
        :key="person.name"
        :item="person"
        :id="person.birth_year"
        route-name="people-detail"
        type="people"
      />
    </section>
    <TheSpinner v-if="isLoading" />
    <div v-if="error">Se ha producido un error</div>
  </TheWrapper>
</template>

<script>
import TheWrapper from "../components/UI/TheWrapper";
import TheSpinner from "../components/UI/TheSpinner";
import LoadButton from "../components/UI/LoadButton";
import TheCard from "../components/UI/TheCard";

export default {
  data() {
    return {
      people: [],
      peopleFiltered: [],
      isLoading: true,
      error: false,
      next: "",
      canLoad: true,
      total: 0,
      current: 0,
      name: "",
    };
  },
  components: {
    TheWrapper,
    TheSpinner,
    TheCard,
    LoadButton,
  },
  created() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        this.people = data.results;
        this.peopleFiltered = this.people;
        this.total = data.count;
        this.current = this.people.length;
        this.next = data.next;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.error = true;
        console.log(error);
      });
  },
  methods: {
    loadMore() {
      fetch(this.next)
        .then((response) => response.json())
        .then((data) => {
          if (data.next && data.next.length > 0) {
            this.next = data.next;
          } else {
            this.canLoad = false;
          }

          this.people = this.people.concat(data.results);
          this.peopleFiltered = this.people;
          this.current = this.people.length;
          console.log(this.people);
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = true;
          console.log(error);
        });
    },
    onChangeFilter() {
      this.peopleFiltered = this.people.filter((person) => {
        return person.name.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.filter {
  border-radius: 3rem;
  border: 2px solid grey;
  font-size: 1.2rem;
  outline: none;
  padding: 0.3rem 1rem;
  color: #35495e;
}
.filter-label {
  font-weight: bold;
  margin-right: 1rem;
}
</style>