import React from 'react'
import { Link } from 'react-router-dom'

function Header({ handleClick }) {
    
    return (
        <header>
            <Link to='/' target='_blank' rel="noopener noreferrer"><h1 className='logo'>HunterMains</h1></Link>
            <nav>
                <span className='menu-toggle'>
                    <div className='menu-toggle-icon'></div>
                </span>
                <ul className='nav-links'>
                    <Link to='/about' target='_blank' rel="noopener noreferrer"><li className='nav-links-link'>About Us</li></Link>
                    <li>
                        <button className='nav-links-link toggle-desktop' name='toggle-nav' onClick={event => handleClick(event)}>
                            Guardian School
                        </button>
                    </li>
                    <Link to='/reviews' target='_blank' rel="noopener noreferrer"><li className='nav-links-link'>Reviews</li></Link>
                </ul>
            </nav> 
        </header>
    )
}

export default Header
