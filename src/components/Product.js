import React from 'react';

import Apple from './../assets/images/Apple.png'
import Samsung from './../assets/images/Samsung.png'
import Motorola from './../assets/images/Motorola.png'

import addProduct from "../actions/addProduct";

class Product extends React.Component {
    render () {
        const phone = this.props.phone
        const mark = this.props.mark  

        return (
            <div className="bg-white rounded-md shadow-lg flex flex-col">
                <h2 className="text-center mt-3 text-gray-600">{ mark }</h2>
                { 
                    <img src={ 
                        mark === 'Apple' ? 
                            Apple : mark === 'Samsung' ? 
                                Samsung : Motorola
                        } className="w-1/2 mx-auto relative my-4" />
                }
                
                <h2 className="text-center mb-3 text-xs uppercase text-gray-600 font-bold">{ phone.modelo }</h2>

                <div className="border-t px-4 pt-6 pb-4 relative">
                    <button
                        onClick={ () => addProduct( phone, mark ) }
                        className="absolute -top-6 right-4 rounded-full bg-white border flex justify-center intems-center px-2 py-2 focus:outline-none outline-none hover:shadow-lg z-10">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg text-gray-600">$ { phone.precio }</h4> <span className="text-gray-600">Color: { phone.color }</span>
                    </div>
                    <div className="flex"></div>
                </div>
            </div>
        );
    }
}


export default Product