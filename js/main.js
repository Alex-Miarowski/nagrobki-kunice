let nav
let navMobile
let navItems
let navBurgerBtn
let navBurgerIcon
let allNavMobileItems
let allNavDesktopItems
let sections

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	checkSubpage()
}

const prepareDOMElements = () => {
	nav = document.querySelector('.nav')
	navBurgerBtn = document.querySelector('.nav__burger-btn')
	navBurgerIcon = document.querySelector('.nav__burger-icon')
	navMobile = document.querySelector('.nav__items-mobile')
	allNavMobileItems = document.querySelectorAll('.nav__item-mobile')
	allNavDesktopItems = document.querySelectorAll('.nav__item-desktop')
	sections = document.querySelectorAll('.section')
}

const prepareDOMEvents = () => {
	navBurgerBtn.addEventListener('click', handleBurgerBtnClick)
	handleNavMobileItemClick()
	checkScrollSpy()
	//window.addEventListener('resize', checkScrollSpy)
	// window.addEventListener('resize', setW)
	// setW()
}

const checkSubpage = () => {
	if (window.innerWidth >= 992) {
		if (window.location.pathname.includes('/nagrobki-kunice/') || window.location.pathname === '/') {
			window.addEventListener('scroll', scrollSpyHandle)
			window.addEventListener('resize', setW)
			setW()
		} else if (window.location.pathname.includes('/galery.html')) {
			window.removeEventListener('scroll', scrollSpyHandle)
			activeClassReset()
			allNavDesktopItems[2].classList.add('nav__item-desktop--active')
		}
	}
}

const handleBurgerBtnClick = () => {
	burgerIconChange()
	navMobile.classList.toggle('nav__items-mobile--active')
}

const burgerIconChange = () => {
	if (navBurgerIcon.getAttribute('src') == './img/icons/menu.svg') {
		navBurgerIcon.setAttribute('src', './img/icons/x.svg')
	} else {
		navBurgerIcon.setAttribute('src', './img/icons/menu.svg')
	}
}

const handleNavMobileItemClick = () => {
	allNavMobileItems.forEach(item => {
		item.addEventListener('click', () => {
			handleBurgerBtnClick()
		})
	})
}

const activeClassReset = () => {
	allNavDesktopItems.forEach(item => {
		item.classList.remove('nav__item-desktop--active')
	})
}

const checkScrollSpy = () => {
	if (window.innerWidth >= 992) {
		window.addEventListener('scroll', scrollSpyHandle)
	} else {
		window.removeEventListener('scroll', scrollSpyHandle)
	}
}

const scrollSpyHandle = () => {
	for (let i = 0; i < sections.length; i++) {
		activeClassReset()
		if (nav.offsetTop + nav.offsetHeight <= sections[i].offsetTop) {
			allNavDesktopItems[i].classList.add('nav__item-desktop--active')
			break
		}
		if (window.scrollY + window.innerHeight + 1 >= document.body.scrollHeight) {
			allNavDesktopItems[3].classList.add('nav__item-desktop--active')
			break
		}
	}
}

const calcW = x => {
	let res = 300 * x + 60 * (x - 1)
	return res
}

const setW = () => {
	let windowWidth = window.innerWidth
	let xwidth = Math.min(windowWidth, 1200)
	let calculatedWidth = Math.floor((xwidth + 60) / 330)
	let x = calcW(calculatedWidth)
	let maxWidth = document.querySelector('.offer__cards').getBoundingClientRect().width
	let res
	if (x > maxWidth) {
		res = calcW(calculatedWidth - 1)
	} else {
		res = x
	}
	document.querySelector('.offer__cards-gravestones').style.width = res + 'px'
	document.querySelector('.offer__cards-assortment').style.width = res + 'px'
	//console.log(maxWidth + 'px; W: ' + calculatedWidth)
}

const toggleBtn = document.getElementById('filterToggle')
const filterList = document.getElementById('filterList')
const dropdown = document.querySelector('.filter-dropdown')
const buttons = filterList.querySelectorAll('button')
const items = document.querySelectorAll('.gallery-item')

toggleBtn.addEventListener('click', () => {
	dropdown.classList.toggle('open')
})

buttons.forEach(button => {
	button.addEventListener('click', () => {
		// Zmień aktywny przycisk
		buttons.forEach(btn => btn.classList.remove('active'))
		button.classList.add('active')

		const filter = button.getAttribute('data-filter')

		// Filtrowanie obrazków
		items.forEach(item => {
			if (filter === 'all' || item.classList.contains(filter)) {
				item.style.display = 'block'
			} else {
				item.style.display = 'none'
			}
		})

		// Zamknij dropdown po wyborze
		dropdown.classList.remove('open')
	})
})

// Zamknij dropdown po kliknięciu poza nim
document.addEventListener('click', e => {
	if (!dropdown.contains(e.target)) {
		dropdown.classList.remove('open')
	}
})

document.addEventListener('DOMContentLoaded', main)
