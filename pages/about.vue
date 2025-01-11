<template>
  <div
    class="about-content bg-gradient-to-r from-primary-dark to-secondary-dark text-primary-dark py-4 px-6"
  >
    <div
      class="hero-section bg-cover bg-center text-white py-20"
      style="background-image: url('https://cdn.pixabay.com/photo/2025/01/02/23/26/butterfly-9306937_1280.jpg');"
    >
      <h1 class="text-5xl font-bold text-center">About Us</h1>
      <p class="text-center mt-4 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget
        sapien fermentum tincidunt. Nullam nec nunc nec nunc.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'About Us - Nuxt Fund Manager',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Nuxt Fund Manager, our mission, values, and team. Discover how we are committed to providing the best fund management services.'
    }
  ]
});
</script>