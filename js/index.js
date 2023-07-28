const pass = document.querySelector('#pass')
const see = document.querySelector('.icon-see')
const noSee = document.querySelector('.icon-nosee')
const inp = document.querySelector('#pass input')

see.addEventListener('click', () => {
    pass.classList.add('see')
    inp.type = 'text'
})

noSee.addEventListener('click', () => {
    pass.classList.remove('see')
    inp.type = 'password'
})