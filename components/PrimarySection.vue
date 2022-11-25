<template>
  <div class="flex w-full flex-col">
    <div
      class="h-[37px] w-full bg-block-top-pattern bg-center bg-repeat-x"
    ></div>
    <div class="w-full bg-primary">
      <div class="container mx-auto py-2.5">
        <slot />
      </div>
    </div>
    <div
      class="h-[37px] w-full bg-block-bottom-pattern bg-center bg-repeat-x"
    ></div>
  </div>
</template>
