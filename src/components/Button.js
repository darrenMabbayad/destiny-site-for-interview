import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Button({ text, path, isHashLink }) {
    return (
        <div>
            {
                isHashLink ? 
                    (
                        <HashLink to={`/#${path}`}>
                            <button className='generic-btn'>{text}</button>
                        </HashLink>
                    ) :
                    (
                        <Link to={`/${path}`}>
                            <button className='generic-btn'>{text}</button>
                        </Link>
                    )
            }
        </div>
    )
}

export default Button
