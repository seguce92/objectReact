import './assets/css/app.css'
import React, { useState } from 'react';

import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'
import persistentCart from './persistentCart'

class App extends React.Component {

    constructor (props) {
        super(props);

        const obj = {
            total_productos: 0,
            descuentos: 0,
            total_suma: 0,
            productos: {
                Samsung: [],
                Apple: [],
                Motorola: []
            }
        }

        persistentCart().get() ??
            persistentCart().persist(JSON.stringify(obj));

        this.state = {
            show: false,
            productStore: []
        }
    }

    render () {
        const { productStore } = this.state;

        return (
            <div className="font-sans">
                <header className="w-full h-20 bg-blue-300 flex justify-end items-center">
                    <button className="mr-4 px-2 py-2 rounded-full hover:shadow-lg outline-none focus:outline-none"
                        type="button"
                        onClick={() => {
                            this.setState({show: !this.state.show});
                        }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </header>

                <main className="w-full max-w-7xl mx-auto bg-gray-100 my-10 px-4 py-6">
                    <div className="py-2">
                        <h2 className="text-2xl">Productos</h2>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-4">
                        { productStore.map(product => product.telefonos.map(phone => phone.cantidad > 0 && <Product key={phone.id} phone={phone} mark={product.marca} /> ))}
                    </div>
                </main>

                { this.state.show &&
                    <section className="fixed inset-0 top-0 right-0 bottom-0 h-screen max-w-lg bg-gray-100 w-full z-20">
                        <ShoppingCart />
                    </section>
                }

            </div>  
        );
    }

    componentWillMount() {
        fetch('products.json')
            .then((data) => {
                return data.json();
            })
            .then((productStore) => {
                this.setState({
                    productStore
                })
            })
    }
}

export default App;
