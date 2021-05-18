<template>
  <main class="container">
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1,
h2 {
  color: #35495e;
}
</style>