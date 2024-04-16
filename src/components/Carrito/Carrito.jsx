import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Carrito.css"

const Carrito = () => {
const { carrito, precioTotal, borrarProducto, borrarTodo } =
    useContext(CartContext);

if (carrito.length === 0) {
    return (
    <div>
        <h2>Oh...Parece que aun no tienes productos en la cesta</h2>
        <Link to="/">Volver al inicio</Link>
    </div>
    );
}

    return (
    <div className="carrito">
        <ul>
        {carrito.map((producto) => (
            <li key={producto.id}>
            <img src={producto.imagen} alt="" />
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio Unitario: {producto.precio}</p>
            <button onClick={() => borrarProducto(producto.id)}>
                Eliminar
            </button>
            </li>
        ))}
        </ul>
        <div>
        <p> precio total: {precioTotal()}</p>
        <button onClick={() => borrarTodo()}>Vaciar carrito</button>
        <Link to="/checkout">Continuar Compra</Link>
        </div>
    </div>
    );
};

export default Carrito;
