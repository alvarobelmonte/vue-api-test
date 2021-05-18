<template>
  <section>
    <div class="img-container">
      <img class="found-img" src="https://media.giphy.com/media/xTiTnuItjH9y5z4vNS/giphy.gif" alt />
    </div>

    <h1>404 - Esta página no existe</h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 2rem;
}
.found-img {
  border-radius: 50%;
  margin: 0 auto;
}
section {
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>