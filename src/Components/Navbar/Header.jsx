import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Header = () => {

  return (

    <div className='navbar fixed-top'>     

      <div className='nav1'>

        <Link to='/Landingpage'>
        <h1 class="heading"><b>Apple</b></h1>
        </Link>

      </div>

      <div className='nav2'>

        <AccountCircleIcon className='i2' style={{height:'30px', width:'40px'}} />

        <ShoppingCartIcon className='i2' style={{height:'30px', width:'40px'}} />

      </div>

    
    </div>

  );
}

export default Header;

