function navOpen(){
    let hamburger = document.querySelector('#hamburger');
    let nav = document.querySelector('#nav');
    let body = document.querySelector('#body');
    hamburger.onclick=function(){
      hamburger.classList.toggle('hamburger_active');
      nav.classList.toggle('nav__links_active');
      body.classList.toggle('scroll_hidden');
    }
    let navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(function(navLink){
      navLink.onclick = function(){
        hamburger.classList.remove('hamburger_active');
        nav.classList.remove('nav__links_active');
        body.classList.remove('scroll_hidden');
      }
    })
  }
  navOpen();
  