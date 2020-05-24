// hero section text
const heroText = 'No more getting carried, Become the carry.'
const hero = require('../images/home-hero.jpg')

// all information to display in the intro section of the home page
const introHeading = 'Losing the Guardian Games? Irrelevant. Hunters are #1'
const introSubHeading = 'Learn from the best of the best.'
const introText = 'We help countless Hunters, brand new or veterans of the franchise, learn the ins and outs of the Crucible. You will learn how to use all the tools at your disposal to grind your way to victory and earn that sweet, sweet Trials of Osiris fashion.'

// all the home page information pertaining to the courses given on the website
const fundamentals = {
    id: 1,
    path: 'fundamentals',
    heading: 'Fundamentals',
    text: 'Learn the basics of the Hunter\'s abilities, subclasses and general gameplay.',
    icon: 'faBook'
}

const exotics = {
    id: 2,
    path: 'exotics',
    heading: 'Gear and Exotics',
    text: 'See what exotics you have at your disposal and use them to change your playstyle on the fly.',
    icon: 'faTools'
}

const builds = {
    id: 3,
    path: 'builds',
    heading: 'Builds',
    text: 'Create, optimize and build up gearsets by grinding gear as efficiently as possible.',
    icon: 'faHammer'
}

const trials = {
    id: 4,
    path: 'trials',
    heading: 'Trials of Osiris',
    text: 'Understand the Trials environment and how to effectively utilize the Hunter\'s tools in this game mode.',
    icon: 'faEye'
}

const courses = [fundamentals, exotics, builds, trials]

// all the home page information pertaining to the testimonials/reviews of the courses given
const review1 = {
    id: 1,
    img: require('../images/hunter1.jpg'),
    path: 'reviews',
    heading: 'Gamefire',
    subheading: 'Punchy Titan',
    text: 'I recently created a Hunter and now I can\'t go back... No more punchies, no more charges, no more Titan!'
}

const review2 = {
    id: 2,
    img: require('../images/hunter2.jpg'),
    path: 'reviews',
    heading: 'Kilroy',
    subheading: 'New to the Game',
    text: 'These courses really taught me how to get a foothold in the Crucible! Really well thought out guides on PVP with great content creators.'
}

const review3 = {
    id: 3,
    img: require('../images/hunter3.jpg'),
    path: 'reviews',
    heading: 'Appleches',
    subheading: 'Toxic Guardian',
    text: 'I\'ve gone from a sub 50% winrate to a 65% winrate and I\'m more levelheaded in game.'
}

const reviews = [review1, review2, review3]

const homeData = {
    courses: courses, 
    reviews: reviews,
    heroText: heroText, 
    introHeading: introHeading, 
    introSubHeading: introSubHeading,
    introText: introText,
    hero: hero
}

export default homeData