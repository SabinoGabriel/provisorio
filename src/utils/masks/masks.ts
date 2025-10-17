export function maskPhone(value: string): string {
  return value
    .replace(/^\+(\d{2})/, "") // Remove o código do país se estiver presente no auto-preenchimento
    .replace(/\D/g, "") // Remove tudo que não é dígito/número
    .replace(/^(\d{2})(\d)/, "($1)$2") // Coloca parênteses em volta dos dois primeiros dígitos
    .slice(0, 13) // Limita o tamanho máximo para 15 caracteres (incluindo parênteses e hífen)
}

export function maskCPF(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo que não é dígito/número
    .slice(0, 11) // Limita o tamanho máximo para 11 caracteres
}

export function maskCRP(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo que não é dígito/número
    .replace(/(\d{2})(\d)/, "$1/$2") // Coloca barra entre os dois primeiros dígitos
    .slice(0, 8) // Limita o tamanho máximo para 8 caracteres
}