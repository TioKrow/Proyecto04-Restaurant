import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './css/FormReserva.css'
import React, { useState } from 'react';

function Formulario(props) {

    const initalStateValues = {
        inputNombre: '',
        inputTelefono: '',
        inputComentario: ''
    }

    const [values, setValues] = useState(initalStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.agregaRegistro(values);
    }




    return (
        <Card className='cardForm'>
            <h4>Rellena el formulario y nosotros nos contactaremos contigo</h4>
            <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
            <Form className='formulario' onSubmit={handleSubmit}>
                <Form.Group className="form-name" >
                    <Form.Control
                        type="text"
                        name="inputNombre"
                        placeholder="Tu nombre"
                        onChange={handleInputChange}
                        value={values.inputNombre}
                    />
                </Form.Group>
                <Form.Group className="form-number" >
                    <Form.Control
                        type="number"
                        name="inputTelefono"
                        placeholder="Telefono"
                        onChange={handleInputChange}
                        value={values.inputTelefono}
                    />
                </Form.Group>
                <Form.Group>
                    <FloatingLabel
                        label="Dejanos un comentario"
                        className="form-Text"
                    >
                        <Form.Control as="textarea" name='inputComentario' onChange={handleInputChange}
                        value={values.inputComentario} placeholder="Dejanos un comentario" />
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