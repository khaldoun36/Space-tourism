<template>
  <main class="grid-container grid-container--crew flow">
    <h1
      class="numbered-title ff-sans-cond fs-500 fw-400 letter-spacing-3 uppercase text-white"
    >
      <span class="fw-700">02</span>meet your crew
    </h1>
    <!-- crew images -->
    <picture class="crew-image">
      <source :srcset="crewMember.images.webp" type="image/webp" />
      <img :src="crewMember.images.png" :alt="crewMember.name" />
    </picture>
    <!-- Dot Indicators to navigate between listings -->
    <DotList @selectDot="changeCrew" class="dot-selector" />
    <!-- crew info -->
    <article
      class="crew-details flow"
      id="commander-tab"
      role="tabpanel"
      tabindex="0"
    >
      <header class="flow flow--space-small">
        <h2
          class="fs-600 fw-400 ff-serif uppercase"
          style="color: hsl(var(--clr-white) / 0.5)"
        >
          {{ crewMember.role }}
        </h2>
        <p class="fs-700 fw-400 ff-serif uppercase text-white">
          {{ crewMember.name }}
        </p>
      </header>
      <p class="fs-400 fw-400 text-light">
        {{ crewMember.bio }}
      </p>
    </article>
  </main>
</template>

<script setup>
import { ref } from "vue";
import DotList from "../components/shared/DotList.vue";
import crew from "../data/crewData";

// define a default crew member
const crewMember = ref(crew[0]);

// change the crew member details based on emitted choice from the DotList
const changeCrew = (item) => {
  crewMember.value = crew.find((member) => {
    return member.role.trim().toLowerCase() === item.trim().toLowerCase();
  });
};
</script>

<style>
.grid-container--crew {
  grid-template-areas:
    "title"
    "image"
    "dot-list"
    "content";
}
.grid-container--crew > h1 {
  margin-top: var(--size-6);
  grid-area: title;
}
.grid-container--crew > .crew-image {
  grid-area: image;
  max-width: 70%;
  position: relative;
}
.grid-container--crew > .crew-image::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 130%;
  border-bottom: 2px solid hsl(var(--clr-white) / 0.15);
}

.grid-container--crew > .dot-selector {
  grid-area: dot-list;
  --dot-margin: var(--size-7);
}

.grid-container--crew > .crew-details {
  grid-area: content;
}

/*
  ##Device = Tablets (portrait)
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .grid-container--crew {
    overflow: hidden;
    --flow-space: var(--size-7);
    grid-template-areas:
      "title"
      "content"
      "dot-list"
      "image";
  }
  .grid-container--crew > h1 {
    justify-self: start;
  }

  .grid-container--crew > .crew-image {
    /* justify-self: end; */
    align-self: end;
    transform: translateY(8%);
  }
  .grid-container--crew > .crew-image::after {
    display: none;
  }
}

/*
  ##Device = Desktops / Tablets in landscape
*/

@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .grid-container--crew {
    justify-content: space-between;
    overflow: hidden;
    grid-template-areas:
      ". title image ."
      ". content image ."
      ". dot-list image .";
  }
  .grid-container--crew > h1,
  .grid-container--crew > .dot-selector {
    justify-self: start;
  }
  .grid-container--crew > .crew-image {
    max-width: 100%;
    justify-self: end;
    align-self: end;
    transform: translateY(10%);
  }

  .grid-container--crew > .crew-image::after {
    display: none;
  }

  .grid-container--crew > .crew-details {
    justify-self: start;
  }
}
</style>
