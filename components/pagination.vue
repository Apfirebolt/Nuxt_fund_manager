<template>
  <div class="flex items-center justify-center space-x-2 my-5">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 text-white bg-primaryDark rounded disabled:opacity-50"
    >
      Previous
    </button>

    <span
        v-for="(page, index) in pages"
        :key="index"
        @click="goToPage(page)"
        :class="[
            'px-4 py-2 rounded cursor-pointer',
            page === props.currentPage ? 'primaryDark text-white' : 'bg-gray-200 text-black'
        ]"
    >
        {{ page }}
    </span>

    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);
const pages = ref([]);

function prevPage() {
  if (props.currentPage > 1) {
    emit("update:currentPage", props.currentPage - 1);
  }
}

function nextPage() {
  if (props.currentPage < props.totalPages) {
    emit("update:currentPage", props.currentPage + 1);
  }
}

function goToPage(page) {
    // advanced pagination logic
    if (page === "...") {
        return;
    }
    emit("update:currentPage", page);

}

onMounted(() => {
  if (props.totalPages < 10) {
    pages.value = Array.from({ length: props.totalPages }, (_, i) => i + 1);
  } else {
    pages.value = [
      ...Array.from({ length: 3 }, (_, i) => i + 1),
      "...",
      ...Array.from({ length: 3 }, (_, i) => props.totalPages - 2 + i),
    ];
  }
});
</script>
