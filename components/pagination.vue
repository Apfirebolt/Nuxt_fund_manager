<template>
    <div class="flex items-center justify-center space-x-2">
        <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
        >
            Previous
        </button>
        
        <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
        >
            Next
        </button>
    </div>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    emits: ['update:currentPage'],
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.$emit('update:currentPage', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('update:currentPage', this.currentPage + 1);
            }
        },
    },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>