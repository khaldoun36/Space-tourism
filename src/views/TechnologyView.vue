<template>
  <main class="grid-container grid-container--technology">
    <h1
      class="numbered-title ff-sans-cond fs-500 fw-400 letter-spacing-3 uppercase text-white"
    >
      <span class="fw-700">03</span>space launch 101
    </h1>
    <!-- Technology images -->
    <div class="technology-image">
      <img :src="image" alt="launch vehicle" />
    </div>
    <!-- Numbered Dots -->
    <NumberedDots @selectNumber="changeTechDetails" class="numbered-dots" />
    <!-- Technology info -->
    <article class="technology-details flow" role="tabpanel" tabindex="0">
      <header class="flow">
        <h2
          class="fs-200 fw-400 ff-serif uppercase letter-spacing-2 text-light"
        >
          THE TERMINOLOGY…
        </h2>
        <p class="fs-700 fw-400 ff-serif uppercase text-white">
          {{ singleTech.name }}
        </p>
      </header>
      <p class="fs-400 fw-400 text-light">
        {{ singleTech.description }}
      </p>
    </article>
  </main>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import NumberedDots from "../components/shared/NumberedDots.vue";
import getBackgroundSize from "../composables/getBackgroundSize";
import technology from "../data/technologyData";

// default technology to show when page first visited
const singleTech = ref(technology[0]);

const image = ref("");

const backgroundSize = ref(
  getBackgroundSize(window.innerWidth, window.innerHeight)
);

if (backgroundSize.value === "desktop") {
  image.value = singleTech.value.images.portrait;
} else {
  image.value = singleTech.value.images.landscape;
}

window.addEventListener("resize", () => {
  backgroundSize.value = getBackgroundSize(
    window.innerWidth,
    window.innerHeight
  );

  if (backgroundSize.value === "desktop") {
    image.value = singleTech.value.images.portrait;
  } else if (
    backgroundSize.value === "tablet" ||
    backgroundSize.value === "mobile"
  ) {
    image.value = singleTech.value.images.landscape;
  }
});

// change the selected numberd dots based on user choice
const changeTechDetails = (item) => {
  singleTech.value = technology.find((unit) => {
    return unit.name.trim().toLowerCase() === item.toLowerCase();
  });
};
</script>

<style scoped>
/* Mobile Styling */
.grid-container--technology {
  grid-template-areas:
    "title"
    "image"
    "numbered-dots"
    "content";
}

.grid-container--technology > h1 {
  grid-area: title;
}

.grid-container--technology > .technology-image {
  grid-area: image;
}

.grid-container--technology > .technology-image > img {
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
}

.grid-container--technology > .numbered-dots {
  grid-area: numbered-dots;
}

.grid-container--technology > .technology-details {
  grid-area: content;
}
/*
  ##Device = Tablets (portrait)
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-container--technology > h1 {
    justify-self: start;
  }
}
/*
  ##Device = Desktops / Tablets in landscape
*/

@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .grid-container {
    grid-template-columns: minmax(1rem, 1fr) repeat(4, minmax(0, 20rem)) minmax(
        1rem,
        1fr
      );
    --container-gap: 1rem;
  }
  .grid-container--technology {
    grid-template-areas:
      ". title title title title ."
      ". numbered-dots content content image image";
  }
  .grid-container--technology > h1,
  .grid-container--technology > .numbered-dots,
  .grid-container--technology > .technology-details {
    justify-self: start;
  }

  .grid-container--technology > .technology-details {
    margin-left: -20%;
  }

  .grid-container--technology > .technology-image {
    width: 100%;
  }
  .grid-container--technology > .technology-image > img {
    left: 0;
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
    position: static;
    right: 0;
    width: 100%;
  }
}
</style>
