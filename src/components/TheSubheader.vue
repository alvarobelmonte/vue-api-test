<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Go Back</router-link>
      </h1>
    </nav>
  </header>
</template>



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
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 3px solid whitesmoke;
  border-radius: 2rem;
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

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>