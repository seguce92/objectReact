import persistentCart from '../persistentCart';


const updateCart = (cartProducts) => {

    let apple = cartProducts.productos.Apple.reduce( (sum, p) => {
            sum += p.cantidad;
            return sum;
        }, 0);
    let samsung = cartProducts.productos.Samsung.reduce( (sum, p) => {
            sum += p.cantidad;
            return sum;
        }, 0);
    let motorola = cartProducts.productos.Motorola.reduce( (sum, p) => {
            sum += p.cantidad;
            return sum;
        }, 0);
    
    let productQuantity = apple + samsung + motorola

    let papple = cartProducts.productos.Apple.reduce( (sum, p) => {
            sum += p.precio * p.cantidad;
            return sum;
        }, 0);
    let psamsung = cartProducts.productos.Samsung.reduce( (sum, p) => {
        sum += p.precio * p.cantidad;
        return sum;
    }, 0);
    let pmotorola = cartProducts.productos.Motorola.reduce( (sum, p) => {
        sum += p.precio * p.cantidad;
        return sum;
    }, 0);

    let totalPrice = papple + psamsung + pmotorola;

    let cartTotals = {
        total_productos: productQuantity,
        descuentos: 0,
        total_suma: totalPrice,
        productos: cartProducts.productos
    }

    persistentCart().persist(JSON.stringify(cartTotals));
}

export default updateCart
