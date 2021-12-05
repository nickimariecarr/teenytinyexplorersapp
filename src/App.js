import React from 'react';


//router for navigation
import { Route, Routes } from 'react-router-dom';


//design elements
import './App.css';
import {Container} from 'react-bootstrap';
import MainHeader from './MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css';



//images
import outside from './outside.mp4';

// PAGES: application main pages
import Home from './home';
import About from './about';

  //contact pages with form submission
import BecomeaHost from './BecomeaHost';
import Thankyoutwo from './Thankyoutwo';
import Contact from './contact';
  //non admin pages with tables with display data
import FindaGroup from './FindaGroup';

  // admin pages
import Admindashboard from './adminDashboard';
import AdminGroups from './adminGroups';
import AdminMember from './adminMembers';

  //login and signup pages 
import SignUp from './SignUp';
import Loginform from './login';



function App() {
  return (
    <div>
        <div className="A">
          <header className="App-header">
            <video width="100%" height="100%" autoPlay loop defaultMuted playsInline muted>
              <source src={outside} type="video/mp4"/>
            </video>
              <MainHeader />
          </header>
            <main style={{width:"100%"}}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/BecomeaHost' element={<BecomeaHost />} />
                <Route path='/FindaGroup' element={<FindaGroup />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Loginform />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/adminDashboard' element={<Admindashboard />} />
                <Route path='/adminGroups' element={<AdminGroups />} />
                <Route path='/adminMembers' element={<AdminMember />} />
                <Route path='/Thankyoutwo' element={<Thankyoutwo />} />



              </Routes>
            </main>
        </div>

        <div className="color-nav" style={{display: "flex", alignItems:'center',height: "30px"}}>
              <Container >
                <footer className="color-nav" >
                  <center>  © Teeny Tiny Explorers 2021</center>

                </footer>
              </Container>
          </div>
    </div>
  );
}

export default App;
      