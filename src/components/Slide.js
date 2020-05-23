import React from 'react'

function Slide({ image, heading, description, isFlipped}) {
    return (
        <>
            {
                isFlipped ? 
                    (
                        <div className='slide'>
                            <div className='slide-text'>
                                <h1 className='slide-text-heading'>{heading}</h1>
                                {
                                    description.map((paragraph, index) => {
                                        return (
                                            <p key={index} className='slide-text-description'>
                                                {paragraph}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            <div className='slide-image'>
                                <img className='slide-image-src' src={image} alt=''/>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='slide'>
                            <div className='slide-image'>
                                <img src={image} alt=''/>
                            </div>
                            <div className='slide-text'>
                                <h1 className='slide-text-heading'>{heading}</h1>
                                {
                                    description.map((paragraph, index) => {
                                        return (
                                            <p key={index} className='slide-text-description'>
                                                {paragraph}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Slide
