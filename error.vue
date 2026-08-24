<template>
  <div class="min-h-screen bg-secondary flex items-center justify-center p-4 sm:p-6 lg:p-8 antialiased selection:bg-primary selection:text-white">
    <div class="w-full max-w-lg text-center">
      
      <!-- Card Container -->
      <div class="overflow-hidden rounded-3xl border border-white/10 bg-secondary/60 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        
        <!-- Icon Badge -->
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-primary-light/30 bg-primary/20 text-primary-light shadow-inner">
          <svg class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <!-- Error Status -->
        <div class="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light">
          Error {{ error?.statusCode || 404 }}
        </div>

        <h1 class="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
        </h1>

        <p class="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm">
          {{ error?.message || "The fund scheme, page, or resource you are looking for doesn't exist or has been moved." }}
        </p>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            @click="handleError"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Dashboard</span>
          </button>

          <NuxtLink
            to="/funds"
            @click="handleClear"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10"
          >
            <span>Browse Funds</span>
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

useHead({
  title: 'Page Not Found | Fund Manager',
});

// Clears the error state and navigates home safely
const handleError = () => clearError({ redirect: '/' });
const handleClear = () => clearError();
</script>