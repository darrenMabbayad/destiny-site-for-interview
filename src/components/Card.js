import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import StatIcon from './StatIcon'

function Card({ heading, text, img, kineticWep, specialWep, powerWep, stats, btnText, btnPath, hasButton, icon }) {
    const overlayColor = '#423659'
    const bungieUrl = 'https://www.bungie.net/'
    const characterStatsIcons = {
        mobilityIcon: 'https://www.bungie.net/common/destiny2_content/icons/c9aa8439fc71c9ee336ba713535569ad.png',
        resilienceIcon: 'https://www.bungie.net/common/destiny2_content/icons/9f5f65d08b24defb660cebdfd7bae727.png',
        recoveryIcon: 'https://www.bungie.net/common/destiny2_content/icons/47e16a27c8387243dcf9b5d94e26ccc4.png',
        disciplineIcon: 'https://www.bungie.net/common/destiny2_content/icons/ca62128071dc254fe75891211b98b237.png',
        intellectIcon: 'https://www.bungie.net/common/destiny2_content/icons/59732534ce7060dba681d1ba84c055a6.png',
        strengthIcon: 'https://www.bungie.net/common/destiny2_content/icons/c7eefc8abbaa586eeab79e962a79d6ad.png',
    }
    
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
                            <div className='destiny2-item-container'> 
                                <div>
                                    <img src={`${bungieUrl}${kineticWep}`} className='destiny2-item' alt=''/>
                                    <img src={`${bungieUrl}${specialWep}`} className='destiny2-item' alt=''/>
                                    <img src={`${bungieUrl}${powerWep}`} className='destiny2-item' alt=''/>
                                </div>
                            </div>
                            <div className='stat-icon-container'>
                                <div className='stat-icon-container-flex'>
                                    <StatIcon icon={characterStatsIcons.mobilityIcon} statValue={stats.mobility}/>
                                    <StatIcon icon={characterStatsIcons.resilienceIcon} statValue={stats.resilience}/>
                                    <StatIcon icon={characterStatsIcons.recoveryIcon} statValue={stats.recovery}/>
                                </div>
                                <div className='stat-icon-container-flex'>
                                    <StatIcon icon={characterStatsIcons.disciplineIcon} statValue={stats.discipline}/>
                                    <StatIcon icon={characterStatsIcons.intellectIcon} statValue={stats.intellect}/>
                                    <StatIcon icon={characterStatsIcons.strengthIcon} statValue={stats.strength}/>
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
