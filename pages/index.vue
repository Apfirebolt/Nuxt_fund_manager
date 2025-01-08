<template>
    <div class="container mx-auto p-4 text-white">
        <h1 class="text-4xl font-bold text-center mb-4">Welcome to Nuxt Fund Manager</h1>
        <p>
            This page lists the funds available in the market. You can view the details of each fund by clicking on the fund name.
        </p>
        <ClientOnly>
            <funds />
        </ClientOnly>
    </div>
</template>