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
      class="peer appearance-none bg-transparent pt-4 pb-2 text-lg text-white placeholder:opacity-0 focus:outline-none"
      :placeholder="props.label"
      :bind="$attrs"
    />
    <label
      :for="props.id"
      class="absolute top-0 left-0 cursor-text p-0 text-xs text-primary transition-all duration-300 peer-placeholder-shown:pt-4 peer-placeholder-shown:pb-2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-white/50 peer-focus:p-0 peer-focus:text-xs peer-focus:text-primary"
    >
      {{ props.label }}
    </label>
    <div
      class="absolute bottom-0 left-0 right-0 h-[3px] bg-primary shadow-solid2"
    ></div>
  </div>
</template>
