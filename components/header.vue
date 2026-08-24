<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-secondary/80 backdrop-blur-md antialiased transition-all">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        
        <!-- Logo -->
        <NuxtLink to="/" class="group flex items-center gap-2.5 focus:outline-none">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span class="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-primary-light">
            Fund Manager
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex md:items-center md:gap-1">
          <NuxtLink
            to="/"
            class="rounded-lg px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            active-class="bg-white/10 text-primary-light"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="rounded-lg px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            active-class="bg-white/10 text-primary-light"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/funds"
            class="rounded-lg px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            active-class="bg-white/10 text-primary-light"
          >
            Funds
          </NuxtLink>
        </nav>

        <!-- Desktop Auth Actions -->
        <div class="hidden md:flex md:items-center md:gap-3">
          <NuxtLink
            to="/login"
            class="rounded-lg px-3.5 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <button
          type="button"
          @click="toggleMenu"
          class="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none md:hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!isMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="border-t border-white/10 bg-secondary/95 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl md:hidden">
        <nav class="flex flex-col space-y-1">
          <NuxtLink
            to="/"
            @click="closeMenu"
            class="rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            active-class="bg-white/10 text-primary-light"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            @click="closeMenu"
            class="rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            active-class="bg-white/10 text-primary-light"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/funds"
            @click="closeMenu"
            class="rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            active-class="bg-white/10 text-primary-light"
          >
            Funds
          </NuxtLink>
        </nav>

        <div class="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
          <NuxtLink
            to="/login"
            @click="closeMenu"
            class="w-full rounded-lg border border-white/15 bg-white/5 py-2.5 text-center text-xs font-semibold text-white hover:bg-white/10"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            to="/register"
            @click="closeMenu"
            class="w-full rounded-lg bg-primary py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-primary-dark"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>