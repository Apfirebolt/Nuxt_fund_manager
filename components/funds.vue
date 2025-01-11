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
        <div class="flex justify-between mt-4">
          <button
            @click="saveFund(fund)"
            class="bg-primaryDark text-neutral-100 px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            v-if="checkIfFundIsSaved(fund)"
            @click="removeFund(fund)"
            class="bg-danger text-neutral-100 px-4 py-2 rounded-lg"
          >
            Remove
          </button>
        </div>
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
const message = ref<string>("");
const savedFunds = ref<Fund[]>([]);

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

// save fund to local storage
const saveFund = async (fund: Fund): Promise<void> => {
  const savedFunds = localStorage.getItem("savedFunds");
  if (savedFunds) {
    const funds = JSON.parse(savedFunds);
    funds.push(fund);
    localStorage.setItem("savedFunds", JSON.stringify(funds));
    message.value = "Fund saved successfully";
    setTimeout(() => {
      message.value = "";
    }, 3000);
  } else {
    localStorage.setItem("savedFunds", JSON.stringify([fund]));
  }
  loadSavedFunds();
  getFunds();
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
  }
  loadSavedFunds();
  getFunds();
};

// load saved funds from local storage
const loadSavedFunds = (): void => {
  const funds = localStorage.getItem("savedFunds");
  if (funds) {
    savedFunds.value = JSON.parse(funds);
  }
};

const checkIfFundIsSaved = (fund: Fund): boolean => {
  return savedFunds.value.some((f: Fund) => f.id === fund.id);
};

onMounted(() => {
  getFunds();
  loadSavedFunds();
});
</script>
