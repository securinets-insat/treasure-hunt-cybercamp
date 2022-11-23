<script setup>
const { router, routes } = useTypedRouter();

function navigate() {
  router.push(routes.about);
}
</script>

<template>
  <h1>Index page</h1>
  <button @click="navigate">About</button>
</template>
