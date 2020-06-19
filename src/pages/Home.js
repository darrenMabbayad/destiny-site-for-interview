import React from 'react'
import Card from '../components/Card'
import btnText from '../data/btnText'
import homeData from '../data/homeData'
import Button from '../components/Button'

function Home() {
    const backgroundStyles = {
        backgroundColor: 'white'
    }

    return (
        <div className='home'>
            <div className='home-hero'>
                <img className='home-hero-image' src={homeData.hero} alt=''/>
                <div className='home-hero-block'>
                    <h1 className='home-hero-text'>{homeData.heroText}</h1>
                    <div className='home-hero-btn'>
                        <Button text={btnText.letsGo} path='courses' isHashLink={true}/>
                    </div>
                </div>
            </div>

            <div className='home-intro-block'>
                <div className='home-intro'>
                    <h1 className='home-intro-heading'>{homeData.introHeading}</h1>
                    <div>
                        <p className='home-intro-subheading'>{homeData.introSubHeading}</p>
                        <p className='home-intro-text'>{homeData.introText}</p>
                    </div>
                </div>
            </div>


            <div className='home-stats-block'>
                <div className='home-stats'>
                    <p className='home-stats-text'>Over <br />
                        <strong className='home-stats-strong'> 1,000,000 </strong><br />
                        hunters playing Destiny
                    </p>
                    <p className='home-stats-text'>The most <br />
                        <strong className='home-stats-strong'> popular </strong><br /> 
                        class in the game
                    </p>
                    <p className='home-stats-text'>With the most <br />
                        <strong className='home-stats-strong'> fashionable </strong><br /> 
                        armor sets available
                    </p>
                </div>              
            </div>

            <div style={backgroundStyles} className='home-courses' id='courses'>
                <h1 className='home-courses-heading'>The Guardian School</h1>
                <p className='home-courses-subheading'>Hunters are the only true guardians</p>
                <div className='home-courses-cards'>
                    { 
                        homeData.courses.map(course => {
                            return (
                                <Card 
                                    key={course.id}
                                    heading={course.heading}
                                    text={course.text}
                                    btnText={btnText.viewCourse}
                                    btnPath={course.path}
                                    hasButton={true}
                                    icon={course.icon}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className='home-video-block'>
                <div className='home-video'>
                    <iframe    
                        className='home-video-embed'        
                        width="800"                
                        height="450"                
                        src="https://www.youtube.com/embed/3IhDGd0evwg" 
                        frameBorder="0" 
                        //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title='home-embed'
                    />
                </div>
            </div>


            <div style={backgroundStyles} className='home-reviews'>
                <div>
                    <h1 className='home-reviews-heading'>Flawless Hunters</h1>
                    <p className='home-reviews-subheading'>Stories of the smoothest gameplay, the sickest clutches, and the sexiest capes.</p>
                </div>
                <div className='home-reviews-cards'>
                { 
                        homeData.reviews.map(review => {
                            return (
                                <Card 
                                    key={review.id}
                                    heading={review.heading}
                                    text={review.text}
                                    img={review.img}
                                    kineticWep={review.kinetic}
                                    specialWep={review.special}
                                    powerWep={review.power}
                                    stats={review.stats}
                                    btnText={btnText.readMore}
                                    btnPath={review.path}
                                    hasButton={true}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
