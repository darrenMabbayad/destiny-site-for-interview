import React from 'react'
import aboutData from '../data/aboutData'
import Card from '../components/Card'
import introBg from '../images/trials-logo.jpg'
import TeamMemberInfo from '../components/TeamMemberInfo'

function About() {
    return (
        <div className='about'>
            <div className='about-hero'>
                <img className='about-hero-image' src={aboutData.hero} alt=''/>
                <h1 className='about-hero-text'>{ aboutData.heroText }</h1>
            </div>

            <div className='about-intro'>
                <img className='about-intro-image' src={introBg} alt=''/>

                <div className='about-intro-block'>
                    <div>
                        <h1 className='about-intro-heading'>{aboutData.introHeading}</h1>
                        <div className='about-intro-text'>
                            <p className='about-intro-text-subheading'>{aboutData.introSubHeading}</p>
                            <div className='about-intro-text-block'>
                                {
                                    aboutData.introText.map(block => {
                                        return (
                                            <p className='about-intro-text-block-p' key={block.id}>
                                                {block.text}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-principles'>
                <h1 className='about-principles-heading'>The Principles of PVP</h1>
                <div className='about-principles-cards'>
                    {
                        aboutData.principles.map(principle => {
                            return (
                                <Card 
                                    key={principle.id}
                                    heading={principle.heading}
                                    text={principle.text}
                                    hasButton={false}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className='about-video'>
                <div className='about-video-text-block'>
                    <h2 className='about-video-text'>
                        Don't know what to expect?
                    </h2>
                    <h2 className='about-video-text'>
                        Here's an example of what we offer at HunterMains.
                    </h2>
                </div>
                <div className='about-video-container'>
                    <div className='about-video-block'>
                        <iframe
                            className='about-video-embed'
                            width="800" 
                            height="450" 
                            src="https://www.youtube.com/embed/l-BhM2Al1Yg" 
                            frameBorder="0" 
                            //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            title='about-embed'
                        />
                    </div>
                </div>
            </div>

            <div className='about-team'>
                <h1 className='about-team-heading'>Meet the Team</h1>
                <div className='about-team-info'>
                    {
                        aboutData.team.map(member => <TeamMemberInfo member={member}/>)
                    }
                </div>
            </div>

        </div>
    )
}

export default About