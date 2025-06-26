hamburger = document.querySelector('.hamburger')

const openHamMenu = () =>{
  hamburger.style.top = '16px';
}

const closeHamMenu = () =>{
  hamburger.style.top = '-384px';
}

const toggleMode = () => {
document.body.classList.toggle('dark')
}