const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-x');
const menu = document.querySelector('.mobile-container');


bars.addEventListener('click', () => {
  menu.classList.toggle('show');
  x.style.display = 'flex';
  bars.style.display = 'none';
  
});

x.addEventListener('click', () => {
  menu.classList.toggle('show');
  x.style.display = 'none';
  bars.style.display = 'flex';
});



