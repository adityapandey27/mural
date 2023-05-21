import React from 'react';
import "../common/common.css";
import a1 from "./top-left.png";
import a2 from "./top-right-1.png";
import a3 from "./top-right-2.png";
import a4 from "./left.png";
import a5 from "./bottom-left.png";
import a6 from "./bottom-right.png";

// var a=document.querySelector(".white-board-middle-part");
// a.addEventListener("click",function(){
//   alert("hello")
// })

function callIt(){
  
  
  
 
  
  // document.querySelector('.whiteboard-continer').setAttribute("style","background-color:''");
  // document.querySelector('.whiteboard-continer').setAttribute("style","opacity:''");
  
  // document.querySelector('.whiteboard-continer').style.backgroundColor="transparent";
  // document.querySelector('.whiteboard-continer').style.opacity="1";



  // document.querySelector('.whiteboard-continer').removeProperty("background-color");
  // document.querySelector('.whiteboard-continer').removeProperty("opacity");

  // background-color: #FAFAFA;
  document.querySelector('.whiteboard-continer').setAttribute("style","background:#bcbcbcb9");
  // document.querySelector('.whiteboard-continer').style.opacity="2";
  
  // document.querySelector('.whiteboard-continer').removeProperty("background-image");
  // document.querySelector('.whiteboard-continer').setAttribute("style","background-image:url('../../src/White Board/download.png')")
    
 
  document.querySelector('.white-div-a1').setAttribute("style","visibility: visible")
  // document.querySelector('.white-div-a1').style.transform="translateY(-20)";
  
 
  document.querySelector('.white-div-a2').setAttribute("style","visibility: visible")
  document.querySelector('.white-div-a3').setAttribute("style","visibility: visible")
  document.querySelector('.white-div-a4').setAttribute("style","visibility: visible")
  document.querySelector('.white-div-a5').setAttribute("style","visibility: visible")
  document.querySelector('.white-div-a6').setAttribute("style","visibility: visible")

}

function callIt2(){

  
 
  document.querySelector('.white-div-a1').setAttribute("style","visibility: hidden")
  document.querySelector('.white-div-a2').setAttribute("style","visibility: hidden")
  document.querySelector('.white-div-a3').setAttribute("style","visibility: hidden")
  document.querySelector('.white-div-a4').setAttribute("style","visibility: hidden")
  document.querySelector('.white-div-a5').setAttribute("style","visibility: hidden")
  document.querySelector('.white-div-a6').setAttribute("style","visibility: hidden")
  document.querySelector('.whiteboard-continer').setAttribute("style","background:#FC83FF");

}

function WhiteBoard() {



  // function callFunction(){
  // // document.querySelector('.white-board-middle-part').style.BackGround="#000";
  // // document.querySelector('.white-board-middle-part1-text').style.color="#FFE146 ";
  // }



  return (
    <div className='whiteboard-continer'>
      <div className='whiteboard-continer-img'>
     <div className='white-div-a1'><img className="a1" src={a1} alt="top"></img></div>
     <div className='white-div-a2'><img className="a2" src={a2} alt="top"></img></div>
     <div className='white-div-a3'><img className="a3" src={a3} alt="top"></img></div>
      
      </div>
      <div className='whiteboard-continer-img'>
      <div className='white-div-a4'><img className="a4" src={a4} alt="top"></img></div>
       <div className='white-board-middle-part' onMouseEnter={callIt} onMouseLeave={callIt2} type="button">
          <div className='white-board-middle-part1' type="button"></div>
          <div className='white-board-middle-part1-text'>Get Started</div>
      </div>
      </div>
      <div className='whiteboard-continer-img'>
      <div className='white-div-a5'><img className="a5" src={a5} alt="top"></img></div>
      <div className='white-div-a6'><img className="a6" src={a6} alt="top"></img></div>
      </div>

    </div>
  )
}

export default WhiteBoard