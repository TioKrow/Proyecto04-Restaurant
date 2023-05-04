import Carousel from 'react-bootstrap/Carousel';
import './css/Carousel.css'

function Carrusel() {
    return (
        <Carousel className='imagen-carrusel'>
            <Carousel.Item>
                <img
                    src="https://i.gifer.com/origin/50/507eb303b7c54d37f4c0581d162904b9_w200.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://i.gifer.com/origin/56/56e81b4bcb19dc0f67fbe9b3c3f70309_w200.webp"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://aromasfenpal.com/wp-content/uploads/2022/09/aroma-cafeteria-scaled.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;