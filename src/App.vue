<template>
  <div class="body-container bg-dark">
    <PrimaryHeader />
    <router-view />
  </div>
</template>

<script setup>
// imports
import PrimaryHeader from "./components/shared/PrimaryHeader.vue";
// variables
// functions
</script>

<style>
.body-container {
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  overflow-x: hidden;
}

#app {
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  line-height: var(--font-lineheight-3);
}
</style>
