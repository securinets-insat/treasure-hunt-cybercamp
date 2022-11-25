<script lang="ts" setup>
const props = defineProps<{
  id: string;
  label: string;
}>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="relative inline-block">
    <input
      :id="props.id"
      class="peer appearance-none bg-transparent pt-4 pb-2 text-lg text-white focus:outline-none"
      :bind="$attrs"
    />
    <label
      :for="props.id"
      class="absolute top-0 left-0 cursor-text pt-4 pb-2 text-lg text-white/50 transition-all duration-300 peer-focus:p-0 peer-focus:text-xs peer-focus:text-primary"
    >
      {{ props.label }}
    </label>
    <div
      class="absolute bottom-0 left-0 right-0 h-[3px] bg-primary shadow-solid2"
    ></div>
  </div>
</template>
