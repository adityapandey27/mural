import React from 'react'
import "../../src/common/common.css"
import AutoDesk from "./autodesk.svg";
import ThreeIn from "./3inone.svg";
import Capco from "./capco.svg";
import Github from "./github.svg";
import IBM from "./ibm.svg";
import Jacobs from "./jacobs.svg";
import Steelcase from "./steelcase.svg";
import Throughts from "./thoughts.svg";
import a1 from "./about.png";



function FifthPage() {

    
   

    function DoIt(){
        // const attributeVale=document.querySelectorAll(".company-name");
        // var value=document.querySelector(".company-name").getAttribute('newattri')
        // document.querySelector(".slider-div").style.backgroundColor="red";
    }




  return (
    <div className='fifth-page-div-container'>
        <div className='fifth-page-left'>
            <div className='company-left'>
                <div className='company-name' newattri="black"   type="button" onMouseEnter={DoIt}>
                    <img src={Jacobs} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
                <div className='company-name' newattri="yellow"    type="button" onMouseEnter={DoIt}>
                    <img src={ThreeIn} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
                <div className='company-name' newattri="purple"   type="button" onMouseEnter={DoIt}>
                    <img src={Capco} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
                <div className='company-name' newattri="orange"   type="button" onMouseEnter={DoIt}>
                    <img src={Github} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
            </div>
            <div className='company-right '>    
                <div className='company-name' newattri="green"  type="button" onMouseEnter={DoIt}>
                    <img src={IBM} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
                <div className='company-name' newattri="black"  type="button" onMouseEnter={DoIt}>
                    <img src={AutoDesk} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
                <div className='company-name' newattri="red"   type="button" onMouseEnter={DoIt}>
                    <img src={Steelcase} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
                <div className='company-name' newattri="orange"  type="button" onMouseEnter={DoIt}>
                    <img src={Throughts} className='fifth-page-left' alt="ok"></img>
                    <div className="slider-div" type="button"></div>
                </div>
            </div>
        
        </div> 
        <div className='fifth-page-right'>
            <div className='fifth-page-right-para'>"Mural enhances our ability to create a safe space for people to collaborate and contribute, whether they’re introverted or extroverted, in person or remote. Meetings are more engaging and inclusive, and ultimately, diverse perspectives lead to more innovative, impactful solutions.”
            <p className='fifthe-page-right-subHeading'>View Jacobs case study</p>
            <div className="fifth-page-right-slider-div" type="button"></div>
            </div>
            <div className='fifth-page-right-about'>
                <img className='fifth-page-lastimage' alt="about founder" src={a1}></img>
            </div>
           
        </div>
    </div>
    
  )
}

export default FifthPage