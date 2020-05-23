import React from 'react'
import reviewsData from '../data/reviewsData'
import Slide from '../components/Slide'

function Reviews() {
    return (
        <div>
            <div className='reviews-hero'>
                <img className='reviews-hero-image' src={reviewsData.hero} alt=''/>
                <div className='reviews-hero-text'>
                    <h1 className='reviews-hero-text-heading'>{reviewsData.heroText}</h1>
                    <p className='reviews-hero-text-subheading'>{reviewsData.heroSubText}</p>
                </div>
            </div>
            <div className='reviews-slides'>
                {
                    reviewsData.reviews.map((review, index) => {
                        let isFlipped = false
                        if (review.id % 2 === 0) isFlipped = true
                        return (
                            <Slide 
                                key={index}
                                image={review.image}
                                heading={review.heading}
                                description={review.description}
                                isFlipped={isFlipped}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reviews