import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from '../utils/useWindowDimensions'

function HeaderModal({ handleClick }) {
    const width = useWindowDimensions()
    const modalIconSize = '3x'
    
    return (
        <div>
              <button name='toggle-nav' onClick={handleClick} className='header-modal-overlay'></button>
              <div className='header-modal'>
                <div className='header-modal-block'>
                  {
                    width < 900 ? 
                    (
                      <>
                        <Link className='header-modal-buttons' to='/about'>
                          <button 
                            name='toggle-nav' 
                            onClick={event => handleClick(event)} 
                            className='header-modal-sections'
                          >
                            <p className='header-modal-link'>About</p>
                            <FontAwesomeIcon className='header-modal-icon' icon={faInfoCircle} size={modalIconSize} color='black'/>
                          </button>
                        </Link>
                        <Link className='header-modal-buttons' to='/reviews'>
                          <button 
                            name='toggle-nav' 
                            onClick={event => handleClick(event)} 
                            className='header-modal-sections'
                          >
                            <p className='header-modal-link'>Reviews</p>
                            <FontAwesomeIcon className='header-modal-icon' icon={faUsers} size={modalIconSize} color='black'/>
                          </button>
                        </Link>
                      </>
                    ) : null
                  }
                  <Link className='header-modal-buttons' to='/fundamentals'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Fundamentals</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faBook} size={modalIconSize} color='black'/>
                    </button>
                  </Link>
                  <Link className='header-modal-buttons' to='/exotics'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Gear and Exotics</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faTools} size={modalIconSize} color='black'/>
                    </button>
                  </Link>
                  <Link className='header-modal-buttons' to='/builds'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Builds</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faHammer} size={modalIconSize} color='black'/>
                    </button>
                  </Link>
                  <Link className='header-modal-buttons' to='/trials'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Trials of Osiris</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faEye} size={modalIconSize} color='black'/>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
    )
}

export default HeaderModal
