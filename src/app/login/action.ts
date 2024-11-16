// criação da autenticação para as rotas privadas
export default function handler() {
    const authToken = "meu-token-seguro";
    document.cookie = `authToken=${authToken}; path=/; Secure; SameSite=Strict`;
}

// remoção da autenticação
export function logout() {
    document.cookie = "authToken=; path=/; Max-Age=0";
}