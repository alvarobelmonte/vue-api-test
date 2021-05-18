<template>
  <TheWrapper>
    <h1>STARSHIPS</h1>
    <section v-if="!isLoading">
      <TheCard
        v-for="starship in starships"
        :key="starship.name"
        :item="starship"
        :id="starship.length"
        route-name="starships-detail"
        type="starship"
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
      starships: [],
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
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json())
      .then((data) => {
        this.starships = data.results;
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