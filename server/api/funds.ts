import { defineEventHandler } from 'h3'

interface Fund {
    id: number;
    scheme_code: number;
    date: string;
    isin_div_payout_isin_growth: string;
    isin_div_reinvestment: string;
    mutual_fund_family: string;
    net_asset_value: string;
    scheme_category: string;
    scheme_name: string;
    scheme_type: string;
}

interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Fund[];
}

export default defineEventHandler(async (event): Promise<ApiResponse> => {
    const query = getQuery(event)
    const search = query.search || ''
    const page = query.page || 1

    try {
        const response: ApiResponse = await $fetch<ApiResponse>(`https://softgenie.org/api/funds?page=${page}&search=${search}`)
        // console.log('Fetched funds:', response.count)
        return response
    } catch (error) {
        console.error('Error fetching funds:', error)
        throw error
    }
})