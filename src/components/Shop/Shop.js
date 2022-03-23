import React, { useEffect, useState } from 'react'
import { addToDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])
    const addCartHandel = (product) => {
        setCart([...cart, product])
        addToDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product
                        addCartHandel={addCartHandel}
                        key={product.id}
                        product={product}
                    ></Product>
                ))}
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop
