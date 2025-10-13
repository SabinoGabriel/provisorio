import { showToast } from '@/components/ui/Toast'
import axios from 'axios'

if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('Missing NEXT_PUBLIC_API_URL environment variable')
}

const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export function setToken(token: string) {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { apiInstance as api } 
