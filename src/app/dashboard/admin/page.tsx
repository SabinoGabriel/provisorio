"use client"

import { useRouter } from "next/router"

export default function AdminDashboard() {
    const route = useRouter()
    return (
        <div>
            <h1>Dashboard Admin</h1>
            <button onClick={() => route.push('/dashboard/admin/psicologos')}>Psicologos</button>
        </div>
    )
}