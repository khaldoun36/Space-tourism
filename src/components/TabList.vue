<template>
  <div
    class="flex underline-indicators tab-list"
    ref="tabList"
    @click="handleClick"
  >
    <button
      aria-selected="true"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-light"
    >
      moon
    </button>

    <button
      aria-selected="false"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-light"
    >
      mars
    </button>

    <button
      aria-selected="false"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-light"
    >
      europa
    </button>

    <button
      aria-selected="false"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-light"
    >
      titan
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// store emitted events
const emit = defineEmits(["selectTab"]);

const tabList = ref(null);

const handleClick = (e) => {
  let buttonsArray = [...tabList.value.children];

  buttonsArray.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });
  e.target.setAttribute("aria-selected", "true");
  emit("selectTab", e.target.innerHTML);
};
</script>

<style>
.tab-list {
  /* padding: 0; */
  justify-content: space-between;
  align-items: center;
}
.tab-list > button {
  /* border: none; */
  background-color: transparent;
}
.tab-list > button:not(:last-child) {
  margin-right: min(2rem, 3rem);
}
</style>
