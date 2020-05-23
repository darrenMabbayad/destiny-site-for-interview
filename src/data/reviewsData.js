// data containing the contents of the review page's hero section
const heroText = 'The Flawless Ones'
const heroSubText = 'How HunterMains helped these players become gods of PVP'
const hero = require('../images/reviews-hero.jpg')

//data containing the contents of each review listed on the page
const review1 = {
    id: 1,
    heading: 'I\'ve always been a Titan main, but I needed a change of pace.',
    description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.'
    ],
    image: require('../images/trials-logo.jpg')
}

const review2 = {
    id: 2,
    heading: 'I was new and didn\'t really enjoy Crucible at first, but now it\'s different. PVP > PVE!',
    description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.'
    ],
    image: require('../images/crucible-logo.jpg')
}

const review3 = {
    id: 3,
    heading: 'Taking these courses gave me a deeper understanding of the meta, class matchups and how to effectively play the Hunter.',
    description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat lorem. Sed faucibus nisi odio, sed ultricies sem sodales venenatis. Morbi eleifend commodo ex in placerat. Morbi ac purus erat. Pellentesque semper porta blandit. Aenean venenatis bibendum lorem sit amet rutrum. Ut sit amet sodales odio, id elementum ligula.'
    ],
    image: require('../images/gambit-logo.jpg')
}

const reviews = [review1, review2, review3]

const aboutData = {
    heroText: heroText, 
    heroSubText: heroSubText,
    reviews: reviews,
    hero: hero
}

export default aboutData