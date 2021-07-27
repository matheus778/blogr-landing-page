const btnMenu = document.querySelector('#btn-menu')
const btnClose = document.querySelector('#btn-close')

const menu = document.querySelector('.menu')
const nav = document.querySelector('.navbar')

const btnItem = document.querySelectorAll('.menu .index')

btnMenu.addEventListener('click', () => {
  menu.classList.add('show')
  nav.classList.add('show')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('show')
  nav.classList.remove('show')
})

for (const button of btnItem) {
  button.addEventListener('click', () => {
    console.log(button)
    button.classList.toggle('on')
  })

  button.addEventListener('click', () => {
    button.classList.toggle('open')
  })
}

// scrollreval
const scrollReveal = ScrollReveal({
  reset: true,
  distance: '30px',
  origin: 'top',
  duration: 700
})

scrollReveal.reveal(
  `
#header .container .navbar,
#header .container .section,
#ilustration .container h2,
#ilustration .container img,
#ilustration .container .text-editor-container,
#phones .container img,
#phones .container .phones-text,
#laptop .container img,
#laptop .container .laptop-text,
#footer .container img,
#footer .container .footer-container,
.attribution

`,
  { delay: 100 }
)
