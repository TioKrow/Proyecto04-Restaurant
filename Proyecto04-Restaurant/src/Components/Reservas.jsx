import Formulario from './FormReserva'
import {db} from '../Firebase'
import { collection, addDoc } from 'firebase/firestore';

const Reservas = () => {

    const agregaRegistro = async (linkObject) => {
        await addDoc(collection(db, 'Reservas'),linkObject);
        console.log('nuevo registro')
    }


    return (
        <>
        <div className="container">
            <Formulario agregaRegistro={agregaRegistro}/>
        </div>
        </>
    );
}
export default Reservas;