import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, handleClick }) {
    return (
        <div>
            <Header handleClick={handleClick}/>
            { children }
            <Footer />
        </div>
    )
}

export default Layout
