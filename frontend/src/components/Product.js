import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} /> 
            <div className="product__info">
                <p className={name}></p>
                <p className="info__description"> {description.substring(0,100)} </p>
                <p className="price__info">{price}</p>
                <Link to={`/product/${productId}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
