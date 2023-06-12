document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  
    var sidenavInstance = M.Sidenav.getInstance(sidenav[0]);
    var links = document.querySelectorAll('.sidenav a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        sidenavInstance.close();
        var target = this.getAttribute('href');
        var page = document.querySelector(target);
        var pages = document.querySelectorAll('.page');
        for (var j = 0; j < pages.length; j++) {
          pages[j].style.display = 'none';
        }
        page.style.display = 'block';
      });
    }
  });
  
  
  
  
  
  
  