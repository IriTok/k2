  const hamburger = document.querySelector('.menu_hamburger');

  if (hamburger) {
    hamburger.addEventListener('click', function(event){
      event.target.closest('.menu').classList.toggle('menu_active');
    });
  }






  const btn = document.querySelector('.page-blog-dropdown-btn');
  const menu = document.querySelector('.page-blog-dropdown');
  const fon = document.querySelector('.page-blog-dropdown-fon-btn');

  btn.addEventListener('click', () => {
    menu.classList.toggle('show');
    fon.classList.toggle('show');
  })