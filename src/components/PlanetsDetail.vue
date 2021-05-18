<template>
  <section>
    <TheSubheader path="/planets" />
    <TheWrapper>
      <TheSpinner v-if="isLoading" />
      <main v-if="!isLoading && !error">
        <h1>{{planetData.name}}</h1>

        <div class="details">
          <div>
            <b>Rotation Period</b>
            - {{planetData.rotation_period}}
          </div>
          <div>
            <b>Orbital Period</b>
            - {{planetData.orbital_period}}
          </div>
          <div>
            <b>Diameter</b>
            - {{planetData.diameter}}
          </div>
          <div>
            <b>Climate</b>
            - {{planetData.climate}}
          </div>
          <div>
            <b>Gravity</b>
            - {{planetData.gravity}}
          </div>
          <div>
            <b>Terrain</b>
            - {{planetData.terrain}}
          </div>
          <div>
            <b>Surface Water</b>
            - {{planetData.surface_water}}
          </div>
          <div>
            <b>Population</b>
            - {{planetData.population}}
          </div>
        </div>
      </main>
      <div v-if="error">Se ha producido un error</div>
    </TheWrapper>
  </section>
</template>

<script>
import TheWrapper from "./UI/TheWrapper";
import TheSubheader from "./UI/TheSubheader";
import TheSpinner from "./UI/TheSpinner";

export default {
  data() {
    return {
      planetData: {},
      isLoading: true,
      error: false,
    };
  },
  components: {
    TheWrapper,
    TheSubheader,
    TheSpinner,
  },
  created() {
    fetch(this.$route.params.url)
      .then((response) => response.json())
      .then((data) => {
        this.planetData = data;
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

<style scoped>
.details div {
  padding: 2% 10rem;
  text-align: left;
}
.details div:nth-child(even) {
  background-color: #f6fff2;
}
.details div:nth-child(odd) {
  background-color: #a3bfff;
}
@media screen and (max-width: 1024px) {
  .details div {
    padding: 2% 5rem;
  }
}

@media screen and (max-width: 720px) {
  .details div {
    padding: 2% 2rem;
  }
}
</style>