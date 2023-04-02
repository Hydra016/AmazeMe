export async function load({data, fetch, params}) {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json()
    const foundProducts = products.filter(product => product.category === params.id) 
    if(response.ok) {
        return {
            products: foundProducts,
            category: params.id
        }
    }
}
