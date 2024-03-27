// Cart.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Cart = ({ itemCount }) => {
    return (
        <div className="flex items-center">
            <span className="text-white mr-2 cursor-pointer">
                <FaShoppingCart size={24} />
            </span>
            <span className="text-white">{itemCount}</span>
        </div>
    );
};
export default Cart;
