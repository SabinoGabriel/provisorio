import { api } from "@/utils/lib/api"
import { Tokens } from "@/types/auth"

export async function login(email: string, password: string): Promise<Tokens> {
    return api.post('auth/login', {
        email,
        password
    }).then(response => {
        const { accessToken, refreshToken } = response.data
        return { accessToken, refreshToken }
    }).catch(error => {
        console.log('Login error:', error)
        throw new Error(error.response?.data?.message || 'Erro no login. Email ou senha inválidos.')
    })
}
