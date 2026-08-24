<template>
  <nav
    v-if="totalPages > 1"
    class="flex flex-wrap items-center justify-center gap-1.5 py-6 antialiased select-none"
    aria-label="Pagination Navigation"
  >
    <!-- Previous Button -->
    <button
      type="button"
      @click="prevPage"
      :disabled="currentPage === 1"
      class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-secondary/80 px-3.5 py-2 text-xs font-semibold text-white/90 shadow-sm backdrop-blur-sm transition-all hover:border-primary-light/40 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-light/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:bg-secondary/80 disabled:hover:text-white/90"
      aria-label="Go to previous page"
    >
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="hidden sm:inline">Previous</span>
    </button>

    <!-- Page Items -->
    <div class="flex items-center gap-1">
      <template v-for="(page, index) in visiblePages" :key="index">
        <!-- Ellipsis -->
        <span
          v-if="page === '...'"
          class="flex h-9 w-9 items-center justify-center text-xs font-medium text-white/40"
        >
          •••
        </span>

        <!-- Numbered Page Button -->
        <button
          v-else
          type="button"
          @click="goToPage(page)"
          :aria-current="page === currentPage ? 'page' : undefined"
          :class="[
            'flex h-9 min-w-9 items-center justify-center rounded-xl px-3 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light/30',
            page === currentPage
              ? 'bg-primary text-white shadow-md shadow-primary/25 ring-1 ring-primary-light/40 font-bold'
              : 'border border-white/10 bg-secondary/60 text-white/80 hover:border-primary-light/30 hover:bg-secondary hover:text-white'
          ]"
        >
          {{ page }}
        </button>
      </template>
    </div>

    <!-- Next Button -->
    <button
      type="button"
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-secondary/80 px-3.5 py-2 text-xs font-semibold text-white/90 shadow-sm backdrop-blur-sm transition-all hover:border-primary-light/40 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-light/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:bg-secondary/80 disabled:hover:text-white/90"
      aria-label="Go to next page"
    >
      <span class="hidden sm:inline">Next</span>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  totalPages: number;
  currentPage: number;
}

const props = withDefaults(defineProps<Props>(), {
  totalPages: 1,
  currentPage: 1,
});

const emit = defineEmits<{
  (e: 'update:currentPage', value: number): void;
}>();

// Dynamically calculates sliding pagination windows with ellipses
const visiblePages = computed<(number | string)[]>(() => {
  const total = props.totalPages;
  const current = props.currentPage;

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  // Near the start
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }

  // Near the end
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }

  // In the middle
  return [1, '...', current - 1, current, current + 1, '...', total];
});

const prevPage = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1);
  }
};

const goToPage = (page: number | string) => {
  if (typeof page === 'number' && page !== props.currentPage) {
    emit('update:currentPage', page);
  }
};
</script>