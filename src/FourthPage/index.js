import React from 'react'
import "../../src/common/common.css"

function FourthPage() {
  return (
    <div className='fourth-page-container'>
        <p className='fourth-page-heading'>Here’s how to</p>
        <div className='fourth-page-div' type="button">Come up with ideas</div><hr></hr>
        <div className='fourth-page-div' type="button">Connect as a team</div><hr></hr>
        <div className='fourth-page-div' type="button">Make a plan</div><hr></hr>
        <div className='fourth-page-div' type="button">Coordinate and align</div><hr></hr>
        <div className='fourth-page-div-container'>
            <div className='fourth-page-div-data'>Hundreds of options for whatever your team needs.</div>
            <div className='firs-page-btn'>
                <div className='first-page-btn-left1 first-page-btn-left2' type="button">{'>'}</div>
                <div className='first-page-btn-right first-page-btn-right21' type="button">Explore all templets</div>
            </div>
        </div>
    </div>
  )
}

export default FourthPage;