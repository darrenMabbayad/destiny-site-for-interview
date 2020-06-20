import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HeaderModal from './components/HeaderModal'
import Home from './pages/Home'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Accredidation from './pages/Accredidation'
import Fundamentals from './pages/courses/Fundamentals'
import Exotics from './pages/courses/Exotics'
import Builds from './pages/courses/Builds'
import Trials from './pages/courses/Trials'

function App() {
  const [toggleNav, setToggleNav] = useState(false)

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
            <HeaderModal handleClick={handleClick}/>, document.getElementById('modal')) : null
        }
      </Layout>
    </div>
  );
}

export default App;
