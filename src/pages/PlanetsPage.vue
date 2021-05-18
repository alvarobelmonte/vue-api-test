<template>
  <TheWrapper>
    <h1>PLANETS</h1>
    <section v-if="!isLoading">
      <TheCard
        v-for="planet in planets"
        :key="planet.name"
        :item="planet"
        :id="planet.diameter"
        route-name="planets-detail"
        type="planet"
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
      planets: [],
      isLoading: true,
      error: false,
    };
  },
  components: {
    TheWrapper,
    TheSpinner,
    TheCard,
  },
  created() {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        this.planets = data.results;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.error = true;
        console.log(error);
      });
  },
};
</script>

<style>
</style>