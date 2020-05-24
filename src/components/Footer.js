import React from 'react'
import externalLinks from '../data/links'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-content'>
                    <h3 className='footer-heading'>HunterMains</h3>
                    <p className='footer-info'>
                        <strong className='footer-info-strong'>Accept no carry service. </strong><br />
                        <strong className='footer-info-strong'>Persevere </strong> 
                        and reach the top of the Lighthouse!
                    </p>
                </div>
                <div className='footer-content'>
                    <h3 className='footer-heading'>Navigation</h3>
                    <ul>
                        <Link to='/accredidation'><li className='footer-link'>Accredidation</li></Link>
                        <Link to='/about'><li className='footer-link'>About Us</li></Link>
                        <Link to='/reviews'><li className='footer-link'>Reviews</li></Link>
                        <li>
                            <a 
                                className='footer-link'
                                href={externalLinks.bungie} 
                                target='_blank' 
                                rel="noopener noreferrer"
                            >
                                Bungie.net
                            </a>
                        </li>
                        <li >
                            <a 
                                className='footer-link'
                                href={externalLinks.reddit} 
                                target='_blank' 
                                rel="noopener noreferrer"
                            >
                                Destiny Subreddit
                            </a>
                        </li>                    
                    </ul>
                </div>
                <div className='footer-content'>
                    <h3 className='footer-heading'>Guardian School</h3>
                    <ul>
                        <Link to='/fundamentals'><li className='footer-link'>Fundamentals</li></Link>
                        <Link to='/exotics'><li className='footer-link'>Gear and Exotics</li></Link>
                        <Link to='/builds'><li className='footer-link'>Builds</li></Link>
                        <Link to='/builds'><li className='footer-link'>Trials of Osiris</li></Link>
                    </ul>
                </div>           
            </div>
        </footer>
    )
}

export default Footer
