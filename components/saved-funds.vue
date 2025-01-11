<template>
    <div v-if="isLoading" class="text-center">
      <loader />
    </div>
    <div v-else>
      <p v-if="message.length" class="text-xl bg-white text-primaryDark px-2 py-3 my-3">
        {{ message }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div
          v-for="fund in fundData.results"
          :key="fund.id"
          class="bg-primaryLight text-gray-700 shadow-md rounded-lg p-4"
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
          <div class="flex justify-between mt-4">
            <button
              @click="removeFund(fund)"
              class="bg-secondary text-neutral-100 px-4 py-2 rounded-lg hover:bg-primaryDark transition-colors duration-300 ease-linear"
            >
              Remove
            </button>
          </div>
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
    // load the data from local storage
    const savedFunds = localStorage.getItem("savedFunds");
    if (savedFunds) {
      const funds = JSON.parse(savedFunds);
      fundData.value.results = funds;
    }
  };
  
  const removeFund = (fund: Fund): void => {
    const savedFunds = localStorage.getItem("savedFunds");
    if (savedFunds) {
      const funds = JSON.parse(savedFunds);
      const updatedFunds = funds.filter((f: Fund) => f.id !== fund.id);
      localStorage.setItem("savedFunds", JSON.stringify(updatedFunds));
      message.value = "Fund removed successfully";
      setTimeout(() => {
        message.value = "";
      }, 3000);
      getFunds();
    }
  };
  
  onMounted(() => {
    getFunds();
  });
  </script>
  