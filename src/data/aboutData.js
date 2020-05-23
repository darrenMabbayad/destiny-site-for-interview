// data containing the about page's hero text
const heroText = 'Grind your way to the top'
const hero = require('../images/about-us-hero.png')

// data for the intro section in the about page
const introHeading = 'Our Goal'
const introSubHeading = 'HunterMains creates thorough courses about improving in the Crucible.'
const introText = [
    {
        id: 1,
        text: 'The hunter is the most popular class in Destiny, especially in the Crucible, and yet so many players don\'t fully understand how to use every tool at the hunter\'s disposal.'
    },
    {
        id: 2,
        text: 'HunterMains is where all hunters regardless of skill level can learn the ins and outs of the class and the PVP game modes Destiny has to offer and shows you how to apply them in real matches.'
    },
    {
        id: 3,
        text: 'We will first teach the fundamentals of the class, move on to the hunter specific exotics and what they can do in every situation, then show the most optimized builds for the hunter and how to efficiently grind these gearsets, and finally teach you what it takes to become flawless in the Trials of Osiris.'
    }
]

// data for the principle cards in the about pge
const principle1 = {
    id: 1,
    heading: 'The Meta',
    text: 'To stay at the top, you need to understand the gear and class meta in an evolving game. We\'ll show you what to focus on and general things that Bungie likes to change each season.'
}

const principle2 = {
    id: 2,
    heading: 'Fast Gameplay',
    text: 'The core of the hunter is it\'s mobility. We will show you how to abuse this to get an edge against the competition.'
}

const principle3 = {
    id: 3,
    heading: 'Aiming',
    text: 'This game is a first person shooter. You cannot get away with having poor aim. We will turn you into an aimbot.'
}

const principles = [principle1, principle2, principle3]

// data to display the team members of the website
const member1 = {
    id: 1,
    name: 'Datto',
    description: 'Destiny\'s Go To Man',
    youtube: 'https://www.youtube.com/channel/UCkmAjbIecTIjTQctolYeuDw',
    twitter: 'https://twitter.com/DattosDestiny',
    twitch: 'https://www.twitch.tv/datto',
    logo: require('../images/datto-logo.jpg')
}

const member2 = {
    id: 2,
    name: 'Aztecross',
    description: 'The Voice of Destiny',
    youtube: 'https://www.youtube.com/channel/UClbllR4Tx-lhYJyrpu1sA4A',
    twitter: 'https://twitter.com/AztecrossGaming',
    twitch: 'https://www.twitch.tv/aztecross',
    logo: require('../images/aztecross-logo.png')
}

const member3 = {
    id: 3,
    name: 'Mtashed',
    description: 'The Tashman',
    youtube: 'https://www.youtube.com/channel/UCI0fV325v5QniwVJ74PAVcA',
    twitter: 'https://twitter.com/MTashed',
    twitch: 'https://www.twitch.tv/mtashed',
    logo: require('../images/mtashed-logo.jpg')
}

const member4 = {
    id: 4,
    name: 'Slayerage',
    description: 'The Legend Himself',
    youtube: 'https://www.youtube.com/channel/UCcTfAi-mBOshH2CzCi09Hgg',
    twitter: 'https://twitter.com/sc_Slayerage',
    twitch: 'https://www.twitch.tv/slayerage',
    logo: require('../images/slayerage-logo.png')
}

const team = [member1, member2, member3, member4]

const aboutData = {
    heroText: heroText, 
    introHeading: introHeading, 
    introSubHeading: introSubHeading,
    introText: introText,
    principles: principles,
    team: team,
    hero: hero
}

export default aboutData