import React from 'react';
import './Macbook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PlaceIcon from '@mui/icons-material/Place';
import Header from '../Navbar/Header';
import img1 from '../../images/Mb/1.jpg';
import img2 from '../../images/Mb/2.jpg';
import img3 from '../../images/Mb/3.jpg';
import img4 from '../../images/Mb/4.jpg';
import img5 from '../../images/Mb/5.jpg';
import img6 from '../../images/Mb/6.jpg';
import img7 from '../../images/Mb/7.jpg';




const Macbook = () => {

  return (

    <div>

        <Header/>

        <div className='container-fulid h1'>

            <h1>MacBook</h1>

            <p>Explore Now -- :) </p>

        </div>
      
        <div class="container i1">

            <img src={img1}/>

        </div>

        <div class="p1">

            <h1> PRODUCTS </h1>

        </div>


        <div class="container b1">

            <div className='row r1'>

                <Card style={{ width: '18rem' }} className='c1'>

                    <img src={img2}/>

                    <h5>MacBook Air 13</h5>
                    <p>₹1,09,155</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

                <Card style={{ width: '18rem' }} className='c1'>

                    <img src={img3}/>

                    <h5>MacBook Pro (16-inch)</h5>
                    <p>₹3,79,990</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c1'>

                    <img src={img3}/>

                    <h5>MacBook Pro (14-inch)</h5>
                    <p>₹1,89,990</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c1'>

                    <img src={img4}/>

                    <h5>MacBook Air 15</h5>
                    <p>₹1,26,890</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c1'>

                    <img src={img5}/>

                    <h5>MacBook Air M1 chip</h5>
                    <p>₹71,990</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c1'>

                    <img src={img6}/>

                    <h5>MacBook Air M2 chip</h5>
                    <p>₹93,990</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

            </div>

    
        </div>


        <div className="container s1">

            <img src={img7}/>

            <h1>Service - <span style={{color:"darkgray"}}> ( Details ) </span></h1>

            {/* <PlaceIcon style={{height:'30px', width:'40px'}}/> */}


        </div>


        <div>

        </div>


        <div className='d1'>

            <p>Copyright ©2024; Designed by RAM</p>

        </div>



    </div>

  );
}

export default Macbook;
