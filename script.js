hamburger = document.querySelector('.hamburger');

const openHamMenu = () =>{
  hamburger.style.top = '16px';
}

const closeHamMenu = () =>{
  hamburger.style.top = '-384px';
}

const toggleBtn = document.querySelector('.toggle-btn');
let dark = localStorage.getItem('dark');

  const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('dark', 'active');
  }
  
const disableDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('dark', null);
  }

  toggleBtn.addEventListener('click', () =>{
    dark = localStorage.getItem('dark');
    dark !== 'active' ? enableDarkMode() : disableDarkMode();
  });
  
dark === 'active' ? enableDarkMode() : disableDarkMode();