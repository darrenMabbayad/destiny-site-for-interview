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
const reviewOneStats = {
    mobility: 105,
    resilience: 30,
    recovery: 84,
    discipline: 41,
    intellect: 63,
    strength: 67,
}

const review1 = {
    id: 1,
    img: require('../images/hunter1.jpg'),
    path: 'reviews',
    heading: 'Gamefire',
    subheading: 'Punchy Titan',
    text: 'I recently created a Hunter and now I can\'t go back... No more punchies, no more charges, no more Titan!',
    kinetic: '/common/destiny2_content/icons/7106d949c81a1b2b281964ae2184d6b2.jpg',
    special: '/common/destiny2_content/icons/276359d16a70dad38c6b1e196dfa097b.jpg',
    power: '/common/destiny2_content/icons/b95e68c761e400c2fe5cf3c46999d689.jpg',
    stats: reviewOneStats
}

const reviewTwoStats = {
    mobility: 96,
    resilience: 23,
    recovery: 101,
    discipline: 43,
    intellect: 55,
    strength: 21,
}

const review2 = {
    id: 2,
    img: require('../images/hunter2.jpg'),
    path: 'reviews',
    heading: 'Kilroy',
    subheading: 'New to the Game',
    text: 'These courses really taught me how to get a foothold in the Crucible! Really well thought out guides on PVP with great content creators.',
    kinetic: '/common/destiny2_content/icons/6481ca96bae1de44456ec24afb4e4881.jpg',
    special: '/common/destiny2_content/icons/0d39a47ea705e188a3674fa5f41b99a5.jpg',
    power: '/common/destiny2_content/icons/11eeb53a1b5915c5e1740c0dda9b5f05.jpg',
    stats: reviewTwoStats
}

const reviewThreeStats = {
    mobility: 65,
    resilience: 20,
    recovery: 109,
    discipline: 81,
    intellect: 75,
    strength: 44,
}

const review3 = {
    id: 3,
    img: require('../images/hunter3.jpg'),
    path: 'reviews',
    heading: 'Appleches',
    subheading: 'Toxic Guardian',
    text: 'I\'ve gone from a sub 50% winrate to a 65% winrate and I\'m more levelheaded in game.',
    kinetic: '/common/destiny2_content/icons/bcd08eabf428ffcd0407501fff00f253.jpg',
    special: '/common/destiny2_content/icons/8f5bedcac2559d153f6df266d9f4d04b.jpg',
    power: '/common/destiny2_content/icons/25a32894caaa1ae2a9a81bcf5c2e20ac.jpg',
    stats: reviewThreeStats
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