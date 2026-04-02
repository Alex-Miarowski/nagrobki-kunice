let nav
let navMobile
let navItems
let navBurgerBtn
let navBurgerIcon
let allNavMobileItems
let allNavDesktopItems
let sections
let lightboxDiv
let lightboxImg
let imageBtnClose
let x
let GALLERY_ITEMS = []

const main = () => {
	fetchGalleryItems()
	prepareDOMElements()
	prepareDOMEvents()
	//checkSubpage()
}

const prepareDOMElements = () => {
	nav = document.querySelector('.nav')
	navBurgerBtn = document.querySelector('.nav__burger-btn')
	navBurgerIcon = document.querySelector('.nav__burger-icon')
	navMobile = document.querySelector('.nav__items-mobile')
	allNavMobileItems = document.querySelectorAll('.nav__item-mobile')
	allNavDesktopItems = document.querySelectorAll('.nav__item-desktop')
	sections = document.querySelectorAll('.section')
	lightboxDiv = document.querySelector('.lightbox')
	lightboxImg = document.querySelector('.lightbox-img')
	imageBtnClose = document.querySelector('.imageBtnClose')
}

const prepareDOMEvents = () => {
	navBurgerBtn.addEventListener('click', handleBurgerBtnClick)

	handleNavMobileItemClick()
	checkScrollSpy()
	//window.addEventListener('resize', checkScrollSpy)
	// window.addEventListener('resize', setW)
	// setW()
}

const fetchGalleryItems = () => {
	fetch('./js/gallery_items.json')
		.then(res => res.json())
		.then(data => {
			GALLERY_ITEMS = data
			checkSubpage()
		})
		.catch(err => console.error(err))
}

const checkSubpage = () => {
	const isGalleryPage = window.location.pathname.includes('/galery.html')
	const isMainPage = window.location.pathname.includes('/index.html')

	if (isGalleryPage) {
		createGalleryItems()
		handleFilter()
		imageBtnClose.addEventListener('click', handleImageBtnClose)

		// Wspólna część dla desktop i mobile — odczyt parametru i filtracja
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const urlFilter = urlParams.get('data-filter')

		if (urlFilter) {
			const buttons = document.querySelectorAll('#filterList button')
			const items = document.querySelectorAll('.gallery-item')
			buttons.forEach(btn => btn.classList.remove('active'))
			const activeBtn = document.querySelector(`#filterList button[data-filter="${urlFilter}"]`)
			if (activeBtn) activeBtn.classList.add('active')
			if (urlFilter === 'all') {
				items.forEach(item => (item.style.display = 'block'))
			} else {
				items.forEach(item => {
					item.classList.toggle('hidden', !item.classList.contains(urlFilter))
				})
			}
		}

		if (window.innerWidth >= 992) {
			window.removeEventListener('scroll', scrollSpyHandle)
			activeClassReset()
			allNavDesktopItems[2].classList.add('nav__item-desktop--active')
		}
	} else if (isMainPage) {
		if (window.innerWidth >= 992) {
			window.addEventListener('scroll', scrollSpyHandle)
			window.addEventListener('resize', setW)
			setW()
		}
	}
}

const createGalleryItems = () => {
	const galleryContainer = document.querySelector('.gallery')
	GALLERY_ITEMS.forEach(item => {
		const div = document.createElement('div')
		const img = document.createElement('img')
		const p = document.createElement('p')
		div.classList.add('gallery-item', item.category)
		p.classList.add('gallery-item-title')
		img.src = item.imgSrc
		img.alt = item.imgAlt
		p.textContent = item.title
		div.append(img, p)
		galleryContainer.appendChild(div)
		div.addEventListener('click', () => {
			handleGalleryItemClick(div)
		})
	})
}

const handleGalleryItemClick = clickedItem => {
	// console.log(clickedItem)
	x = clickedItem
	// lightboxDiv.classList.add('lightbox-open')
	lightboxDiv.classList.remove('hidden')
	let fileName = clickedItem.childNodes[0].src.split('/').pop().replace('_medium', '')
	let fileFolder = fileName.split('_')[0]
	let imgUrl = `./img/offer/${fileFolder}/${fileName}`
	lightboxImg.src = imgUrl
	// console.log(imgUrl)
}

const handleImageBtnClose = () => {
	// imageBtnClose.addEventListener('click', () => {
	// 	lightboxDiv.classList.toggle('hidden')
	// })
	lightboxDiv.classList.toggle('hidden')
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

const handleFilter = () => {
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
					item.classList.remove('hidden')
				} else {
					item.classList.add('hidden')
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
}

document.addEventListener('DOMContentLoaded', main)
