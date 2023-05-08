import React from 'react';
import ItemCarta from './ItemCarta';
import { Hamburguesa } from './ItemsMenu';
import './css/Carta.css'
import { Table } from "react-bootstrap"


function Carta() {
    return (
        <section className='item-menu container '>
            <h2>Menu Burgers </h2> <hr />
            <Table className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
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
        </section>
    )

}

export default Carta;