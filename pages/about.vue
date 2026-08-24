<template>
  <div class="min-h-screen bg-secondary py-12 text-white antialiased selection:bg-primary selection:text-white">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      
      <!-- Hero Banner -->
      <section class="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
        <div 
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style="background-image: url('https://cdn.pixabay.com/photo/2025/01/02/23/26/butterfly-9306937_1280.jpg');"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40 backdrop-blur-[2px]" />

        <div class="relative z-10 flex flex-col items-center px-6 py-20 text-center sm:py-28 lg:px-12">
          <div class="inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-md">
            <span class="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Our Mission &amp; Vision
          </div>

          <h1 class="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span class="text-primary-light">Fund Manager</span>
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Empowering modern investors with real-time portfolio intelligence, clean mutual fund analytics, and automated tracking to make confident financial decisions.
          </p>
        </div>
      </section>

      <!-- Value Proposition Pillars -->
      <section class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div class="flex flex-col rounded-2xl border border-white/10 bg-secondary/60 p-6 shadow-md backdrop-blur-sm transition-all hover:border-primary/40">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-light shadow-inner">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="mt-4 text-base font-bold text-white">Data-Driven Precision</h3>
          <p class="mt-2 text-xs leading-relaxed text-white/70">
            Access accurate Net Asset Values (NAV), categorization breakdown, and historical tracking at your fingertips.
          </p>
        </div>

        <div class="flex flex-col rounded-2xl border border-white/10 bg-secondary/60 p-6 shadow-md backdrop-blur-sm transition-all hover:border-primary/40">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-light shadow-inner">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="mt-4 text-base font-bold text-white">Local &amp; Secure</h3>
          <p class="mt-2 text-xs leading-relaxed text-white/70">
            Your customized portfolio watchlists remain client-controlled, private, and seamlessly synced across sessions.
          </p>
        </div>

        <div class="flex flex-col rounded-2xl border border-white/10 bg-secondary/60 p-6 shadow-md backdrop-blur-sm transition-all hover:border-primary/40">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-light shadow-inner">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="mt-4 text-base font-bold text-white">High-Speed Execution</h3>
          <p class="mt-2 text-xs leading-relaxed text-white/70">
            Built with modern web standards, lightweight payloads, and instant keyword filtering for frictionless exploration.
          </p>
        </div>
      </section>

      <!-- Story / Detail Card -->
      <section class="mt-12 rounded-3xl border border-white/10 bg-secondary/50 p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div class="lg:col-span-8">
            <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Simplifying Wealth Management Architecture
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-white/80">
              Navigating mutual funds across numerous asset management companies can be fragmented and tedious. Fund Manager organizes fund schemes, ISIN codes, and investment types into a unified, clean interface built for modern investors.
            </p>
          </div>
          <div class="flex justify-start lg:col-span-4 lg:justify-end">
            <NuxtLink
              to="/funds"
              class="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span>Explore Schemes</span>
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'About Us - Nuxt Fund Manager',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Nuxt Fund Manager, our mission, values, and platform features for intelligent portfolio tracking.'
    }
  ]
});

useHead({
  title: 'About Us | Fund Manager',
});
</script>