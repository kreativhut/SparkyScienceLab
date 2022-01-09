import { useEffect, useState } from 'react';

import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Experiment from './Components/Experiment';
import './assets/css/reset.css';
import './assets/css/style.css';

function App() {
  const [expSide, setExpSide] = useState(false)
  const [expResult, setExpResult] = useState(true)

  useEffect(() => {
    let getHeaderHeight = document.querySelector('.ssl-wrapper .ssl-header').clientHeight;
    let getFooterHeight = document.querySelector('.ssl-wrapper .ssl-footer').clientHeight;
    let getBodyHeight = window.screen.height;
    // console.log('getHeaderHeight: ',getHeaderHeight);
    // console.log('getFooterHeight: ',getFooterHeight);
    // console.log('getBodyHeight: ',getBodyHeight);
  }, [])

  const experimentSideNav = (val) =>{
    // alert(val); console.log(val)
    setExpSide(val);
    setTimeout(()=>{
      document.querySelector('.ssl-cont-leftblk').classList.add('in');      
    },300)
    setTimeout(()=>{
      document.querySelector('.ssl-cont-rytblk').classList.add('in');
    },1300)
    setTimeout(()=>{
      document.querySelector('.ssl-exp-slider-blk').classList.add('in');      
    },1500)
    setTimeout(()=>{
      document.querySelector('.ssl-exp-result').classList.add('in');      
    },3000)
    setTimeout(()=>{
      document.querySelector('.ssl-exp-lab-block').classList.add('in');      
    },4000)
    
  }

  return (
    <section className='ssl-wrapper'>
      <Header expSide={expSide}/>
      <Experiment experimentSideNav={experimentSideNav} expSide={expSide} expResult={expResult}/>
      <Footer/>
    </section>
  );
}

export default App;
