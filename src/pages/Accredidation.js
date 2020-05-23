import React from 'react'
import aboutData from '../data/aboutData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'

function Accredidation() {
    return (
        <div className='accredidation'>
            <h1 className='accredidation-heading'>HunterMains Content</h1>
            <p className='accredidation-text'>All of the video content not pertaining to specific courses on the
               site are from these wonderful content creators in the Destiny community.
            </p>
            <p className='accredidation-text'>
                Images are from the wonderful people at 
                <a 
                    className='accredidation-link'
                    href='https://www.bungie.net/'
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    Bungie Studios
                </a>
                and 
                <a 
                    className='accredidation-link'
                    href='https://axisstudiosgroup.com/work/destiny-2-warmind/'
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    Axis Studios Group
                </a>
            </p>

            {
                aboutData.team.map(member => {
                    return (
                        <div key={member.id} className='accredidation-member'>
                            <h2 className='accredidation-member-name'>{member.name}</h2>
                            <img className='accredidation-member-logo'src={member.logo} alt=''/>
                            <div className='accredidation-member-links'>
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
                                                size='2x'
                                                color='white'
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
                                                size='2x'
                                                color='white'
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
                                                size='2x'
                                                color='white'
                                            />
                                        </a>
                                    </li>
                                </ul>                                 
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accredidation
