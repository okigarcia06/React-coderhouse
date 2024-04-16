import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
const { cantidadTotal } = useContext(CartContext);

return (
    <Link to="/carrito" id="carrito">
    <img src="./public/img/Coffee.ico" alt="iconoCarrito" />
    <p> {cantidadTotal() != 0 ? cantidadTotal() : ""} </p>
    </Link>
);
};

export default CartWidget;
