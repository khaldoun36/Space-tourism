<template>
  <div
    class="dot-indicators flex"
    role="tablist"
    aria-label="crew member list"
    ref="dotList"
  >
    <button
      aria-selected="true"
      role="tab"
      data-image="commander-image"
      @click="handleClick"
    >
      <span class="sr-only">commander</span>
    </button>
    <button
      aria-selected="false"
      role="tab"
      data-image="mission-image"
      @click="handleClick"
    >
      <span class="sr-only">mission specialist</span>
    </button>
    <button
      aria-selected="false"
      role="tab"
      data-image="pilot-image"
      @click="handleClick"
    >
      <span class="sr-only">pilot</span>
    </button>
    <button
      aria-selected="false"
      role="tab"
      data-image="crew-image"
      @click="handleClick"
    >
      <span class="sr-only">flight engineer</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// store emitted events
const emit = defineEmits(["selectDot"]);

const dotList = ref(null);

const handleClick = (e) => {
  let dotsArray = [...dotList.value.children];
  dotsArray.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });
  e.target.setAttribute("aria-selected", "true");

  emit("selectDot", e.target.innerText);
};
</script>

<style>
.dot-indicators {
  justify-content: space-between;
  align-items: center;
}

.dot-indicators > button {
  cursor: pointer;
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0;
  background-color: hsl(var(--clr-white) / 0.125);
  transition: background-color 250ms ease-in-out;
}

.dot-indicators > button:not(:last-child) {
  margin-right: var(--dot-margin, var(--size-6));
}

.dot-indicators > button:hover,
.dot-indicators > button:focus {
  background-color: hsl(var(--clr-white) / 0.5);
}

.dot-indicators > button[aria-selected="true"] {
  background-color: hsl(var(--clr-white));
}
</style>
