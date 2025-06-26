
function ItemCarta({ nombre, detalle, precio, imgUrl }) {
    return (
        <tr>
            <td className="td-imagen ">
                <img
                    className='img-item'
                    alt='algo debe ir aqui'
                    src={imgUrl}
                />
            </td>
            <td className="td-nombre">
                {nombre}
            </td>
            <td className="td-detalle">
                {detalle}
            </td>
            <td className="td-precio">
                <h5>${precio}.-</h5>
            </td>
        </tr>
    );
};
export default ItemCarta