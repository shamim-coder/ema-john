import React from 'react';
import fakeData from '../../resources/fakeData';
import { useState } from "react";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { } from "./Shop.css";

const Shop = () => {
    const firstTenData = fakeData.slice(0, 10)
    const [products, setProducts] = useState(firstTenData)
    return (
        <div className="shop-container">
            <div className="products-container">
                <Product items={products} key={products.key} />
            </div>
            <aside className="cart-container">
                <Cart />
            </aside>
        </div>
    );
};

export default Shop;