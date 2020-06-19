import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function Card({ heading, text, img, kineticWep, specialWep, powerWep, btnText, btnPath, hasButton, icon }) {
    //const overlayColor = '#C8C8C8'
    const overlayColor = '#423659'
    const bungieUrl = 'https://www.bungie.net/'
    console.log(kineticWep)
    
    const backgroundStyles = {
        background: `url(${img})`,
        backgroundColor: overlayColor,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
    }
    
    const bringTextForward = {
        zIndex: '1000'
    } 
    
    function renderIcon() {
        const iconSize = '2x'
        const fundamentalsIcon = <FontAwesomeIcon icon={faBook} size={iconSize} color='black'/>
        const exoticsIcon = <FontAwesomeIcon icon={faTools} size={iconSize} color='black'/>
        const buildsIcon = <FontAwesomeIcon icon={faHammer} size={iconSize} color='black'/>
        const trialsIcon = <FontAwesomeIcon icon={faEye} size={iconSize} color='black'/>
        switch (icon) {
            case 'faBook': return fundamentalsIcon
            case 'faTools': return exoticsIcon
            case 'faHammer': return buildsIcon
            case 'faEye': return trialsIcon
            default: return null
        }
    }

    function renderCardType() {
        if (img) {
            return (
                <div style={backgroundStyles} className='card type2'>
                    <div style={bringTextForward}>
                        <h2 className='card-heading card-heading-type2'>{ heading }</h2>
                        <div className='card-type2-info'>
                            <p className='card-text card-text-type2'>{ text }</p>
                            <div>
                                <div>
                                    <img src={`${bungieUrl}${kineticWep}`} className='destiny2-item' alt=''/>
                                    <img src={`${bungieUrl}${specialWep}`} className='destiny2-item' alt=''/>
                                    <img src={`${bungieUrl}${powerWep}`} className='destiny2-item' alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        hasButton ? (
                            <div className='card-button'>
                                    <Button text={btnText} path={btnPath}/>
                            </div> 
                        ) : null
                    }
                </div>
            )
        }
        return (
            <div className='card'>
                <div style={bringTextForward}>
                    <h2 className='card-heading'>{ heading }</h2>
                    <p className='card-text'>{ text }</p>
                </div>
                <div>
                    {
                        <div className='card-icon'>
                            {renderIcon()}
                        </div>
                    }   
                    {
                        hasButton ? (
                            <div className='card-button'>
                                    <Button text={btnText} path={btnPath}/>
                            </div> 
                        ) : null
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            {renderCardType()}
        </>
    )
}

export default Card
