<template>
  <header>
    <nav>
      <h1>
        <router-link :to="path">Go Back</router-link>
      </h1>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 3rem;
  background-color: #84dbb4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>