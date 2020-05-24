import React from 'react'

function Exotics() {
    const containerStyles = {
        position: 'relative',
        height: '60vh',
        backgroundColor: '#12171C'
    }
    const pendingStyles = {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <div style={containerStyles}>
            <h1 style={pendingStyles}>This page is under construction.</h1>
        </div>
    )
}

export default Exotics
