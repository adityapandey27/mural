import React from 'react'
import "../../src/common/common.css";
import a2 from "./2nd.webp"
function ThirdPage() {
  return (
    <div className='third-page-container'>
        <div className='third-page-contianer-heading'>
        Change your how
        </div>

        <div className='third-page-bottom'>
            <div className='third-page-bottom-left'>
                <img className="third-page-bottom-left-image" alt="people" src={a2}></img>
            </div>
            <div className='third-page-bottom-right'>
                <p className='third-page-bottom-right-para'>Give your team the chance to make exceptional work with Mural, the only complete system that offers both a place to collaborate and guidance to hone your team’s collaboration skills.</p>
                <p className='third-page-bottom-right-para'>With Mural, you’ll see faster progress, better ideas, happier teams, and more consistently excellent results.</p>
                <p className='third-page-bottom-right-para-a'>That’s happy work.</p>
                {/* <div className='third-page-bottom-right-btn'></div> */}
                <div className='firs-page-btn'>
                <div className='first-page-btn-left1' type="button">{'>'}</div>
                <div className='first-page-btn-right' type="button">Start a whiteboard</div>

            </div>
            </div>
            
        </div>
    </div>
  )
}

export default ThirdPage;