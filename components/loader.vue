<template>
  <div class="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-8">
    <div class="relative flex items-center justify-center">
      <div class="absolute h-20 w-20 animate-ping rounded-full bg-primary/20 duration-1000" />
      <div class="h-16 w-16 rounded-full border-4 border-secondary/30" />
      <div class="absolute h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primaryLight" />
      <div class="absolute h-3 w-3 rounded-full bg-primary animate-pulse" />
    </div>
    <span v-if="label" class="text-xs font-semibold tracking-widest text-primaryLight uppercase animate-pulse">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Loading...',
  },
});
</script>