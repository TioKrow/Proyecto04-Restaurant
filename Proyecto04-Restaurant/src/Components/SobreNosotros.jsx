import React from 'react';
import './css/SobreNosotros.css'

const SobreNosotros = () => {
    return (
        <>
                <section className='banner'>
                    <section className='Lado-SN container'>
                        <h1 className='titulo-SN'>Arriagada's Burger Place </h1>
                        <h2 className='t-SN'>Las mejores American Style Burger de Concepcion</h2>
                        <div className='parrafo-SN'>
                            <p>Tan solo a metros de la plaza peru ven a compartir con tus amigos y seres queridos.</p>
                            <p>Nos hemos destacado por crear una exquisita variedad de hamburgesas Americanas
                                con los mejores ingredientes.<br className='br-SN' />
                                Nuestros chefs de calidad internacional crean una experiencia gastronómica
                                que permite que jamás olvides tu visita.</p>
                            <p className='direccion'>
                                Estamos ubicados en Orompello 180, Concepción, Bío Bío
                            </p>
                        </div>
                    </section>
                </section>
        </>
    );
};

export default SobreNosotros;