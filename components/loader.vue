<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.loader {
    border-top-color: #3498db;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>