<template>
  <router-link :to="{ name: routeName, params: {url: item.url}}" class="card">
    <div>
      <img src="../assets/people.svg" alt="icon" class="card-icon" v-if="type === 'people'" />
      <img src="../assets/starships.svg" alt="icon" class="card-icon" v-if="type === 'starship'" />
      <img src="../assets/planets.svg" alt="icon" class="card-icon" v-if="type === 'planet'" />
    </div>
    <div>
      <h2>{{item.name}}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  height: auto;
  min-width: 20rem;
  padding: 1.5rem 2rem;
  border-radius: 3rem;
  color: #35495e;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 3px solid #41b883;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card div {
  margin: 0rem 3rem;
}
.card-icon {
  width: 4rem;
  height: auto;
}
a {
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  .card {
    width: 90%;
  }
}
</style>