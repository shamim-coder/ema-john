import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cartLength = props.cart.length
    const cart = props.cart
    const totalPrice = cart.reduce((total, current) => total + current.price, 0);
    let totalShipping = 0;
    if (totalPrice > 900) {
        totalShipping = 0
    } else {
        totalShipping = cart.reduce((total, current) => total + current.shipping, 0);
    }
    const totalWithoutTax = totalPrice + totalShipping
    const tax = (0.10 * totalWithoutTax)
    const grandTotal = tax + totalWithoutTax

    const formatNumber = (number) => {
        const decimalNumber = number.toFixed(2)
        return Number(decimalNumber)
    }

    return (
        <>
            <h1>Order Summary</h1>
            <p>item ordered : {cartLength}</p>

            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${formatNumber(totalPrice)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>{formatNumber(totalShipping)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>{formatNumber(totalWithoutTax)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>{formatNumber(tax)}</td>
                    </tr>
                    <tr className="grand-total">
                        <td>Order Total:</td>
                        <td>{formatNumber(grandTotal)}</td>
                    </tr>
                </tbody>
            </table>

        </>
    );
};

export default Cart;

