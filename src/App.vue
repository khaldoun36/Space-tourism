<template>
  <div
    class="body-container bg-dark"
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <PrimaryHeader />
    <router-view />
  </div>
</template>

<script setup>
/* ---------- */
/* Imports    */
/* ---------- */
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import PrimaryHeader from "./components/PrimaryHeader.vue";
import getBackgroundSize from "./composables/getBackgroundSize.js";

/* ---------- */
/* Variables  */
/* ---------- */
let viewportWidth = ref(window.innerWidth);
let viewportHeight = ref(window.innerHeight);

// to store the background size
const backgroundSize = ref("");

// to store the background image
const image = ref("home");

const route = useRoute();

const pathName = ref("home");

/* ---------- */
/* Functions  */
/* ---------- */

// chnage the background image based on the current path
watch(
  () => route.name,
  () => {
    pathName.value = route.name;
    image.value = `src/assets/${pathName.value}/background-${pathName.value}-${backgroundSize.value}.jpg`;
  }
);

// gets the background size as soon as the app runs
backgroundSize.value = getBackgroundSize(
  viewportWidth.value,
  viewportHeight.value
);

// Change the background size
window.addEventListener("resize", () => {
  viewportWidth.value = window.innerWidth;
  viewportHeight.value = window.innerHeight;

  // gets the background size when window is resized
  backgroundSize.value = getBackgroundSize(
    viewportWidth.value,
    viewportHeight.value
  );

  image.value = `src/assets/${pathName.value}/background-${pathName.value}-${backgroundSize.value}.jpg`;
});
</script>

<style>
.body-container {
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  overflow-x: hidden;
  background-size: cover;
  background-position: bottom center;
}

#app {
  font-family: var(--ff-sans-normal);
  font-size: var(--fS-400);
  line-height: var(--font-lineheight-4);
}

@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .body-container {
    background-position: center center;
  }
}

/* 
  ##Device = Tablets (portrait)
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .body-container {
    background-position: center center;
  }
}
</style>
