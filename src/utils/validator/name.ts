export function isValidName(value: string): boolean {
    const words = value.trim().split(" ") // Divide o nome em partes
    const firstName = words[0] // Primeiro nome
    const lastName = words[words.length - 1] // Ultimo nome
    const middleWords = words.slice(1, -1) // Palavras do meio
    const allowedPrepositions = ["de", "da", "do", "das", "dos"] // Preposições permitidas

    // Nenhuma palavra pode ter só uma letra
    if (words.some((w) => w.length === 1)) return false

    // Nome e sobrenome devem ter pelo menos 3 letras
    if (firstName.length < 3 || lastName.length < 3) return false

    // Palavras do meio só podem ter 2 letras se forem preposições permitidas
    for (const word of middleWords) {
        if (word.length === 2 && !allowedPrepositions.includes(word.toLowerCase())) {
        return false
        }
    }

    // Se chegou aqui, significa que o nome é valido
    return true
}
