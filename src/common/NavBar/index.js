import React from 'react'
import Logo from "./mural.svg"
import "../../common/common.css";

function NavBar() {
  return (
    <div className='navbar-main'>

        {/* Logo */}
        <div className='left-logo'>
            <img className="logo-mural" src={Logo} alt="mural logo"></img>
        </div>

        {/* middle part */}
        <div className='middle-part'>
            <div className='nav-element' type="button">Product</div>
            <div className='nav-element' type="button">Solutions</div>
            <div className='nav-element' type="button">Resources</div>
            <div className='nav-element' type="button">Pricing</div>
        </div>

        {/* login singup and button */}
        <div className='right-login'>
            <div className='navbar-right-signin' type="button">Sign in</div>
            <div className='navbar-right-btn' type="button">Sign Up, free forever</div>
            {/* css to make color come from left to right */}
                {/* /* .button {
  border: 1px solid black;
  border-radius: 3px;
  width: 100px;
  height: 30px;
  display: block;

  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out;
}

.button:hover {
  background-position: left bottom;
}

.text {
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  color: black;
  transition: all .6s ease-out;
  display: block;
}

.text:hover {
  color: white;  
} */}
        </div>

   
 

    </div>
  )
}

export default NavBar