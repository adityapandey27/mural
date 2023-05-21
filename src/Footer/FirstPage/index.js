import React from 'react'
import FrontPage from "./front.webp";
// import Aew from "./front.webp";
// import newB from "../../../src/Eight Page/8.1.png";

function FirstPage() {
  return (
    <div className='first-page-container'>
        <div className='first-page-left'>
            <p className='first-page-heading'>Make it a mural,<br></br>
            not just a meeting</p>
            <p className='first-page-para'>Level up your teamwork with an intuitive digital whiteboard<br></br>
             built for teams to do their best work together.</p>
            <div className='firs-page-btn'>
                <div className='first-page-btn-left1' type="button">{'>'}</div>
                <div className='first-page-btn-right' type="button">Start a whiteboard</div>

            </div>
        </div>
        <div className='front-page-right'>
            <img src={FrontPage} className='front-page-right-image' alt="White board"></img>
        </div>
    </div>
  )
}

export default FirstPage