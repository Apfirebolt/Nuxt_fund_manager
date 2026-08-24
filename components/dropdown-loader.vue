<template>
  <div class="flex items-center justify-center py-4 antialiased" role="status" aria-label="Loading">
    <div class="relative flex h-10 w-10 items-center justify-center">
      <!-- Outer soft pulse ring -->
      <span class="absolute h-full w-full animate-ping rounded-full bg-primary/20 duration-1000"></span>

      <!-- Background track -->
      <span class="h-10 w-10 rounded-full border-2 border-white/10"></span>

      <!-- Spinning gradient/accent arc -->
      <span class="absolute h-10 w-10 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-primary-light"></span>

      <!-- Center pulsing dot -->
      <span class="absolute h-2 w-2 rounded-full bg-primary animate-pulse"></span>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>
