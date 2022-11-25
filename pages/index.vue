<script setup>
const { router, routes } = useTypedRouter();

function navigate() {
  router.push(routes.about);
}
</script>

<template>
  <h1>Index page</h1>
  <div class="flex flex-col items-center gap-4">
    <button @click="navigate">About</button>
    <PrimaryButton to="about"> test </PrimaryButton>
    <TextButton to="about"> test </TextButton>
    <TextField id="test" label="Full name" />
    <div class="bg-primary p-4">
      <SecondaryButton to="about"> test </SecondaryButton>
    </div>
    <ChipPlaceholderButton to="about" />
    <TaskCheckbox checked />
    <TaskButton to="about"> Open Task </TaskButton>
    <div class="flex gap-8">
      <div class="w-[300px]">
        <UnderlinedHeader> Coins </UnderlinedHeader>
      </div>
      <UnderlinedHeader :width="300"> Coins </UnderlinedHeader>
    </div>
    <PrimarySection> Hello, World! </PrimarySection>
  </div>
</template>
