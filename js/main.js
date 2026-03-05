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
let GALLERY_ITEMS = [
	{
		title: 'Nagrobek pojedynczy #1',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_1_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #2',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_2_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #3',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_3_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #4',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_4_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #5',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_5_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #6',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_6_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #7',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_7_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #8',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_8_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #9',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_9_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #10',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_10_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #11',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_11_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #12',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_12_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #13',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_13_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #14',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_14_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #15',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_15_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #16',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_16_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #17',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_17_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #18',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_18_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #19',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_19_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #20',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_20_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #21',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_21_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #22',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_22_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #23',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_23_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek pojedynczy #24',
		category: 'pojedyncze',
		imgSrc: './img/offer/pojedynczy/pojedynczy_24_small.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek podwójny #1',
		category: 'podwojne',
		imgSrc: './img/offer/podwojny.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek urnowy #1',
		category: 'urnowe',
		imgSrc: './img/offer/urnowy.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Nagrobek dziecięcy #1',
		category: 'dzieciece',
		imgSrc: './img/offer/dzieciecy.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Wazon #1',
		category: 'wazony',
		imgSrc: './img/offer/wazon.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Misa #1',
		category: 'misy',
		imgSrc: './img/offer/misa.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Książka #1',
		category: 'ksiazki',
		imgSrc: './img/offer/ksiazka.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Tabliczka #1',
		category: 'tabliczki',
		imgSrc: './img/offer/tabliczka.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Litery #1',
		category: 'litery',
		imgSrc: './img/offer/litery.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Krzyż #1',
		category: 'krzyze',
		imgSrc: './img/offer/krzyze.webp',
		imgAlt: 'alt',
	},
	{
		title: 'Lampion #1',
		category: 'lampiony',
		imgSrc: './img/offer/lampion.webp',
		imgAlt: 'alt',
	},
]

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
	let fileName = clickedItem.childNodes[0].src.split('/').pop().replace('_small', '')
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
