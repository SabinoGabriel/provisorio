import axios from "axios"

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL

if (!apiBaseUrl) {
    const message = "NEXT_PUBLIC_API_URL environment variable is missing; falling back to relative requests."
    if (typeof window === "undefined") {
        console.warn(`[api] ${message}`)
    } else {
        console.warn(`[api] ${message}`)
    }
}

const apiInstance = axios.create({
    baseURL: apiBaseUrl || undefined,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

export function setToken(token: string) {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { apiInstance as api } 
