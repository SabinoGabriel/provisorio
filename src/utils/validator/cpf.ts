export function validateCPF(value: string): boolean {
    const cpf = value.replace(/\D/g, '') // Remove tudo que não é dígito/número
    
    // Verifica se o CPF tem os 11 dígitos iguais
    if (!!cpf.match(/(\d)\1{10}/)) return false

    const digits = cpf.split("").map(Number) // Converte o CPF em um array de dígitos
    const validator = digits.slice(-2) // Pega os dois dígitos verificadores

    // Realiza o cálculo dos dígitos verificadores
    const calculateDigit = (length: number) => {
        const sum = digits
        .slice(0, length)
        .reduce((acc, num, i) => acc + num * (length + 1 - i), 0)

        const result = (sum * 10) % 11
        return result === 10 ? 0 : result
    }

    return calculateDigit(9) === validator[0] 
        && calculateDigit(10) === validator[1]
}