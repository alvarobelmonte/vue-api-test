<template>
  <TheWrapper>
    <h1>PEOPLE</h1>
    <section v-if="!isLoading">
      <button type="button" @click="loadMore" v-if="canLoad" class="load">LOAD MORE</button>
      <TheCard
        v-for="person in people"
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
import TheWrapper from "../components/TheWrapper";
import TheSpinner from "../components/TheSpinner";
import TheCard from "../components/TheCard";

export default {
  data() {
    return {
      people: [],
      isLoading: true,
      error: false,
      next: "",
      canLoad: true,
    };
  },
  components: {
    TheWrapper,
    TheSpinner,
    TheCard,
  },
  created() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        this.people = data.results;
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

          this.people.concat(data.results);
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = true;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.load {
  background-color: #41b883;
  color: white;
  padding: 1rem 3rem;
  border-radius: 2rem;
  cursor: pointer;
  border: 4px solid #35495e;
  font-style: bold;
  font-size: 0.9rem;
}
.load:hover {
  color: #41b883;
  background-color: white;
  border: 4px solid #41b883;
}
</style>