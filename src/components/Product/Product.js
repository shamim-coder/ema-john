import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { } from "./Product.css";

const Product = (props) => {
    const products = props.items
    console.log(products);

    return (
        <>
            {
                products.map(product => {
                    const { name, price, seller, stock, shipping, star, img } = product
                    return (
                        <div className="product-item">
                            <div className="product-img">
                                <img src={img} alt="" />
                            </div>
                            <div className="product-details">
                                <h4>{name}</h4>
                                <p className="seller">by: {seller}</p>
                                <div className="pricing-ratting">
                                    <div>
                                        <p className="price">${price}</p>
                                        <p className="stock">only {stock} left in stock - order soon</p>
                                        <button className="add-cart-btn">Add to cart</button>

                                        <FontAwesomeIcon icon={['fas', 'shopping-cart']} />

                                    </div>
                                    <div>
                                        <p className="star"> Star: {star}</p>
                                        <p className="feature">Features</p>
                                        <ul>
                                            {
                                                product.features.map(feature => {
                                                    return (
                                                        <li>{feature.description} : {feature.value}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Product;