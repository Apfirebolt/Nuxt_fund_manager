<template>
  <div class="min-h-screen bg-secondary text-white antialiased selection:bg-primary selection:text-white">
    
    <!-- Hero / Header Section -->
    <section class="border-b border-white/10 bg-secondary/70 py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          <div class="inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-md">
            <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Market Intelligence
          </div>

          <h1 class="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Explore <span class="text-primary-light">Mutual Funds</span>
          </h1>

          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Browse through active market schemes, monitor real-time NAV metrics, and bookmark funds directly to your customized watchlist.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content Area -->
    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ClientOnly>
        <funds />
        
        <template #fallback>
          <div class="flex min-h-[40vh] items-center justify-center">
            <loader label="Loading Mutual Funds..." />
          </div>
        </template>
      </ClientOnly>
    </main>

  </div>
</template>

<script setup>
definePageMeta({
  title: 'Funds Directory - Fund Manager',
  description: 'Explore live mutual funds, track NAV updates, and manage your portfolio schemes.',
});

useHead({
  title: 'Mutual Funds Directory | Fund Manager',
});
</script>