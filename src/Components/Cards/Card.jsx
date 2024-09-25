import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';
import { Link } from 'react-router-dom';
import img5 from '../../images/5.jpg';
import img6 from '../../images/6.jpg';
import img7 from '../../images/7.jpg';
import img8 from '../../images/8.jpg';
import img9 from '../../images/9.jpg';
import img10 from '../../images/10.jpg';


function Card1() {

  return (

    <div className='container cd'>


        <div className='hg'> 
            <h1>: EXPLORE  :</h1>
        </div>

        <div className='row ro'>

            
            <Card style={{ width: '18rem' }} className='ca'>

                <img src={img5}/>

                <h5>MacBook</h5>

                <Link to='/Macbook'>
                <Button variant="light"><a href="#">Click</a></Button>{' '}
                </Link>

                

            </Card>


            <Card style={{ width: '18rem' }} className='ca'>

                <img src={img6}/>

                <h5>Hp</h5>

                <Link to='/Hp'>
                <Button variant="light"><a href="#">Click</a></Button>{' '}
                </Link>


            </Card>


            <Card style={{ width: '18rem' }} className='ca'>

                <img src={img7}/>

                <h5>Samsung</h5>

                <Link to='/Samsung'>
                <Button variant="light"><a href="#">Click</a></Button>{' '}
                </Link>

                

            </Card>


            <Card style={{ width: '18rem' }} className='ca'>

                <img src={img8}/>

                <h5>Acer</h5>

                <Link to='/Acer'>
                <Button variant="light"><a href="#">Click</a></Button>{' '}
                </Link>

            </Card>


            <Card style={{ width: '18rem' }} className='ca'>

                <img src={img9}/>

                <h5>Dell</h5>

                <Link to='/Dell'>
                <Button variant="light"><a href="#">Click</a></Button>{' '}
                </Link>

            </Card>


            <Card style={{ width: '18rem' }} className='ca'>

                <img src={img10}/>

                <h5>Asus</h5>

                <Link to='/Asus'>
                <Button variant="light"><a href="#">Click</a></Button>{' '}
                </Link>

            </Card>

        </div>

    </div>


  );
}

export default Card1;