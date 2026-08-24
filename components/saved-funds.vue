<template>
  <div class="space-y-6 antialiased">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex min-h-[45vh] items-center justify-center">
      <loader label="Retrieving Saved Holdings..." />
    </div>

    <div v-else class="space-y-6">
      <!-- Section Action Header -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-700/50 pb-5">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
            <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
            Asset Watchlist
          </div>
          <h2 class="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Bookmarked Portfolio Schemes
          </h2>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 rounded-lg border border-slate-700 bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-slate-300">
            <span>Tracked:</span>
            <span class="font-bold text-white">{{ fundData.results.length }}</span>
          </div>
        </div>
      </div>

      <!-- Action Toast / Banner -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="message.length"
          class="flex items-center justify-between rounded-xl border border-primary/40 bg-secondary/90 px-4 py-3 text-xs font-medium text-white shadow-lg backdrop-blur-md"
        >
          <div class="flex items-center gap-2.5">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">✓</span>
            <span>{{ message }}</span>
          </div>
          <button @click="message = ''" class="text-white/60 hover:text-white">&times;</button>
        </div>
      </transition>

      <!-- Portfolio Cards Grid -->
      <div v-if="fundData.results.length" class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="fund in fundData.results"
          :key="fund.id"
          class="group flex flex-col justify-between rounded-2xl border border-slate-700/60 bg-secondary/50 p-5 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-lg"
        >
          <div>
            <!-- Header Badges -->
            <div class="flex items-start justify-between gap-3 border-b border-slate-700/40 pb-3">
              <span class="rounded-md border border-primary-light/20 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary-light uppercase">
                {{ fund.scheme_type || 'Mutual Fund' }}
              </span>
              <div class="text-right">
                <span class="text-[10px] uppercase tracking-wider text-slate-400">Current NAV</span>
                <p class="font-mono text-sm font-bold text-white">₹{{ fund.net_asset_value }}</p>
              </div>
            </div>

            <!-- Title -->
            <h3 class="mt-3 text-sm font-bold leading-snug text-white group-hover:text-primary-light transition-colors line-clamp-2">
              {{ fund.scheme_name }}
            </h3>

            <!-- Key Financial Data Points -->
            <div class="mt-4 space-y-2 rounded-xl bg-slate-900/40 p-3 text-xs">
              <div class="flex justify-between text-slate-400">
                <span>Fund House</span>
                <span class="max-w-[65%] truncate text-right font-medium text-slate-200">{{ fund.mutual_fund_family }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Category</span>
                <span class="max-w-[65%] truncate text-right text-slate-300">{{ fund.scheme_category || 'General' }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Scheme Code</span>
                <span class="font-mono text-slate-300">{{ fund.scheme_code }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>ISIN Growth</span>
                <span class="font-mono text-[11px] text-slate-400">{{ fund.isin_div_payout_isin_growth || 'N/A' }}</span>
              </div>
              <div class="flex justify-between border-t border-slate-700/40 pt-2 text-[11px] text-slate-400">
                <span>Updated</span>
                <span>{{ fund.date }}</span>
              </div>
            </div>
          </div>

          <!-- Card Actions -->
          <div class="mt-5 border-t border-slate-700/40 pt-3">
            <button
              type="button"
              @click="removeFund(fund)"
              class="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 py-2 text-xs font-semibold text-primary-light transition-all hover:bg-primary hover:text-white"
            >
              <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Remove from Watchlist</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Clean Empty State -->
      <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-secondary/20 py-16 text-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 text-slate-400">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 class="mt-3 text-sm font-bold text-white">No Schemes in Watchlist</h3>
        <p class="mt-1 max-w-xs text-xs text-slate-400">
          You haven't saved any funds yet. Browse the fund directory to monitor performance.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Fund {
  id: number;
  scheme_name: string;
  scheme_code: string;
  date: string;
  isin_div_payout_isin_growth: string;
  isin_div_reinvestment: string;
  mutual_fund_family: string;
  net_asset_value: string;
  scheme_category: string;
  scheme_type: string;
}

interface FundData {
  count: number;
  results: Fund[];
}

const fundData = ref<FundData>({ count: 0, results: [] });
const isLoading = ref<boolean>(false);
const message = ref<string>("");

const getFunds = async (): Promise<void> => {
  const savedFunds = localStorage.getItem("savedFunds");
  if (savedFunds) {
    try {
      const funds = JSON.parse(savedFunds);
      fundData.value = {
        count: funds.length,
        results: funds,
      };
    } catch {
      fundData.value = { count: 0, results: [] };
    }
  } else {
    fundData.value = { count: 0, results: [] };
  }
};

const removeFund = (fund: Fund): void => {
  const savedFunds = localStorage.getItem("savedFunds");
  if (savedFunds) {
    try {
      const funds: Fund[] = JSON.parse(savedFunds);
      const updatedFunds = funds.filter((f: Fund) => f.id !== fund.id);
      localStorage.setItem("savedFunds", JSON.stringify(updatedFunds));
      message.value = `Removed "${fund.scheme_name}"`;
      setTimeout(() => {
        message.value = "";
      }, 3000);
      getFunds();
    } catch (error) {
      console.error("Error updating saved funds:", error);
    }
  }
};

onMounted(() => {
  getFunds();
});
</script>