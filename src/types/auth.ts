type Tokens = {
    accessToken: string
    refreshToken?: string
}

type LoginFormData = {
    email: string
    password: string
}

type RegisterPatientFormData = {
    name: string
    chosen_name?: string
    gender: string
    cpf: string
    email: string
    phone_number: string
    birth_date: Date
    password: string
    how_found_us: string
}

type RegisterPsychologistFormData = {
    name: string
    chosen_name?: string
    gender: string
    cpf: string
    email: string
    phone_number: string
    birth_date: Date
    password: string
    how_found_us: string
    crp: string
    about_you: string
    education_and_specializations: string
    platform_expectations: string
}

type RecoveryCodeForm = {
    code: string
}

export type { 
    Tokens, 
    LoginFormData, 
    RegisterPatientFormData,
    RegisterPsychologistFormData,
    RecoveryCodeForm
}
