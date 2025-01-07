import { defineEventHandler, readBody } from 'h3'
import axios from 'axios'

const API_URL = 'https://softgenie.org/api'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (event.req.url?.includes('/login')) {
        return await login(body)
    } else if (event.req.url?.includes('/register')) {
        return await register(body)
    } else {
        return { message: 'Invalid endpoint' }
    }
})

const login = async (body: any) => {
    try {
        const response = await axios.post(`${API_URL}/login`, body)
        return response.data
    } catch (error: any) {
        return { error: error.response?.data || 'Login failed' }
    }
}

const register = async (body: any) => {
    try {
        const response = await axios.post(`${API_URL}/register`, body)
        return response.data
    } catch (error: any) {
        return { error: error.response?.data || 'Registration failed' }
    }
}