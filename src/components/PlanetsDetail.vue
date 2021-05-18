<template>
  <section>
    <TheSubheader />
    <TheWrapper>
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
      </div>
    </TheWrapper>
  </section>
</template>

<script>
import TheWrapper from "./TheWrapper";
import TheSubheader from "../components/TheSubheader";

export default {
  data() {
    return {
      planetData: {},
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
        this.planetData = data;
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