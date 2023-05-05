import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Formulario() {
    return (
        <Form className='container'>
            <Card>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputNombre"
                        placeholder="Ingresar Nombre"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputApellido"
                        aria-describedby="passwordHelpBlock"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="nombre@example.com" />
                </Form.Group>
                <Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Dejanos un comentario"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Dejanos un comentario" />
                    </FloatingLabel>
                </Form.Group>
                <FloatingLabel controlId="floatingSelect" label="Dia de la reserva">
                    <Form.Select aria-label="Floating label select example">
                        <option>Seleccione Dia</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Hora de la reserva">
                    <Form.Select aria-label="Floating label select example">
                        <option>Seleccione Hora</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Card>
        </Form>
    );
}

export default Formulario;11