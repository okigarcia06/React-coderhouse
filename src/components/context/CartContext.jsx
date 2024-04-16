import { createContext, useState } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);

const añadirProductoCarrito = (nuevoProducto) => {
    const condicion = estaEnCarrito(nuevoProducto.id);
    if (condicion) {
    const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === nuevoProducto.id) {
        return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + nuevoProducto.cantidad,
        };
        } else {
        return productoCarrito;
        }
    });
    setCarrito(productosModificados);
    } else {
    setCarrito([...carrito, nuevoProducto]);
    }
};

const estaEnCarrito = (idProducto) => {
    const respuesta = carrito.some((producto) => producto.id === idProducto);
    return respuesta;
};

const cantidadTotal = () => {
    const cantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
    );
    return cantidad;
};

const precioTotal = () => {
    const total = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
    0
    );
    return total;
};

const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter(
    (producto) => producto.id !== idProducto
    );
    setCarrito(productosFiltrados);
};

const borrarTodo = () => {
    setCarrito([]);
};

return (
    <CartContext.Provider
    value={{
        carrito,
        añadirProductoCarrito,
        cantidadTotal,
        borrarTodo,
        precioTotal,
        borrarProducto,
    }}
    >
    {children}
    </CartContext.Provider>
);
};

export { CartProvider, CartContext };
