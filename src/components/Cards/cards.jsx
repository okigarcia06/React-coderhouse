import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ producto }) => {
const [agrandar, setAgrandar] = useState(false);

const handleMouseOver = () => {
    setAgrandar(true);
};

const handleMouseLeave = () => {
    setAgrandar(false);
};

const estiloCard = {
    display: "inline-flex",
    transform: agrandar ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
};
return (
    <div
    className="contenedor-card"
    style={estiloCard}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    >
    <Card style={{ width: "18rem", margin: "5em" }}>
        <Link className="verMas" to={`/detalle/${producto.id}`}>
        <Card.Img variant="top" src={producto.imagen} />
        </Link>
        <Card.Body>
        <Card.Title className="titulo-card">{producto.nombre}</Card.Title>
        <Card.Text className="texto-card">{producto.descripcion}</Card.Text>
        <ListGroup.Item className="precio-producto-card">
            $ {producto.precio}
        </ListGroup.Item>
        </Card.Body>
    </Card>
    </div>
);
};
export default Cards;
