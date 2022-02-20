<template>
  <main class="grid-container grid-container--home">
    <div class="flow">
      <h1
        class="text-light fs-500 fw-400 ff-sans-cond uppercase letter-spacing-3"
      >
        so, you want to travel to
        <span class="fs-900 ff-serif fw-400 text-white d-block">space</span>
      </h1>
      <p class="ff-sans fw-400 text-light">
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!
      </p>
    </div>

    <div>
      <LargeButton />
    </div>
  </main>
</template>

<script setup>
import LargeButton from "../components/shared/LargeButton.vue";
</script>

<style>
/* 
  ##Device = Smartphones Mobiles 
*/
.grid-container--home {
  --flow-space: var(--size-3);
}

.grid-container--home > .first-child > h1 {
  text-align: center;
}

/* 
  ##Device = Desktops / Tablets in landscape
*/

@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .grid-container--home {
    padding-bottom: max(6rem, 20vh);
    align-items: end;
    justify-content: space-between;
  }

  .grid-container--home > *:first-child {
    grid-column: 2 / span 1;
    justify-self: start;
  }

  .grid-container--home > *:last-child {
    grid-column: 3 / span 1;
    justify-self: end;
  }
}
</style>
