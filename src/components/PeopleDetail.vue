<template>
  <section>
    <TheSubheader />
    <TheWrapper>
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
    </TheWrapper>
  </section>
</template>

<script>
import TheWrapper from "./UI/TheWrapper";
import TheSubheader from "./UI/TheSubheader";

export default {
  data() {
    return {
      personData: {},
    };
  },
  components: {
    TheWrapper,
    TheSubheader,
  },
  created() {
    fetch(this.$route.params.url)
      .then((response) => response.json())
      .then((data) => {
        this.personData = data;
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