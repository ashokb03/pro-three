import React from 'react';
import './Asus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../Navbar/Header';

const Asus = () => {

  return (

    <div>

        <Header/>

        <div className='container-fulid h6'>

            <h1>Asus</h1>

            <p>Explore Now -- :) </p>

        </div>
      
        <div class="container i6">

            <img src="Assets/1.jpg"/>

        </div>

        <div class="p6">

            <h1> PRODUCTS </h1>

        </div>


        <div class="container b6">

            <div className='row r6'>

                <Card style={{ width: '18rem' }} className='c6'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

                <Card style={{ width: '18rem' }} className='c6'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c6'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c6'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c6'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c6'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

            </div>

    
        </div>


        <div className="container s6">

            <img src="Assets/1.jpg"/>


            <h1>Service - <span style={{color:"Black"}}> ( Details ) </span></h1>

        </div>


        <div className='d6'>

            <p>Copyright ©2024; Designed by RAM</p>

        </div>

       


    </div>

  );
}

export default Asus;
