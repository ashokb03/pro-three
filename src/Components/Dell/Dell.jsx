import React from 'react';
import './Dell.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../Navbar/Header';

const Dell = () => {

  return (

    <div>

        <Header/>

        <div className='container-fulid h5'>

            <h1>Dell</h1>

            <p>Explore Now -- :) </p>

        </div>
      
        <div class="container i5">

            <img src="Assets/1.jpg"/>

        </div>

        <div class="p5">

            <h1> PRODUCTS </h1>

        </div>


        <div class="container b5">

            <div className='row r5'>

                <Card style={{ width: '18rem' }} className='c5'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

                <Card style={{ width: '18rem' }} className='c5'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c5'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c5'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c5'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>


                <Card style={{ width: '18rem' }} className='c5'>

                    <img src="Assets/2.jpg"/>

                    <h5>A - ₹100</h5>

                    <Button variant="light"><a href="#">Buy</a></Button>{' '}

                </Card>

            </div>

    
        </div>


        <div className="container s5">

            <img src="Assets/1.jpg"/>


            <h1>Service - <span style={{color:"Black"}}> ( Details ) </span></h1>

        </div>


        <div className='d5'>

            <p>Copyright ©2024; Designed by RAM</p>

        </div>

       


    </div>

  );
}

export default Dell;
