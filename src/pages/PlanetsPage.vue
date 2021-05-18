<template>
  <TheWrapper>
    <h1>PLANETS</h1>
    <section v-if="!isLoading">
      <div>
        <label for="filter" class="filter-label">Filter</label>
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
        v-for="planet in planetsFiltered"
        :key="planet.name"
        :item="planet"
        route-name="planets-detail"
        type="planet"
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
      planets: [],
      planetsFiltered: [],
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
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        this.planets = data.results;
        this.planetsFiltered = this.planets;
        this.total = data.count;
        this.current = this.planets.length;
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

          this.planets = this.planets.concat(data.results);
          this.planetsFiltered = this.planets;
          this.current = this.planets.length;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = true;
          console.log(error);
        });
    },
    onChangeFilter() {
      this.planetsFiltered = this.planets.filter((planet) => {
        return planet.name.toLowerCase().includes(this.name.toLowerCase());
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
  color: #35495e;
}
</style>