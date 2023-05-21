import React from 'react';
import "../common/common.css";
import a1 from "./1.1.png"
import a2 from "./7.2.png"

function SeventhPage() {
  return (
    <div className='seventh-page-container'>
        <img className="seventh-page-1" src={a1} alt="1st"></img>
        <div className='seventh-page-div-1'>
          <p className='e7th'>Read our acquisition announcement</p>
          <div className="slider-div-10" type="button"></div>
        </div>
        <img className="seventh-page-1" src={a2} alt="1st"></img>
        <div className="e7th-last-div">
            <div className='firs-page-btn firs-page-btn100'>
                <div className='first-page-btn-left1 first-page-btn-left2' type="button">{'>'}</div>
                <div className='first-page-btn-right first-page-btn-right21' type="button">Learn more about LUMA System</div>
            </div>
            <p className='e7th-last-para'>This powerful combination helps teams like yours improve how they work together.</p>
        </div>
    </div>
  )
}

export default SeventhPage