<template>
    <NuxtLayout>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Dang</h1>
      <p class="text-lg text-gray-700 mb-2">
        <strong>{{ error.message }}</strong>
      </p>
      <p class="text-gray-600 mb-2">It looks like something broke.</p>
      <p class="text-gray-600">Sorry about that.</p>
    </div>
    </NuxtLayout>
  </template>

<script setup>
const error = useError();
</script>