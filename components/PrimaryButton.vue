<script lang="ts" setup>
import { NuxtLink } from "#components";
import { TypedRouteList } from "../.generated";

const props = defineProps<{
  to?: TypedRouteList;
}>();

const component = computed(() => {
  if (props.to) {
    return NuxtLink;
  } else {
    return "a";
  }
});
</script>

<template>
  <component :is="component" :to="props.to" class="group inline-flex">
    <div
      class="bg-primary py-4 pl-10 pr-5 font-display text-xl font-bold uppercase text-black shadow-solid4 transition-all group-hover:shadow-solid2"
    >
      <slot />
    </div>
    <div class="flex flex-col">
      <div
        class="w-5 flex-1 bg-primary shadow-solid4 transition-all group-hover:shadow-solid2"
      ></div>
      <div class="relative">
        <div
          class="absolute top-1 left-1 -z-10 h-0 w-0 border-t-[20px] border-r-[20px] border-r-transparent border-t-secondary transition-all group-hover:top-0.5 group-hover:left-0.5"
        ></div>
        <div
          class="h-0 w-0 border-t-[20px] border-r-[20px] border-r-transparent border-t-primary"
        ></div>
      </div>
    </div>
  </component>
</template>
