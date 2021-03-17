import updateCart from './updateCart';
import persistentCart from '../persistentCart'


const removeProduct = (product, mark) => {
    let cartProducts = JSON.parse(persistentCart().get());

    Object.keys(cartProducts.productos).map(m => {
        if ( m == mark ) {
            cartProducts.productos[mark] = cartProducts.productos[mark].filter(function(p) {
                return p.id !== product.id; 
            });
        }
    })

    cartProducts = updateCart(cartProducts)

    return cartProducts
}

export default removeProduct