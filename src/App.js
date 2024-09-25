import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Landingpage from './Pages/Landingpage';
import Applepage from './Pages/Applepage';
import Hppage from './Pages/Hppage';
import Samsungpage from './Pages/Samsungpage';
import Acerpage from './Pages/Acerpage';
import Dellpage from './Pages/Dellpage';
import Asuspage from './Pages/Asuspage';



const App = () => {


  return (

    <div>

      <BrowserRouter>

      <Routes>

      <Route path='/pro-three' element= {<Login/>} />

      <Route path='/Landingpage' element= {<Landingpage/>} />

      <Route path='/Macbook' element= {<Applepage/>} />
      <Route path='/Hp' element= {<Hppage/>} />
      <Route path='/Samsung' element= {<Samsungpage/>} />
      <Route path='/Acer' element= {<Acerpage/>} />
      <Route path='/Dell' element= {<Dellpage/>} />
      <Route path='/Asus' element= {<Asuspage/>} />
      
      </Routes>
      
      </BrowserRouter>
     
    
     
    </div>
  );
}

export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
