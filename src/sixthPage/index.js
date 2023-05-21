import React from 'react';
import a1 from "./zzzz.png";
import "../common/common.css";
function SixthPage() {
  return (
    <div className="sixth-page-container">
      <div className='sixth'>
      <div className="sixth-left-head">
      For every kind of team
      </div>
      <div className="sixth-left-head1">
      Get specialized templates and resources <br></br>to meet your team’s specific needs.
      </div>
    </div>
        <img className='sixth-page-img' alt="about" src={a1}></img>
          {/* <div className='sixth-page-img-con'> */}
            {/* <div className="slider-div1" type="button"></div> */}
            {/* <div className="slider-div1" type="button"></div>
            <div className="slider-div1" type="button"></div>
            <div className="slider-div1" type="button"></div>
            <div className="slider-div1" type="button"></div> */}
          {/* </div> */}
        {/* </img> */}
    </div>
    
  )
}

export default SixthPage;