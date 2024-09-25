import React from 'react';
import Header from '../Components/Navbar/Header';
import Caro from '../Components/Caro/Caro';
import Card1 from '../Components/Cards/Card';
import Sidebar from '../Components/Sidebar/Sidebar';


const Landingpage = () => {
  return (
    <div>
        <Header/>
        <Caro/>
        <Card1/>
        {/* <Sidebar/> */}
    </div>
  );
}

export default Landingpage;
