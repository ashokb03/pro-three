import React from 'react';
import './Hp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../Navbar/Header';
import img1 from '../../images/Hp/1.jpg';
import img2 from '../../images/Hp/2.jpg';
import img3 from '../../images/Hp/3.jpg';
import img4 from '../../images/Hp/4.jpg';
import img5 from '../../images/Hp/5.jpg';
import img6 from '../../images/Hp/6.jpg';
import img7 from '../../images/Hp/7.jpg';
import img8 from '../../images/Hp/8.jpg';

const Hp = () => {

  return (

    <div>

        <Header/>

        <div className='container-fulid h2'>

            <h1>Hp</h1>

            <p>Explore Now -- :) </p>

        </div>
      
        <div class="container i2">

            <img src={img1}/>

        </div>

        <div class="p2">

            <h1> PRODUCTS </h1>

        </div>


        <div class="container b2">

            <div className='row r2'>

                <Card style={{ width: '18rem' }} className='c2'>

                    <img src={img2}/>

                    <h5>HP 240 G8</h5>
                    <p>₹50,000</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

                <Card style={{ width: '18rem' }} className='c2'>

                    <img src={img3}/>

                    <h5>HP Laptop 15</h5>
                    <p>₹55,749</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c2'>

                    <img src={img4}/>

                    <h5>HP Laptop 14s</h5>
                    <p>₹37,390</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c2'>

                    <img src={img5}/>

                    <h5>HP Pavilion</h5>
                    <p>₹61,900</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c2'>

                    <img src={img6}/>

                    <h5>HP Victus Gaming</h5>
                    <p>₹58,390</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c2'>

                    <img src={img7}/>

                    <h5>HP Pavilion 15</h5>
                    <p>₹59,990</p>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

            </div>

    
        </div>


        <div className="container s2">

            <img src={img8}/>


            <h1>Service - <span style={{color:"Black"}}> ( Details ) </span></h1>

        </div>


        <div className='d2'>

            <p>Copyright ©2024; Designed by RAM</p>

        </div>

       


    </div>


  );
}

export default Hp;
