import Item from "../Cards/Cards";

const ItemList = ({ productos }) => {
return (
    <div>
    {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
    ))}
    </div>
);
};

export default ItemList;
