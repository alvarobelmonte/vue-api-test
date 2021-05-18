<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Vue API Test - Álvaro Belmonte</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/people">People</router-link>
        </li>
        <li>
          <router-link to="/starships">Starships</router-link>
        </li>
        <li>
          <router-link to="/planets">Planets</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>



<style scoped>
header {
  width: 100%;
  min-height: 5rem;
  background-color: #42b983;
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
  border: 3px solid transparent;
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
  padding: 1rem;
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
@media screen and (max-width: 1024px) {
  header nav {
    flex-direction: column;
  }
}
</style>