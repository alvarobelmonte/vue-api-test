<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

* {
  box-sizing: border-box;
}
body {
  margin: 0;
}

html {
  font-family: "Noto Sans", sans-serif;
}
/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #35495e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #41b883;
}
</style>
