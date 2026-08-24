<template>
  <footer class="border-t border-primary-dark/40 bg-secondary text-white/90 antialiased">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
        
        <div class="space-y-4 md:col-span-6">
          <div class="flex items-center gap-2">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span class="text-lg font-bold tracking-tight text-white">Fund Manager</span>
          </div>
          <p class="max-w-sm text-xs leading-relaxed text-white/70">
            Intelligent portfolio analytics, automated fund tracking, and financial insights designed for modern asset management.
          </p>
        </div>

        <div class="space-y-3 md:col-span-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-primary-light">Platform</h3>
          <ul class="space-y-2 text-xs">
            <li>
              <NuxtLink to="/dashboard" class="transition-colors duration-200 hover:text-primary-light">
                Dashboard
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/analytics" class="transition-colors duration-200 hover:text-primary-light">
                Portfolio Analytics
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/funds" class="transition-colors duration-200 hover:text-primary-light">
                Asset Allocation
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-3 md:col-span-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-primary-light">Support &amp; Legal</h3>
          <ul class="space-y-2 text-xs">
            <li>
              <NuxtLink to="/privacy" class="transition-colors duration-200 hover:text-primary-light">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="transition-colors duration-200 hover:text-primary-light">
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="transition-colors duration-200 hover:text-primary-light">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-white/60">
        <p>&copy; {{ CURRENT_YEAR }} Fund Manager. All rights reserved.</p>
        <div class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span>System Operational</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const CURRENT_YEAR = new Date().getFullYear();
</script>