'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll('.operations__tab')

const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(item => item.addEventListener('click', openModal))

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//////////////////////////////////////////
// Button Scrolling


btnScrollTo.addEventListener('click', (e) => {
    const s1coords = section1.getBoundingClientRect()
    console.log(s1coords)
    console.log(e.target.getBoundingClientRect())
    console.log('current scroll(X/Y)', window.pageXOffset, window.pageYOffset)
    // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)

    section1.scrollIntoView({behavior: 'smooth'})
})
// ///////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', function (e) {
//     e.preventDefault()
//
//     const id = this.getAttribute('href')
//     console.log(id)
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
// }))
//

// Event Delegation
// 1. ADd event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    console.log(e.target)
    e.preventDefault()
//     Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href')
        console.log(id)
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
})

// Tabbed component


// Event delegation for tabs on tabcontainer
tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab')

    // Guard clause
    if (!clicked) return // 当如果没有clicked的时候，那么就直接return，这样就不会execute后面那个line了。
    // 这里先remove掉所有的button会上下跳动的功能，回到初始，然后只有在点哪个的时候哪个跳起。
    tabs.forEach(item => item.classList.remove('operations__tab--active'))
    clicked.classList.add('operations__tab--active')

//     Activate content area

//     remove all active contents
    tabsContent.forEach(item => item.classList.remove('operations__content--active'))
    // add active contents to the website.
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// Menu fade animation


// Create a handleHover function outside so DRY code
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target
        const siblings = link.closest('.nav').querySelectorAll('.nav__link')
        const logo = link.closest('.nav').querySelector('img')
        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this
        })
        logo.style.opacity = this
    }
}

// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords)
// window.addEventListener('scroll', function () {
//     if (window.scrollY > initialCoords.top) {
//         nav.classList.add('sticky')
//
//     } else nav.classList.remove('sticky')
// })

// Sticky navigation: Intersection observer API

//need to pass a cb function and an object of options to observer here.
// const obsCallback = function (entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry)
//     })
// }
// const obsOptions = {
//     root: null,   // target elements to instersect
//     threshold: [0, 0.2],  // percentage that the target elements will intersect
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height
const stickyNav = (entries) => {
    const [entry] = entries;
    // console.log(entry)

    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
})

headerObserver.observe(header)
// the callback function will be called each time when the observed/target elemenet(section 1 here) is intersecting to the root element and threshold we defined.


// Reveal sections
const sectionHeight = section1.getBoundingClientRect().height

const revealContent = (entries, observer) => {
    const [entry] = entries
    // console.log(entry)
    if (!entry.isIntersecting) return

    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealContent, {
    root: null,
    threshold: 0.15,
    rootMargin: '-90px'
})

const allSection = document.querySelectorAll('.section')

allSection.forEach(function (section) {
    sectionObserver.observe(section)
    // section.classList.add('section--hidden')
})

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]')
console.log(imgTargets)

const loadImg = function (entries, observer) {
    const [entry] = entries
    if (!entry.isIntersecting) return;
//     Replace src with data-src
    entry.target.src = entry.target.dataset.src
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img')
    })
    observer.unobserve(entry.target)
}
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
})

imgTargets.forEach(img => imgObserver.observe(img))

// Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide')
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right')
    let curSlide = 0
    const maxSlide = slides.length
    const minSlide = 0
    const dotContainer = document.querySelector('.dots')
// Creating dots
    const createDots = function () {
        slides.forEach(function (_, index) {
                dotContainer.insertAdjacentHTML('beforeend', `<button class='dots__dot' data-slide='${index}'> </button>`)
            }
        )
    }
// 0%,100%,200%,300%
// -100%,0%,100%,200%

// define a goToSlide function
    const goToSlide = (slide) => {
        slides.forEach((s, index) => s.style.transform = `translateX(${(index - slide) * 100}%)`)

    }
// set initial slide is 0

// Go the next slide
    const activateDot = (slide) => {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
    }
    const nextSlide = () => {
        if (curSlide === maxSlide - 1) {
            curSlide = 0
        } else {
            curSlide++
        }
        goToSlide(curSlide)
        activateDot(curSlide)
    }

    const prevSlide = () => {
        if (curSlide === minSlide) {
            curSlide = slides.length - 1
        } else {
            curSlide--
        }
        goToSlide(curSlide)
        activateDot(curSlide)
    }

    const init = function () {
        goToSlide(0)
        createDots()
        activateDot(0)
    }
    init()
// Event Handler
    btnRight.addEventListener('click', nextSlide)
// Go to previous slide
    btnLeft.addEventListener('click', prevSlide)

// adding keyboard event handler for left and right arrow
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide()
        if (e.key === 'ArrowLeft') prevSlide()
        activateDot(curSlide)
    })


    activateDot(0)
    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            // const {slide} = e.target.dataset;
            curSlide = Number(e.target.dataset.slide)
            goToSlide(curSlide)
            activateDot(curSlide)

        }
    })
}

slider()
// /////////////////////////////////////////////////////////////////////////////////
// Select elements
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
//
// const header = document.querySelector('.header')
// const allSections = document.querySelectorAll('.section')
// console.log(allSections)
// document.getElementById('section--1')
// const allButtons = document.getElementsByTagName('button')
// document.getElementsByClassName('btn')
//
// // creating and inserting elements
// // .insertAdjacentHTML
// const message = document.createElement('div')
// message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality and analytics.'
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>'
// // header.prepend(message)
// header.append(message)
// // header.append(message.cloneNode(true))
// // header.before(message.cloneNode(true))
// // header.after(message.cloneNode(true))before
//
// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//     message.remove()
//     // message.parentElement.removeChild(message)
// })
//
// //Styles:
//
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'
//
// console.log(message.style.backgroundColor)
// console.log(getComputedStyle(message).height)
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'
//
// // set css variable
// document.documentElement.style.setProperty('--color-primary', 'orangered')
//
// //Attributes
//
// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className)
//
// logo.alt = 'Beautiful minimalist logo'
// // Non-standard
// console.log(logo.designer) // 这样直接找一个元素本来不该有的attribute会显示undefined
// console.log(logo.getAttribute('designer'))
// logo.setAttribute('company', 'Bankist')
//
// // 拿到src link等
// console.log(logo.src) // absolute source
// console.log(logo.getAttribute('src')) // relative source to your laptop folder
//
// const link = document.querySelector('.nav__link--btn')
// console.log(link.href)
// console.log(link.getAttribute('href'))
//
// //Data attribute
// console.log(logo.dataset.versionNumber)
//
// //Class
//
// logo.classList.add('c', 'j')
// logo.classList.remove('c', 'j')
// logo.classList.toggle('c', 'j')
// logo.classList.contains('c', 'j') // not includes

// DOnt use
// logo.className = 'xxxx'


// const btnScrollTo = document.querySelector('.btn--scroll-to')
// const section1 = document.querySelector('#section--1')
// btnScrollTo.addEventListener('click', (e) => {
//     const s1coords = section1.getBoundingClientRect()
//     console.log(s1coords)
//     console.log(e.target.getBoundingClientRect())
//     console.log('current scroll(X/Y)', window.pageXOffset, window.pageYOffset)
//     // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)
//
//     // Scrolling
//     // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)
//     // window.scrollTo({
//     //     left: s1coords.left + window.pageXOffset,
//     //     top: s1coords.top + window.pageYOffset,
//     //     behavior: 'smooth'
//     // })
//
//     section1.scrollIntoView({behavior: 'smooth'})
// })

// const h1 = document.querySelector('h1')
// const alertH1 = (e) => {
//     alert('addEventlistner:Great! you are reading the heading')
//
// }
// h1.addEventListener('mouseenter', alertH1)
//
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)
//
// // h1.onmouseenter = (e) => {
// //     alert('addEventlistner:Great! you are reading the heading')
// // })yo
//

//Create random color rgb(255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}) `
// console.log(randomColor())
//
//
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log('LINK', e.target, e.currentTarget)
//     // e.stopPropagation()
// })
//
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log('CONTAINER', e.target, e.currentTarget)
//
//
// })
//
// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log('NAV', e.target, e.currentTarget)
// }, true)

// const h1 = document.querySelector('h1')
//
// //Going downwards: Child
// console.log(h1.querySelectorAll(".highlight"))
// console.log(h1.childNodes)
// console.log(h1.children)
// console.log(h1.firstChild)
// h1.firstElementChild.style.color = ' white'
// h1.lastElementChild.style.color = ' orangered'
//
// // Going upwards: Parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)
//
// h1.closest('.header').style.background = 'var(--gradient-secondary)'
//
// h1.closest('h1').style.background = 'var(--gradient-primary)'
//
// //Going sideways: siblings
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)
//
// console.log(h1.previousSibling)
// console.log(h1.nextSibling)
//
// console.log([...h1.parentElement.children]);
//
//
// [...h1.parentElement.children].forEach(function (el) {
//     if (el !== h1) el.style.transform = 'scale(0.5)'
// })