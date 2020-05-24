import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Accredidation from './pages/Accredidation'
import Fundamentals from './pages/courses/Fundamentals'
import Exotics from './pages/courses/Exotics'
import Builds from './pages/courses/Builds'
import Trials from './pages/courses/Trials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from './utils/useWindowDimensions'

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  const width = useWindowDimensions()
  const modalIconSize = '3x'

  function handleClick(event) {
    const { name } = event.target

    if (name === 'toggle-nav') {
      setToggleNav(prev => !prev)
      if (toggleNav) document.body.style.overflow = 'unset'
      else document.body.style.overflow = 'hidden'
    }

    return
  }

  return (
    <div className="App">
      <Layout handleClick={handleClick}>
        <Switch>

          <Route exact path='/'> 
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/reviews'>
            <Reviews />
          </Route>

          <Route path='/accredidation'>
            <Accredidation />
          </Route>

          <Route path='/fundamentals'>
            <Fundamentals />
          </Route>

          <Route path='/exotics'>
            <Exotics />
          </Route>

          <Route path='/builds'>
            <Builds />
          </Route>

          <Route path='/trials'>
            <Trials />
          </Route>

        </Switch>

        {
          toggleNav ? createPortal(       
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
                            <FontAwesomeIcon className='header-modal-icon' icon={faBook} size={modalIconSize}color='black'/>
                          </button>
                        </Link>
                        <Link className='header-modal-buttons' to='/reviews'>
                          <button 
                            name='toggle-nav' 
                            onClick={event => handleClick(event)} 
                            className='header-modal-sections'
                          >
                            <p className='header-modal-link'>Reviews</p>
                            <FontAwesomeIcon className='header-modal-icon' icon={faBook} size={modalIconSize}color='black'/>
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
                      <FontAwesomeIcon className='header-modal-icon' icon={faBook} size={modalIconSize}color='black'/>
                    </button>
                  </Link>
                  <Link className='header-modal-buttons' to='/exotics'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Gear and Exotics</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faTools} size={modalIconSize}color='black'/>
                    </button>
                  </Link>
                  <Link className='header-modal-buttons' to='/builds'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Builds</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faHammer} size={modalIconSize}color='black'/>
                    </button>
                  </Link>
                  <Link className='header-modal-buttons' to='/trials'>
                    <button 
                      name='toggle-nav' 
                      onClick={handleClick} 
                      className='header-modal-sections'
                    >
                      <p className='header-modal-link'>Trials of Osiris</p>
                      <FontAwesomeIcon className='header-modal-icon' icon={faEye} size={modalIconSize}color='black'/>
                    </button>
                  </Link>
                </div>
              </div>
            </div>, document.getElementById('modal')) : null
        }
      </Layout>
    </div>
  );
}

export default App;
