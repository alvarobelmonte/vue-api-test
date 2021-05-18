<template>
  <section>
    <TheSubheader />

    <TheWrapper>
      <TheSpinner v-if="isLoading" />
      <main v-if="!isLoading && !error">
        <h1>{{starshipData.name}}</h1>

        <div class="details">
          <div>
            <b>Model</b>
            - {{starshipData.model}}
          </div>
          <div>
            <b>Manufacturer</b>
            - {{starshipData.manufacturer}}
          </div>
          <div>
            <b>Cost</b>
            - {{starshipData.cost_in_credits}}
          </div>
          <div>
            <b>Length</b>
            - {{starshipData.length}}
          </div>
          <div>
            <b>Max Atmosphering Speed</b>
            - {{starshipData.max_atmosphering_speed}}
          </div>
          <div>
            <b>Crew</b>
            - {{starshipData.crew}}
          </div>
          <div>
            <b>Passengers</b>
            - {{starshipData.passengers}}
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
      starshipData: {},
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
        this.starshipData = data;
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
  background-color: #ffd97d;
}
</style>