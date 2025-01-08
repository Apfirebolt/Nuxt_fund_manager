<template>
    <header class="bg-primary text-white p-4">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">Fund Manager</h1>
            <nav>
            <ul class="hidden md:flex space-x-4">
                <li><NuxtLink to="/" class="px-3 py-2 rounded hover:bg-blue-700 transition-colors">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="px-3 py-2 rounded hover:bg-blue-700 transition-colors">About</NuxtLink></li>
                <li><NuxtLink to="/login" class="px-3 py-2 rounded hover:bg-blue-700 transition-colors">Login</NuxtLink></li>
                <li><NuxtLink to="/register" class="px-3 py-2 rounded hover:bg-blue-700 transition-colors">Register</NuxtLink></li>
            </ul>
            <button @click="toggleMenu" class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            </nav>
        </div>
        <transition name="fade">
            <ul v-if="isMenuOpen" class="md:hidden flex flex-col space-y-4 mt-4">
                <li class="py-2 text-center">
                    <NuxtLink to="/" class="block hover:underline transition-transform transform hover:scale-105">Home</NuxtLink>
                </li>
                <li class="py-2 text-center">
                    <NuxtLink to="/about" class="block hover:underline transition-transform transform hover:scale-105">About</NuxtLink>
                </li>
                <li class="py-2 text-center">
                    <NuxtLink to="/login" class="block hover:underline transition-transform transform hover:scale-105">Login</NuxtLink>
                </li>
                <li class="py-2 text-center">
                    <NuxtLink to="/register" class="block hover:underline transition-transform transform hover:scale-105">Register</NuxtLink>
                </li>
            </ul>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

nav ul li a {
    color: white;
}
</style>