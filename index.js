const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-x');
const menu = document.querySelector('.mobile-container');


bars.addEventListener('click', () => {
  menu.classList.toggle('show');
  bars.style.display = 'none';
  x.style.display = 'flex';
  
});

x.addEventListener('click', () => {
  menu.classList.toggle('show');
  x.style.display = 'none';
  bars.style.display = 'flex';
});



