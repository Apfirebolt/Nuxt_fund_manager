<template>
  <div class="min-h-screen py-8 text-white/90">
    <div v-if="isLoading" class="flex min-h-[50vh] items-center justify-center">
      <loader />
    </div>

    <div v-else class="space-y-8">
      <!-- Status Toast / Alert -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div
          v-if="message.length"
          class="flex items-center gap-3 rounded-xl border border-primary/40 bg-secondary/90 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md"
        >
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">✓</span>
          <span>{{ message }}</span>
        </div>
      </transition>

      <!-- Search & Autocomplete Header -->
      <div class="relative z-30 rounded-2xl border border-white/10 bg-secondary/40 p-6 shadow-md backdrop-blur-sm">
        <div class="flex flex-col gap-2">
          <label for="fundSearch" class="text-xs font-bold uppercase tracking-wider text-primary-light">
            Search Mutual Funds
          </label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/50">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="fundSearch"
              type="text"
              v-model="searchQuery"
              placeholder="Search by scheme name, fund house, or category..."
              class="w-full rounded-xl border border-white/10 bg-secondary/80 py-3.5 pl-11 pr-12 text-sm text-white placeholder:text-white/40 shadow-inner transition-all focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/30"
            />
            <div v-if="isDropdownLoading" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <dropdown-loader />
            </div>
          </div>
        </div>

        <!-- Dropdown Suggestions -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <ul
            v-if="fundDataDropdown?.results?.length && searchQuery.length > 3 && !isDropdownLoading"
            class="absolute inset-x-6 top-full mt-2 max-h-64 overflow-y-auto rounded-xl border border-white/15 bg-secondary/95 py-2 shadow-2xl backdrop-blur-md divide-y divide-white/5"
          >
            <li
              v-for="fund in fundDataDropdown.results"
              :key="fund.id"
              @click="clickFund(fund)"
              class="cursor-pointer px-4 py-3 text-xs font-medium text-white/90 transition-colors hover:bg-primary hover:text-white"
            >
              <div class="font-semibold text-white">{{ fund.scheme_name }}</div>
              <div class="mt-0.5 flex gap-2 text-[11px] text-white/60">
                <span>Code: {{ fund.scheme_code }}</span>
                <span>•</span>
                <span>{{ fund.mutual_fund_family }}</span>
              </div>
            </li>
          </ul>
        </transition>
      </div>

      <!-- Funds Grid -->
      <div v-if="fundData.results.length" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="fund in fundData.results"
          :key="fund.id"
          class="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-secondary/40 p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
        >
          <div>
            <!-- Header Tags & Category -->
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span class="rounded-md border border-primary-light/30 bg-primary/20 px-2.5 py-0.5 text-[11px] font-semibold text-primary-light uppercase tracking-wider">
                {{ fund.scheme_type || 'Mutual Fund' }}
              </span>
              <span class="text-xs font-medium text-white/60">
                NAV: <strong class="text-sm font-bold text-white">₹{{ fund.net_asset_value }}</strong>
              </span>
            </div>

            <!-- Title -->
            <h2 class="mt-4 text-base font-bold leading-snug text-white transition-colors group-hover:text-primary-light line-clamp-2">
              {{ fund.scheme_name }}
            </h2>

            <!-- Detail Attributes -->
            <div class="mt-5 space-y-2 text-xs">
              <div class="flex items-center justify-between text-white/70">
                <span>Scheme Code:</span>
                <span class="font-mono text-white/90">{{ fund.scheme_code }}</span>
              </div>
              <div class="flex items-center justify-between text-white/70">
                <span>Fund Family:</span>
                <span class="max-w-[60%] truncate text-right font-medium text-white">{{ fund.mutual_fund_family }}</span>
              </div>
              <div class="flex items-center justify-between text-white/70">
                <span>Category:</span>
                <span class="max-w-[60%] truncate text-right text-white/80">{{ fund.scheme_category || 'General' }}</span>
              </div>
              <div class="flex items-center justify-between text-white/70">
                <span>ISIN Growth:</span>
                <span class="font-mono text-[11px] text-white/70">{{ fund.isin_div_payout_isin_growth || 'N/A' }}</span>
              </div>
              <div class="flex items-center justify-between text-white/70">
                <span>As of Date:</span>
                <span class="text-white/60">{{ fund.date }}</span>
              </div>
            </div>
          </div>

          <!-- Card Actions -->
          <div class="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
            <button
              type="button"
              @click="saveFund(fund)"
              class="flex-1 rounded-lg bg-primary py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            >
              Save Fund
            </button>
            <button
              v-if="checkIfFundIsSaved(fund)"
              type="button"
              @click="removeFund(fund)"
              class="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-xs font-semibold text-danger transition-all hover:bg-danger hover:text-white"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-secondary/20 py-16 text-center">
        <span class="text-3xl">📊</span>
        <h3 class="mt-3 text-base font-bold text-white">No Funds Available</h3>
        <p class="mt-1 text-xs text-white/60">Try adjusting your search criteria or page.</p>
      </div>

      <!-- Pagination Component -->
      <div v-if="fundData.count > 25" class="pt-4">
        <pagination
          :currentPage="currentPage"
          :totalPages="Math.ceil(fundData.count / 25)"
          @update:current-page="updateCurrentPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import axios from "axios";

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
const fundDataDropdown = ref<FundData>({ count: 0, results: [] });
const isLoading = ref<boolean>(false);
const isDropdownLoading = ref<boolean>(false);
const currentPage = ref<number>(1);
const message = ref<string>("");
const savedFunds = ref<Fund[]>([]);
const searchQuery = ref<string>("");

const debouncedSearch = ref<ReturnType<typeof setTimeout> | undefined>(undefined);

watch(searchQuery, () => {
  if (searchQuery.value.length > 3) {
    if (debouncedSearch.value) clearTimeout(debouncedSearch.value);
    debouncedSearch.value = setTimeout(() => {
      getFunds(searchQuery.value);
    }, 400);
  } else {
    fundDataDropdown.value = { count: 0, results: [] };
  }
});

const getFunds = async (searchText: string = ""): Promise<void> => {
  try {
    if (searchText) {
      isDropdownLoading.value = true;
    } else {
      isLoading.value = true;
    }
    const response = await axios.get("/api/funds", {
      params: {
        page: currentPage.value,
        search: searchText,
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      isLoading.value = false;
      if (searchText) {
        isDropdownLoading.value = false;
        fundDataDropdown.value = response.data;
      } else {
        fundData.value = response.data;
      }
    }
  } catch (error) {
    isLoading.value = false;
    isDropdownLoading.value = false;
    console.error(error);
  }
};

const updateCurrentPage = (page: number): void => {
  currentPage.value = page;
  getFunds();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const saveFund = (fund: Fund): void => {
  const saved = localStorage.getItem("savedFunds");
  let funds: Fund[] = saved ? JSON.parse(saved) : [];
  if (!funds.some((f) => f.id === fund.id)) {
    funds.push(fund);
    localStorage.setItem("savedFunds", JSON.stringify(funds));
    message.value = `"${fund.scheme_name}" saved to portfolio`;
    setTimeout(() => {
      message.value = "";
    }, 3000);
  }
  loadSavedFunds();
};

const removeFund = (fund: Fund): void => {
  const saved = localStorage.getItem("savedFunds");
  if (saved) {
    const funds: Fund[] = JSON.parse(saved);
    const updated = funds.filter((f) => f.id !== fund.id);
    localStorage.setItem("savedFunds", JSON.stringify(updated));
    message.value = `"${fund.scheme_name}" removed from portfolio`;
    setTimeout(() => {
      message.value = "";
    }, 3000);
  }
  loadSavedFunds();
};

const loadSavedFunds = (): void => {
  const funds = localStorage.getItem("savedFunds");
  if (funds) {
    savedFunds.value = JSON.parse(funds);
  }
};

const checkIfFundIsSaved = (fund: Fund): boolean => {
  return savedFunds.value.some((f: Fund) => f.id === fund.id);
};

const clickFund = (fund: Fund): void => {
  searchQuery.value = fund.scheme_name;
  fundDataDropdown.value = { count: 0, results: [] };
  currentPage.value = 1;
  getFunds(fund.scheme_name);
};

onMounted(() => {
  getFunds();
  loadSavedFunds();
});
</script>