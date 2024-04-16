import { useState } from "react";
import './ContadorProducto.css';

const ContadorProducto = ({ stock, añadirProducto }) => {
const [contador, setContador] = useState(1);

const sumar = () => {
    if (contador < stock) {
    setContador(contador + 1);
    }
};

const restar = () => {
    if (contador > 1) {
    setContador(contador - 1);
    }
};
return (
    <div>
    <button onClick={sumar} className="boton-sumar">+</button>
    <p>{contador}</p>
    <button onClick={restar} className="boton-restar">-</button>
    <button  className="boton-añadir"
        onClick={() => {
        añadirProducto(contador);
        }}
    >
        Añadir al carrito
    </button>
    </div>
);
};

export default ContadorProducto;
