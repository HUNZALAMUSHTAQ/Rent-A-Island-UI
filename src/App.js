import React, { useState } from 'react'
import AssistanceSection from './components/AssistanceSection';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Home from './components/Home';
import InfoSection from './components/InfoSection';
import NavBar from './components/NavBar';
import { AssistanceData, InfoData } from './data/InfoData';
import { SliderData1 } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const togglemenu =() =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <NavBar  togglemenu={togglemenu} />
      <DropDown isOpen={isOpen} togglemenu={togglemenu} />
      <Home slides={SliderData1} />
      <InfoSection {...InfoData} />
      <AssistanceSection {...AssistanceData} />
      <Footer />

    </>
  );
}

export default App;
