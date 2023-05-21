import React from 'react'
import "../common/common.css"
import img1 from "./8.1.png"
import img2 from "./8.2.png"
import img3 from "./hand.webp"

function EightPage() {
  return (
    <div className='eight-page-container'>
       <div className='eight-page-div'><img className='eight-page-container-img' src={img1} alt="top"></img></div>
        <div className='eight-page-div-bottom'>
            <div className='eight-page-div-bottom1'>
                <img className='eight-page-div-bottom-left-img' src={img3}></img>
            </div>
            <div className='eight-page-div-bottom-right'>
                <img className='eight-page-div-bottom-right-para' src={img2}></img>
                <div className='firs-page-btn firs-page-btn1000'>
                <div className='first-page-btn-left1 first-page-btn-left22' type="button">{'>'}</div>
                <div className='first-page-btn-right first-page-btn-right221' type="button">Explore all templets</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EightPage