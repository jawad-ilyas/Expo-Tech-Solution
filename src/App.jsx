import React, { useEffect } from 'react';


import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom'
import JoinOurTeamSection from './components/JoinOurTeamSection.jsx';

function App() {



  return (
    <div className='w-full h-screen '>
      <Header />
      <Outlet />
      <JoinOurTeamSection />
      <Footer />
    </div>
  );
}

export default App;
