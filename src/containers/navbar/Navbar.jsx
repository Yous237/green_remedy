import React,{useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/green-remedy-logo.png';
import './navbar.css'


//BEM(css convention) ==> Block Element Modifier

const Menu = ()=>{
  return(
    <>
      <p><a href="#home">About Us</a></p>
      <p><a href="#wgpt3">Online Menu</a></p>
      <p><a href="#possibility">Store</a></p>
      <p><a href="#features">Blog</a></p>

    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    // <div className="nav">
    //             <div className="nav-brand">
    //                 <img src={logo} alt="" />
    //             </div>
    //             <div className="nav-links">
    //                 <a>Home</a>
    //                 <a>About</a>
    //                 <a>Menu</a>
    //                 <a>Contact</a>
    //             </div>
    //             <div className="nav-sign">
    //                 <div className="nav-sign-in">
    //                     <a href="">Sign In</a>
    //                 </div>
    //                 <div className="nav-sign-up">
    //                     <a href="">Sign Up</a>
    //                 </div>
    //             </div>

    // </div>
    <div className='navbar'>
      <div className='navbar-links'>
        <div className="navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="navbar-sign">
        <div className="navbar-sign-in">
            <a href="">Sign In</a>
        </div>
        <div className="navbar-sign-up">
            <a href="">Sign Up</a>
        </div>
     </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu/>
              <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar