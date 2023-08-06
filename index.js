const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-x');
const menu = document.querySelector('.mobile-container');
const btns = document.querySelectorAll('.btns');
bars.style.display = 'none';



function toggleBtn() {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        menu.classList.toggle('show');
        switch (btn) {
          case bars:
            removeBars();
            break;
          case x:
            removeX();
            break;
          default:
            console.log('end');
        }

      })
    })
    removeX();

  }

  function removeBars() {
    bars.style.display = 'none';
    x.style.display = 'flex';
  }

  
  function removeX() {
    x.style.display = 'none';
    bars.style.display = 'flex';
  }
  
toggleBtn();





