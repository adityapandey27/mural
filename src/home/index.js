import React from 'react'
import "./home.css";
import NavBar from '../common/NavBar';
import FirstPage from '../../src/Footer/FirstPage';
import SecondPage from '../SecondPage';
import ThirdPage from '../ThirdPage';
import FourthPage from '../FourthPage';
import FifthPage from '../FifthPage';
import SixthPage from '../sixthPage';
import SeventhPage from '../SeventhPage';
import EightPage from '../Eight Page';
import Footer from '../Footer';
import WhiteBoard from '../White Board';
import Final from '../aa/final';
function Home() {
  return (
    <div className="component-container">
        <NavBar/>
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>
        <SixthPage/>
        <SeventhPage/>
        <Final/>
        <EightPage/>
        <WhiteBoard/>
        <Footer/>
        
    </div>

  )
}

export default Home