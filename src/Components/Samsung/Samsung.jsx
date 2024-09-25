import React from 'react';
import './Samsung.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../Navbar/Header';

const Samsung = () => {

  return (

    <div>

        <Header/>

        <div className='container-fulid h3'>

            <h1>Samsung</h1>

            <p>Explore Now -- :) </p>

        </div>
      
        <div class="container i3">

            <img src="Assets/1.jpg"/>

        </div>

        <div class="p3">

            <h1> PRODUCTS </h1>

        </div>


        <div class="container b3">

            <div className='row r3'>

                <Card style={{ width: '18rem' }} className='c3'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

                <Card style={{ width: '18rem' }} className='c3'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c3'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c3'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c3'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c3'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

            </div>

    
        </div>


        <div className="container s3">

            <img src="Assets/1.jpg"/>


            <h1>Service - <span style={{color:"Black"}}> ( Details ) </span></h1>

        </div>


        <div className='d3'>

            <p>Copyright ©2024; Designed by RAM</p>

        </div>

       


    </div>

  );
}

export default Samsung;
