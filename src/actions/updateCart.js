import persistentCart from '../persistentCart';


const updateCart = (cartProducts) => {

    let productQuantity = 0;
    Object.keys(cartProducts.productos).map(mark => {
        let total = cartProducts.productos[mark].reduce( (sum, p) => {
            sum += p.cantidad;
            return sum;
        }, 0);

        productQuantity += total
    })

    let totalPrice = 0;
    Object.keys(cartProducts.productos).map(mark => {
        let total = cartProducts.productos[mark].reduce( (sum, p) => {
            sum += p.precio * p.cantidad;
            return sum;
        }, 0);

        totalPrice += total
    })

    let cartTotals = {
        total_productos: productQuantity,
        descuentos: 0,
        total_suma: totalPrice,
        productos: cartProducts.productos
    }

    persistentCart().persist(JSON.stringify(cartTotals));

    return cartTotals
}

export default updateCart
