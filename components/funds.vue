<template>
  <div v-if="isLoading" class="text-center">
    <loader />
  </div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div
        v-for="fund in fundData.results"
        :key="fund.id"
        class="bg-primaryLight text-neutral-100 shadow-md rounded-lg p-4"
      >
        <h2 class="text-xl font-bold mb-2">{{ fund.scheme_name }}</h2>
        <p><strong>Scheme Code:</strong> {{ fund.scheme_code }}</p>
        <p><strong>Date:</strong> {{ fund.date }}</p>
        <p>
          <strong>ISIN Growth:</strong> {{ fund.isin_div_payout_isin_growth }}
        </p>
        <p>
          <strong>ISIN Reinvestment:</strong> {{ fund.isin_div_reinvestment }}
        </p>
        <p>
          <strong>Mutual Fund Family:</strong> {{ fund.mutual_fund_family }}
        </p>
        <p><strong>Net Asset Value:</strong> {{ fund.net_asset_value }}</p>
        <p><strong>Scheme Category:</strong> {{ fund.scheme_category }}</p>
        <p><strong>Scheme Type:</strong> {{ fund.scheme_type }}</p>
      </div>
    </div>
    <pagination
      :currentPage="currentPage"
      :totalPages="Math.ceil(fundData.count / 25)"
      @update:current-page="updateCurrentPage"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
const isLoading = ref<boolean>(false);
const currentPage = ref<number>(1);

// write a function to get api data from api/funds
const getFunds = async (): Promise<void> => {
  try {
    isLoading.value = true;
    const response = await axios.get("/api/funds", {
      params: {
        page: currentPage.value,
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      isLoading.value = false;
      fundData.value = response.data;
    }
  } catch (error) {
    isLoading.value = false;
    console.error(error);
  }
};

// for pagination
const updateCurrentPage = (page: number): void => {
  currentPage.value = page;
  getFunds();
};

onMounted(() => {
  getFunds();
});
</script>
