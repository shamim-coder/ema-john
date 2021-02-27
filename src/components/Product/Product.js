import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const cartHandler = () => props.cartHandler(props.product)
    const { name, price, seller, stock, shipping, star, img, features } = props.product
    return (
        <>
            {
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
                                <button onClick={cartHandler} className="add-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>

                            </div>
                            <div>
                                <p className="star"> Star: {star}</p>
                                <p className="feature">Features</p>
                                <ul>
                                    {
                                        features.map(feature => <li>{feature.description} : {feature.value}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Product;