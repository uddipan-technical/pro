window.addEventListener('scroll', function(){
  document.querySelector('body').classList[
      (window.pageYOffset > 50 ? 'add' : 'remove')]('scroll');
});
