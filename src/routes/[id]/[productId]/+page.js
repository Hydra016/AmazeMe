
export async function load({data, fetch, params}) {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json()
    const foundProduct = products.find(product => product.id == params.productId) 
    if(response.ok) {
        return {
            product: foundProduct,
        }
    }
}

export const _addToCart = () => {
    console.log('added')
}