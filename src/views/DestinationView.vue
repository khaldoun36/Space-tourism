<template>
  <main class="grid-container grid-container--destination flow">
    <h1
      class="numbered-title ff-sans-cond fs-500 fw-400 letter-spacing-3 uppercase text-white"
    >
      <span class="fw-700">01</span>Pick your destination
    </h1>
    <!-- Destination Image -->
    <picture class="destination-image">
      <source
        :srcset="`src/assets/destination/image-${destination.name.toLocaleLowerCase()}.webp`"
        type="image/webp"
      />
      <img
        :src="`src/assets/destination/image-${destination.name.toLocaleLowerCase()}.png`"
        :alt="`the ${destination.name.toLocaleLowerCase()}`"
      />
    </picture>
    <!-- Tab List -->
    <TabList class="tab-list" @selectTab="changeDestination" />
    <!-- Destination info -->
    <article class="destination-info flow">
      <h2 class="ff-serif fs-800 fw-400 uppercase text-white">
        {{ destination.name }}
      </h2>
      <p class="ff-sans fs-400 fw-400 text-light">
        {{ destination.description }}
      </p>
      <div class="destination-meta flex flow">
        <div>
          <h3
            class="text-accent fs-200 fw-400 letter-spacing-2 text-light uppercase"
          >
            Avg. distance
          </h3>
          <p class="ff-serif text-white uppercase">
            {{ destination.distance }}
          </p>
        </div>
        <div>
          <h3
            class="text-accent fs-200 fw-400 letter-spacing-2 text-light uppercase"
          >
            Est. travel time
          </h3>
          <p class="ff-serif text-white uppercase">{{ destination.travel }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import { ref } from "vue";
import TabList from "../components/TabList.vue";
import destinations from "../data/destinationsData";

// define the default destination (moon)
const destination = ref(destinations[0]);

// reassign destination based on the user tab click
const changeDestination = (item) => {
  destination.value = destinations.find((destination) => {
    return destination.name.toLocaleLowerCase().trim() === item.trim();
  });
};

// console.log(destination);
</script>

<style>
.grid-container--destination {
  --flow-space: var(--size-6);
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";
}
.grid-container--destination > h1 {
  grid-area: title;
}
.grid-container--destination > .destination-image {
  grid-area: image;
  max-width: 70%;
}
.grid-container--destination > .tab-list {
  grid-area: tabs;
}
.grid-container--destination > .destination-info {
  --flow-space: var(--size-6);
  grid-area: content;
}
.grid-container--destination > .destination-info > p {
  padding-bottom: var(--size-6);
  border-bottom: 2px solid hsl(var(--clr-white) / 0.125);
}
.destination-info > .destination-meta {
  flex-direction: column;
  font-size: 1.75rem;
}

/*
  ##Device = Tablets (portrait)
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .grid-container--destination {
    padding-top: var(--size-7);
  }
  .grid-container--destination > h1 {
    justify-self: start;
  }
  .destination-info > .destination-meta {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .destination-info > .destination-meta > div {
    margin-top: 0;
  }
}
/*
  ##Device = Desktops / Tablets in landscape
*/

@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .grid-container--destination {
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
  }

  .grid-container--destination > .destination-image {
    max-width: 90%;
  }

  .grid-container--destination > .tab-list,
  .grid-container--destination > .destination-image,
  .grid-container--destination > .destination-info {
    justify-self: start;
  }
  .grid-container--destination > h1 {
    justify-self: start;
  }
  .destination-info > .destination-meta {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .destination-info > .destination-meta > div {
    margin-top: 0;
  }
}
</style>
