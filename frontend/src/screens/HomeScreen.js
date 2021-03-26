import React, { useEffect } from 'react'
import Product from '../components/Product'
import {useSelector,useDispatch} from 'react-redux'
import './HomeScreen.css'

// Actions 
import { getProducts as listProduct } from '../redux/actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch()

    const getProduct = useSelector(state => state.getProducts)
    const {products, loading, error} = getProduct

    useEffect(() => {
        dispatch(listProduct())
    } ,[dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title"> All Products</h2>
            <div className="homescreen__products" >
                {loading ? <h2>Loading.....</h2> : error ? <h2>{error}</h2> : products.map(product => (
                    <Product
                        key={product._id}
                        productId={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                )) }
            </div>
        </div>
    )
}

export default HomeScreen
