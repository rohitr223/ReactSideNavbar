import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu as Menu} from 'react-icons/gi'
import {RxCrossCircled as Cross} from 'react-icons/rx'
import Logo from '../assets/images/DemoLogo.svg'


const Navbar = () => {

    const openMenu = () => {
        navLinks.style.right = '0'
    }

    const closeMenu = () => {
        navLinks.style.right = '-9rem'
    }

  return (
    <nav>
        <a href="#">
            <img src={Logo} alt="logo" className="logo" />
        </a>

        <div className="nav-links" id="navLinks">
            <Cross className="menu-icon cross" onClick={closeMenu} />
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Blogs</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <Menu className="menu-icon menu" onClick={openMenu} />
    </nav>
  )
}

export default Navbar