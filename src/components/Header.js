import React from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header({ handleClick }) {
    const width = useWindowDimensions();
    const navClass = width > 899 ? 'nav-links' : 'nav-links nav-mobile'
    const menuToggleClass = width > 899 ? 'menu-toggle nav-desktop' : 'menu-toggle'
    const menuIconSize = '2x'
    const menuIcon = <FontAwesomeIcon icon={faBars} size={menuIconSize} color='white'/>
    
    return (
        <header>
            <Link to='/'><h1 className='logo'>HunterMains</h1></Link>
            <nav>
                <button 
                    name='toggle-nav' 
                    onClick={event => handleClick(event)}                   
                    className={menuToggleClass}
                >
                    <span className='menu-toggle-icon'>
                        {menuIcon}
                    </span>
                </button>
                <ul className={navClass}>
                    <li className='nav-links-link'><Link to='/about'>About Us</Link></li>
                    <li className='nav-links-link'>
                        <button className='nav-links-link toggle-desktop' name='toggle-nav' onClick={event => handleClick(event)}>
                            Guardian School
                        </button>
                    </li>
                    <li className='nav-links-link'><Link to='/reviews'>Reviews</Link></li>
                </ul>
            </nav> 
        </header>
    )
}

export default Header
