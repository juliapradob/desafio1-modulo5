export async function buscaProdutos() {
    const requisicao = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
    return requisicao.json()
}