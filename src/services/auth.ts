import { api } from "@/utils/lib/api"
import { Tokens, LoginFormData, RegisterPatientFormData, RegisterPsychologistFormData } from "@/types/auth"

export async function login({ email, password }: LoginFormData): Promise<Tokens> {
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

export async function registerPatient({
    name,
    chosen_name,
    gender,
    cpf,
    email,
    phone_number,
    birth_date,
    password,
    how_found_us
}: RegisterPatientFormData): Promise<RegisterPatientFormData> {
    return api.post('auth/register/patient', {
        name,
        chosen_name,
        gender,
        cpf,
        email,
        phone_number,
        password,
        how_found_us,
        birth_date: birth_date.toISOString().split('T')[0],
    })
        .then(response => {
            console.log('Register Patient response:', response)
            return response.status === 201 ? response.data : Promise.reject("Cadastro falhou")
        })
        .catch(error => {
            console.log('Register error:', error)
            throw new Error(error.response?.data?.message || 'Erro no cadastro. Tente novamente.')
        })
}

export async function registerPsychologist({
    name,
    chosen_name,
    gender,
    cpf,
    email,
    phone_number,
    birth_date,
    password,
    how_found_us,
    crp,
    about_you,
    education_and_specializations,
    platform_expectations
}: RegisterPsychologistFormData): Promise<RegisterPsychologistFormData> {
    return api.post('auth/register/psychologist', {
        name,
        chosen_name,
        gender,
        cpf,
        email,
        phone_number,
        password,
        how_found_us,
        crp,
        about_you,
        education_and_specializations,
        platform_expectations,
        birth_date: birth_date.toISOString().split('T')[0],
    })
        .then(response => {
            console.log('Register Psychologist response:', response)
            return response.status === 201 ? response.data : Promise.reject("Cadastro falhou")
        })
        .catch(error => {
            console.log('Register error:', error)
            throw new Error(error.response?.data?.message || 'Erro no cadastro. Tente novamente.')
        })
}

export async function verifyEmail(email: string, code: string): Promise<Tokens> {
    return api.post('auth/verify-email', { 
        email,
        code
    })
        .then(response => {
            console.log('Verify Email response:', response)
            const { accessToken } = response.data
            return accessToken
        })
        .catch(error => {
            console.log('Verify error:', error)
            throw new Error(error.response?.data?.message || 'Erro ao verificar o código. Tente novamente.')
        })
}