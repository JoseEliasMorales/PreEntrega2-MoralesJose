import { formatearPeso } from "../../asyncmock";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ precio, inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(1);

    //funcion para aumentar cantidad del producto
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    //funcion para disminuir cantidad de producto
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    const precioFinal = formatearPeso.format(precio * contador);

    return (
        <div className="contadorPrecio">
            <div className="contenedorContador">
                <div className="contador">
                    <button
                        className="menos"
                        onClick={decrementar}
                    >
                        -
                    </button>
                    <p className="cuenta">{contador}</p>
                    <button
                        className="mas"
                        onClick={incrementar}
                    >
                        +
                    </button>
                </div>
                <button
                    className="button agregar"
                    onClick={() => funcionAgregar(contador)}
                >
                    <span className="transition buttonAgregar"></span>
                    <span className="gradient"></span>
                    <span className="label textButton">Agregar al Carrito</span>
                </button>
            </div>
            <div className="precioUnico">{precioFinal}</div>
        </div>
    );
};

export default ItemCount;
