import Image from 'react-bootstrap/Image'
import './css/SobreNosotros.css'

function SobreNosotros() {
    return (
        <>
            <div className="body-SN">
                <Image className='imagen-SN' src="https://i.gifer.com/44vV.gif" />
                <section className='Lado-SN'>
                    <h2 className='titulo-SN'>Las mejores American Style Burger de Concepcion</h2><hr />
                    <div className='parrafo-SN'>
                        <p>Tan solo a metros de la plaza peru ven a compartir con tus amigos y seres queridos.</p>
                        <p>Nos hemos destacado por crear una exquisita variedad de hamburgesas Americanas
                            con los mejores ingredientes.<br className='br-SN' />
                            Nuestros chefs de calidad internacional crean una experiencia gastronómica
                            que permite que jamás olvides tu visita.</p>
                    </div>
                </section>
            </div>
            <section >
            <Image className='imagen-SN-S' src="https://img.freepik.com/fotos-premium/hamburguesa-ketchup-queso-lechuga-tomate-ternera-cebolla-fondo-negro-lugar-enfoque-selectivo-texto_210632-3900.jpg?w=1380"/>
            
            </section>
        </>
    )
}

export default SobreNosotros;
