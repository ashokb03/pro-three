import Carousel from 'react-bootstrap/Carousel';
import './Caro.css';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';


function Caro() {
  return (

    <div className='caro'>

        <Carousel>

            <Carousel.Item>

            <img src={img1}/>

            </Carousel.Item>

            <Carousel.Item>

            <img src={img2}/>

            </Carousel.Item>

            <Carousel.Item>

            <img src={img3}/>


            </Carousel.Item>


            <Carousel.Item>

            <img src={img4}/>

            </Carousel.Item>

        </Carousel>

    </div>

  );
}

export default Caro;