import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Formulario() {
    return (
        <Card className='cardForm'>
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
                <Form.Group className="form-email" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="nombre@example.com" />
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
                <FloatingLabel controlId="floatingSelect" label="Dia de la reserva">
                    <Form.Select className="form-Text" aria-label="Floating label select example">
                        <option>Seleccione Dia</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Hora de la reserva">
                    <Form.Select className="form-Text" aria-label="Floating label select example">
                        <option>Seleccione Hora</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>

    );
}

export default Formulario; 11