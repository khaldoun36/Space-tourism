<template>
  <div
    class="numbered-dots flex"
    role="tablist"
    aria-label="crew member list"
    ref="numberedList"
  >
    <button aria-selected="true" role="tab" @click="handleClick">
      1
      <span class="sr-only">launch vehicle</span>
    </button>
    <button aria-selected="false" role="tab" @click="handleClick">
      2
      <span class="sr-only">space capsule</span>
    </button>
    <button aria-selected="false" role="tab" @click="handleClick">
      3
      <span class="sr-only">spaceport</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// store emitted events
const emit = defineEmits(["selectNumber"]);

const numberedList = ref(null);

const handleClick = (e) => {
  let numberedArray = [...numberedList.value.children];
  numberedArray.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });
  e.target.setAttribute("aria-selected", "true");
  emit(
    "selectNumber",
    e.target.innerText.split(/\s+/).splice(1).join(" ").trim()
    // the above code first splits the array based on the white space, then removes the number (to match it with the data file), then returns the array as a string
  );
};
</script>

<style>
.numbered-dots {
  justify-content: space-between;
  align-items: center;
}

.numbered-dots > button {
  display: inline-grid;
  place-items: center;
  padding: 0 1.5em;
  border-radius: 50%;
  aspect-ratio: 1;
  color: hsl(var(--clr-white) / 1);
  border: 1px solid hsl(var(--clr-white) / 0.2);
  background-color: hsl(var(--clr-white) / 0);
  transition: background-color 250ms ease-in-out;
}
.numbered-dots > button:hover,
.numbered-dots > button:focus {
  background-color: hsl(var(--clr-white));
  color: hsl(var(--clr-dark));
}

.numbered-dots > button:not(:last-child) {
  margin-right: var(--dot-margin, var(--size-6));
}

.numbered-dots > button[aria-selected="true"] {
  background-color: hsl(var(--clr-white));
  color: hsl(var(--clr-dark));
}
@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .numbered-dots {
    flex-direction: column;
  }
  .numbered-dots > button:not(:last-child) {
    margin-right: 0;
  }
  .numbered-dots > button {
    margin-block: var(--size-4);
  }
}
</style>
