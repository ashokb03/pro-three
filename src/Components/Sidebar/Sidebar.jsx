import React from 'react';
import './Sidebar.css'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ({sidebar}) => {
  return (

    <div className='bar'>

        <div className='goto'>

            <div className='link1'>
                <HomeIcon style={{height:'25px', width:'40px'}}/>
                <h3>Home</h3>
            </div>

            <div className='link1'>
                <InfoIcon style={{height:'25px', width:'40px'}}/>
                <h3>About</h3>
            </div>

            <div className='link1'>
                <ContactsIcon style={{height:'25px', width:'40px'}}/>
                <h3>Contact</h3>
            </div>

            <div className='link2'>
                <LogoutIcon style={{height:'30px', width:'40px'}}/>
                <h3>Logout</h3>
            </div>

        </div>
    </div>
  );
}

export default Sidebar;
