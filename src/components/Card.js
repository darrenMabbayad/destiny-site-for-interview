import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function Card({ heading, text, btnText, btnPath, hasButton, icon, img }) {
    const fundamentalsIcon = <FontAwesomeIcon icon={faBook} size='4x'color='black'/>
    const exoticsIcon = <FontAwesomeIcon icon={faTools} size='4x'color='black'/>
    const buildsIcon = <FontAwesomeIcon icon={faHammer} size='4x'color='black'/>
    const trialsIcon = <FontAwesomeIcon icon={faEye} size='4x'color='black'/>
    const overlayColor = '#FFCE1F'
    const secondaryColor = '#C8C8C8'

    const backgroundStyles = {
        background: `url(${img})`,
        backgroundColor: secondaryColor,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
    }

    const bringTextForward = {
        zIndex: '1000'
    }

    const boldenText = {
        fontWeight: '900',
        fontSize: '1.25rem'
    }


    function renderIcon() {
        switch (icon) {
            case 'faBook': return fundamentalsIcon
            case 'faTools': return exoticsIcon
            case 'faHammer': return buildsIcon
            case 'faEye': return trialsIcon
            default: return null
        }
    }

    return (
        <div style={img ? backgroundStyles : null} className='card'>
            <div style={bringTextForward}>
                <h2 className={img ? 'card-heading card-heading-type2' : 'card-heading'}>{ heading }</h2>
                <p style={img ? boldenText : null} className={img ? 'card-text card-text-type2' : 'card-text'}>{ text }</p>
            </div>
            {renderIcon()}   
            {
                hasButton ? 
                    (
                        <div className='card-button'>
                            <Button text={btnText} path={btnPath}/>
                        </div>
                    ) : 
                    null
            }
        </div>
    )
}

export default Card
