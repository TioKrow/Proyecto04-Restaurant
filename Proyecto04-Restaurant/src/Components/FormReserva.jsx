import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './css/FormReserva.css'

function Formulario() {
    return (
        <Card className='cardForm'>
            <h4>Rellena el formulario y nosotros nos contactaremos contigo</h4>
            <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
            <Form className='formulario'>
                <Form.Group className="form-name" controlId="formBasicNombre">
                    <Form.Control
                        type="text"
                        id="inputNombre"
                        placeholder="Tu nombre"
                    />
                </Form.Group>
                <Form.Group className="form-number" controlId="formBasicTelefono">
                    <Form.Control
                        type="number"
                        id="inputTelefono"
                        placeholder="Telefono"
                    />
                </Form.Group>
                <Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Dejanos un comentario"
                        className="form-Text"
                    >
                        <Form.Control as="textarea" placeholder="Dejanos un comentario" />
                    </FloatingLabel>
                </Form.Group>
                <Button className='buttonForm' type="submit">
                    Submit
                </Button>
            </Form>
        </Card>

    );
}

export default Formulario;