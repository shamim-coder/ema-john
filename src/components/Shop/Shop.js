import React from 'react';
import fakeData from '../../resources/fakeData';
import { useState } from "react";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import "./Shop.css";

const Shop = () => {
    const firstTenData = fakeData.slice(0, 10)
    const [products, setProducts] = useState(firstTenData)
    const [cart, setCart] = useState([])
    const cartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product} cartHandler={cartHandler} key={product.key} />)
                }
            </div>
            <aside className="cart-container">
                <Cart cart={cart} />
            </aside>
        </div>
    );
};

export default Shop;