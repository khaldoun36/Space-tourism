<template>
  <header class="primary-header">
    <div class="logo">
      <img src="../../public/shared/logo.svg" alt="Site logo" />
    </div>
    <!-- Mobile Button Start -->
    <button
      class="menu"
      aria-controls="primary-navigation"
      :class="{ opened: isOpen }"
      @click="toggleMenu"
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
    <!-- Mobile Button end -->
    <nav class="primary-nav flex underline-indicators" :aria-expanded="isOpen">
      <router-link
        to="/"
        class="ff-sans-cond fs-400 fw-400 letter-spacing-2 text-white uppercase"
        ><span class="fw-700">00</span>Home</router-link
      >
      <router-link
        to="/destination"
        class="ff-sans-cond fs-400 fw-400 letter-spacing-2 text-white uppercase"
        ><span class="fw-700">02</span>Destination</router-link
      >
      <router-link
        to="/crew"
        class="ff-sans-cond fs-400 fw-400 letter-spacing-2 text-white uppercase"
        ><span class="fw-700">03</span>Crew</router-link
      >
      <router-link
        to="/technology"
        class="ff-sans-cond fs-400 fw-400 letter-spacing-2 text-white uppercase"
        ><span class="fw-700">04</span>Technology</router-link
      >
    </nav>
  </header>
</template>

<script setup>
/* ---------- */
/* Imports    */
/* ---------- */
import { ref } from "vue";

/* ---------- */
/* Variables  */
/* ---------- */
const isOpen = ref(false);

/* ---------- */
/* Functions  */
/* ---------- */
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.primary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.primary-header > .logo {
  margin: var(--size-5) var(--size-fluid-4);
  min-width: var(--size-8);
}
.primary-nav {
  gap: var(--size-fluid-4);
  padding: 0 var(--size-fluid-5);
  background: hsl(var(--clr-white) / 0.05);
  backdrop-filter: blur(var(--size-5));
}

.primary-nav > a {
  text-decoration: none;
}

.primary-nav > a > span {
  padding-right: var(--size-3);
}

.menu {
  display: none;
}

/*
  ##Device = Desktops / Tablets in landscape
*/

@media (min-width: 1025px),
  (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .primary-nav {
    justify-content: space-between;
    margin-block: var(--size-7);
  }

  .primary-header::after {
    content: "";
    display: block;
    position: relative;
    height: 1px;
    width: 100%;
    margin-right: -2.5rem;
    background: hsl(var(--clr-white) / 0.25);
    order: 1;
  }

  .primary-nav {
    order: 2;
  }
}

/*
  ##Device = Tablets (portrait)
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .primary-header {
    align-items: flex-start;
  }
  .primary-header::after {
    display: none;
  }

  .primary-nav {
    margin-top: 0;
  }

  .primary-nav > a > span {
    display: none;
  }
}

/*
  ##Device = Smartphones Mobiles
*/

@media (min-width: 220px) and (max-width: 480px),
  (min-width: 481px) and (max-width: 767px) {
  .primary-header {
    align-items: center;
    margin-top: var(--size-2);
  }
  .primary-nav {
    position: fixed;
    inset: 0 0 0 30%;
    z-index: 1000;
    flex-direction: column;
    padding-block: var(--size-fluid-8);
    transform: translateX(100%);
    transition: transform 350ms ease-in-out;
  }
  .primary-nav[aria-expanded="true"] {
    transform: translateX(0);
  }
  /* Hamburger Menu Icon  */
  .menu {
    background-color: transparent;
    z-index: 2000;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    transform: scale(0.65);
  }

  .line {
    fill: none;
    stroke: hsl(var(--clr-white));
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
}
</style>
