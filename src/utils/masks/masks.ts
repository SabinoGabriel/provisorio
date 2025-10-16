export function maskPhone(value: string): string {
  return value
    .replace(/^\+(\d{2})/, "") // Remove o código do país se estiver presente no auto-preenchimento
    .replace(/\D/g, "") // Remove tudo que não é dígito/número
    .replace(/^(\d{2})(\d)/, "($1) $2") // Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d{5})(\d{4})$/, "$1-$2") // Coloca hífen entre o quarto e o quinto dígitos
    .slice(0, 15) // Limita o tamanho máximo para 15 caracteres (incluindo parênteses e hífen)
}

export function maskCPF(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo que não é dígito/número
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígitos
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o sexto e o sétimo dígitos
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2") // Coloca um hífen entre o nono e o décimo dígitos
    .slice(0, 14) // Limita o tamanho máximo para 14 caracteres (incluindo pontos e hífen)
}

export function maskCRP(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .slice(0, 8)
}