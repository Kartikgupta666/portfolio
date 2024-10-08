

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'
import SubMain from './components/SubMain.js'
import TechStack from './components/TechStack.js'
import Footer from './components/Footer.js'
import backgroundimage from './assets/canvash_bacckground.jpg'
import Photo from './components/Photo'
import photo from './assets/photo.png'
import { useEffect, useState } from 'react'
import './App.css'
import Hireme from './components/Hireme.js'

function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check window width and set isMobileView state
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 450);
    };

    // Run once on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let pages = 9;

  return (
    <>
      {isMobileView ? (
        <h1 className='text-center'>Open ON laptop , mobile view is in progress available soon</h1>
      ) : (
        <Parallax pages={pages} style={{ left: "0", top: "0", backgroundImage: `url(${backgroundimage})` }} className='Animation' >
          <ParallaxLayer sticky={{ start: 0, end: 5 }} offset={0} speed={0.5} style={{zIndex:10}} >
            <Navbar />
            <Main />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0.6, end: 5 }} style={{zIndex : 0}} offset={0.4} speed={0.25}>
            <Photo photo = {photo} />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.25} style={{zIndex : 40}}>
            {/* flags content creator right */}
            <div className=" flagsR" >
                <h1 className='fs-1 fw-bold ' style={{ color:"rgb(255, 119, 0)"}}>Content Creator</h1>
              <p className=' text-white text-center fs-3'><i className='fa-brands fa-youtube text-red-600'></i>&nbsp; Kartik Gangil</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.25} style={{zIndex : 40}}>
            {/* flags video editor left */}
            <div className="flagsL">
                <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Video Editor</h1>
              <p className='text-center fs-3 text-white'><i className='fa-brands fa-youtube text-red-600'></i>&nbsp; Kartik Gangil</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.25} style={{zIndex : 40}}>
            {/* flags web developer right */}
            <div className="flagsR">
                <h1 className='fs-1 fw-bold' style={{ color: "rgb(255, 119, 0)" }}>Web Developer</h1>
              <p className='text-white text-center fs-3'><i className='fa-brands fa-github '></i>&nbsp; Kartik Gangil</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.25} style={{zIndex : 40}}>
            {/* flags thumnail designer left */}
            <div className="flagsL">
                <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Thumnail Designer</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6.3} speed={0.25} >
            <SubMain />
          </ParallaxLayer>
          <ParallaxLayer  offset={7} speed={0.35} >
            <TechStack />
          </ParallaxLayer>
          <ParallaxLayer offset={8} speed={0.35} >
          <Hireme/>
          </ParallaxLayer>
          <ParallaxLayer offset={8.85} speed={0.35} >
          <Footer/>
          </ParallaxLayer>
       


        </Parallax>
      )}
    </>
  )
}

export default App

