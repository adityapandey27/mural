import React from 'react';
import "../../src/common/common.css";
import Logo from "../../src/common/NavBar/mural.svg"

function Footer() {
  return (
    <div className="main-footer">
      
     <div className='main-footer-2'>
        <div className='part-div'>
         <p className="middle-p">Product</p>
         <ul className='left-ul'>
            <li className='li' type="button">Enterprise Ready</li>
            <li className='li' type="button">Security</li>
            <li className='li' type="button">Shipping</li>
            <li className='li' type="button">Features</li>
            <li className='li' type="button">Deals</li>
            <li className='li' type="button">About</li>
            <li className='li' type="button">Careers</li>
            <li className='li' type="button">Updates</li>
            <li className='li' type="button">Templates</li>
            <li className='li' type="button">Mobile Apps</li>
            <li className='li' type="button">Inspiration</li>
         </ul>
        </div> 
     

        <div className='part-div'>
         <p className="middle-p">Resources</p>
         <ul className='left-ul'>
            <li className='li' type="button">Blog</li>
            <li className='li' type="button">Webinars</li>
            <li className='li' type="button">Shipping</li>
            <li className='li' type="button">Deals</li>
            <li className='li' type="button">About</li>
            <li className='li' type="button">Careers</li>
            <li className='li' type="button">Community</li>
            <li className='li' type="button">Help Center</li>
            
         </ul>
         </div> 

         

        <div className='part-div'>
         <p className="middle-p">Membership</p>
         <ul className='left-ul'>
            <li className='li' type="button">Pricing</li>
            <li className='li' type="button">Consultant Network</li>
            <li className='li' type="button">Education</li>
            <li className='li' type="button">Nonprofits</li>
            <li className='li' type="button">Contact Sales</li>
         </ul>
         </div> 

         

        <div className='part-div'>
         <p className="middle-p">Company</p>
         <ul className='left-ul'>
            <li className='li' type="button">Help</li>
            <li className='li' type="button">Return</li>
            <li className='li' type="button">Shipping</li>
            <li className='li' type="button">Deals</li>
            <li className='li' type="button">About</li>
            <li className='li' type="button">Careers</li>
            <li className='li' type="button">Customer Stories</li>
            <li className='li' type="button">Mobile Apps</li>
            <li className='li' type="button">Inspiration</li>
         </ul>
         </div> 

         

        <div className='part-div'>
         <p className="middle-p">Our Apps</p>
         <ul className='left-ul'>
            <li className='li' type="button">Download our Apps</li>
            <li className='li' type="button">Microsoft Teams</li>
            <li className='li' type="button">Surface Hub</li>
         </ul>
         </div> 

         

        <div className='part-div'>
         <p className="middle-p">Social</p>
         <ul className='left-ul'>
            <li className='li' type="button">Instagram</li>
            <li className='li' type="button">Youtube</li>
            <li className='li' type="button">Linkedin</li>
            <li className='li' type="button">Twitter</li>     
            </ul>
         </div> 
        </div>

        <div className="footer-last-div-p">
            <div className='footer-logo'>
                <img src={Logo} alt="logo" className='footer-logo-div'></img>
            </div>
            <p className='footer-last1' type="button">Privacy Policy<br></br>
             Terms of Service</p>
            <p className='footer-last2' type="button">
              © 2022 Mural. All rights reserved.<br></br>
                LUMA Institute, LLC is a wholly-owned subsidiary of Tactivos, Inc. d/b/a<br></br> Mural.

            </p>
        </div>

        
    </div>
  )
}

export default Footer