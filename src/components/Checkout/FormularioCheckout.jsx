import "./FormularioCheckout.css";

const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {

return (
    <form onSubmit={enviarOrden} className="formulario-checkout">
    <label htmlFor="nombre">Nombre</label>
    <input
        type="text"
        id="nombre"
        name="nombre"
        value={datosForm.nombre}
        onChange={guardarDatosInput}
    />

    <label htmlFor="telefono">Telefono</label>
    <input
        type="number"
        id="telefono"
        name="telefono"
        value={datosForm.telefono}
        onChange={guardarDatosInput}
    />

    <label htmlFor="email">Email</label>
    <input
        type="email"
        id="email"
        name="email"
        value={datosForm.email}
        onChange={guardarDatosInput}
    />
    <label htmlFor="repetirEmail">Repite tu email</label>
    <input
        type="email"
        id="repetirEmail"
        name="repetirEmail"
        value={datosForm.repetirEmail}
        onChange={guardarDatosInput}
    />

    <label htmlFor="direccion">Dirección</label>
    <input
        type="text"
        id="direccion"
        name="direccion"
        value={datosForm.direccion}
        onChange={guardarDatosInput}
    />

    <label htmlFor="codigo_postal">Código postal</label>
    <input
        type="number"
        id="codigo_postal"
        name="coodigo_postal"
        value={datosForm.coodigo_postal}
        onChange={guardarDatosInput}
    />
    <button type="submit">Enviar orden</button>
    </form>
);
};

export default FormularioCheckout;
