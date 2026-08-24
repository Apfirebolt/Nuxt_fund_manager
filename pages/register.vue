<template>
  <div class="min-h-screen bg-secondary flex items-center justify-center p-4 sm:p-6 lg:p-8 antialiased selection:bg-primary selection:text-white">
    <div class="w-full max-w-md">
      
      <!-- Card Container -->
      <div class="overflow-hidden rounded-3xl border border-white/10 bg-secondary/60 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        
        <!-- Header -->
        <div class="text-center">
          <NuxtLink to="/" class="inline-flex items-center gap-2 mb-4 focus:outline-none">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </NuxtLink>
          <h1 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Create Account
          </h1>
          <p class="mt-2 text-xs text-white/60">
            Start managing and tracking your mutual funds portfolio today
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="mt-8 space-y-5">
          <!-- Full Name Input -->
          <div>
            <label for="name" class="block text-xs font-semibold uppercase tracking-wider text-primary-light mb-2">
              Full Name
            </label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                autocomplete="name"
                placeholder="John Doe"
                class="w-full rounded-xl border border-white/10 bg-secondary/80 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 shadow-inner transition-all focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/30"
              />
            </div>
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-xs font-semibold uppercase tracking-wider text-primary-light mb-2">
              Email Address
            </label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                placeholder="name@example.com"
                class="w-full rounded-xl border border-white/10 bg-secondary/80 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 shadow-inner transition-all focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/30"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-xs font-semibold uppercase tracking-wider text-primary-light mb-2">
              Password
            </label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="form.password"
                type="password"
                required
                autocomplete="new-password"
                placeholder="••••••••"
                class="w-full rounded-xl border border-white/10 bg-secondary/80 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 shadow-inner transition-all focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/30"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-3 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="isLoading" class="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>{{ isLoading ? 'Creating Account...' : 'Get Started' }}</span>
            </button>
          </div>
        </form>

        <!-- Footer / Redirect -->
        <div class="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          <span>Already have an account?</span>
          <NuxtLink to="/login" class="ml-1 font-semibold text-primary-light hover:underline">
            Sign In
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

definePageMeta({
  title: 'Register - Fund Manager',
  description: 'Create a new Fund Manager account to track and manage your portfolio.',
});

useHead({
  title: 'Register | Fund Manager',
});

interface Form {
  name: string;
  email: string;
  password: string;
}

const form = reactive<Form>({
  name: '',
  email: '',
  password: '',
});

const isLoading = ref<boolean>(false);

const submitForm = async (): Promise<void> => {
  isLoading.value = true;
  try {
    console.log('Registering account for:', form.email);
    // Add your registration API call here
  } catch (error) {
    console.error('Registration error:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>