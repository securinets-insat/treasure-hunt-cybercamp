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
  <component
    :is="component"
    :to="props.to"
    class="group inline-flex h-[100px] w-[100px] drop-shadow-solid2 transition-all hover:drop-shadow-none"
  >
    <svg
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 103V2H103V82.5L81.5 103H2Z"
        stroke="#F8F207"
        stroke-width="3"
        stroke-linecap="square"
        stroke-dasharray="12 12"
      />
      <rect x="50.833" y="38" width="3.33333" height="30" fill="#F8F207" />
      <rect
        x="37.5"
        y="54.6667"
        width="3.33333"
        height="30"
        transform="rotate(-90 37.5 54.6667)"
        fill="#F8F207"
      />
    </svg>
  </component>
</template>
