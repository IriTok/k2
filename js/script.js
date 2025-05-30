  const hamburger = document.querySelector('.menu_hamburger');

  if (hamburger) {
    hamburger.addEventListener('click', function(event){
      event.target.closest('.menu').classList.toggle('menu_active');
    });
  }