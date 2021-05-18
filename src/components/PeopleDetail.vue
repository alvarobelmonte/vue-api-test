<template>
  <section>
    <TheSubheader path="/people" />
    <TheWrapper>
      <TheSpinner v-if="isLoading" />
      <main v-if="!isLoading && !error">
        <h1>{{personData.name}}</h1>

        <div class="details">
          <div>
            <b>Gender</b>
            - {{personData.gender}}
          </div>
          <div>
            <b>Height</b>
            - {{personData.height}}
          </div>
          <div>
            <b>Mass</b>
            - {{personData.mass}}
          </div>
          <div>
            <b>Hair Color</b>
            - {{personData.hair_color}}
          </div>
          <div>
            <b>Skin Color</b>
            - {{personData.skin_color}}
          </div>
          <div>
            <b>Eye Color</b>
            - {{personData.eye_color}}
          </div>
          <div>
            <b>Birth Year</b>
            - {{personData.birth_year}}
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
      personData: {},
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
        this.personData = data;
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