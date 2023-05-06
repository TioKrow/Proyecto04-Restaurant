import React from 'react';
import ItemCarta from './ItemCarta';
import { Hamburguesa } from './ItemsMenu';
import './css/Carta.css'
import { Table } from "react-bootstrap"


function Carta() {
    return (
        <div className='item-menu'>
            <h2>Menu Burgers </h2> <hr />
            <Table>
                {
                    Hamburguesa.map(({ nombre, detalle, precio, imgUrl }) => (
                        <ItemCarta
                            key={nombre}
                            imgUrl={imgUrl}
                            nombre={nombre}
                            detalle={detalle}
                            precio={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </Table>

        </div>
    )

}

export default Carta;