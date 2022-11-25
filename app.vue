<script lang="ts" setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Ubuntu&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>

<template>
  <NuxtPage />
</template>

<style>
html {
  font-family: "Ubuntu", sans-serif;
  color: #fff;
  background-color: #000;
}
</style>
