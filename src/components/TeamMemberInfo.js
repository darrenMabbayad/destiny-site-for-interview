import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'

function TeamMemberInfo({ member }) {
    const iconColor = 'black'
    return (
        <div key={member.id} className='about-team-info-member'>
            <img className='about-team-info-member-logo'src={member.logo} alt=''/>
            <h3 className='about-team-info-member-name'>{member.name}</h3>
            <p className='about-team-info-member-description'>{member.description}</p>
            <div className='about-team-info-member-links'>
                <ul>
                    <li>
                        <a 
                            href={member.youtube} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon 
                                className='team-socials-icon'
                                icon={faYoutubeSquare} 
                                size='lg'
                                color={iconColor}
                            />
                        </a>
                    </li>

                    <li>
                        <a 
                            href={member.twitter} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon 
                                className='team-socials-icon'
                                icon={faTwitter} 
                                size='lg'
                                color={iconColor}
                            />
                        </a>
                    </li>

                    <li>
                        <a 
                            href={member.twitch} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon 
                                className='team-socials-icon'
                                icon={faTwitch} 
                                size='lg'
                                color={iconColor}
                            />
                        </a>
                    </li>
                </ul>                                 
            </div>
        </div>
    )
}

export default TeamMemberInfo
