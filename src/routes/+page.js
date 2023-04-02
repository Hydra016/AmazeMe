export async function load({data, fetch}) {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json()
    if(response.ok) {
        return {
            products: products
        }
    }
}
