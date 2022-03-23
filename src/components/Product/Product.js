import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addCartHandel }) => {
    const { img, name, price, ratings, seller } = product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <div className="rating">
                    <h5>Manufacturer : {seller}</h5>
                    <h5>Rating : {ratings} start</h5>
                </div>
            </div>
            <button onClick={() => addCartHandel(product)} className="cart-btn">
                <p>
                    Add to Cart
                    <FontAwesomeIcon className="cart-text" icon={faCartPlus} />
                </p>
            </button>
        </div>
    )
}

export default Product
