<template>
    <div class="container mx-auto p-4 text-white">
        <h1 class="text-4xl font-bold text-center mb-4">Welcome to Nuxt Fund Manager</h1>
        <p>
            This page would show you list of saved funds.
        </p>
        <ClientOnly>
            <SavedFunds />
        </ClientOnly>
    </div>
</template>

<script setup>
definePageMeta({
  title: 'Funds - Nuxt Fund Manager',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Nuxt Fund Manager, our mission, values, and team. Discover how we are committed to providing the best fund management services.'
    }
  ]
});
</script>