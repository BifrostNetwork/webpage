var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function () {
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.classList.contains('active-cont')) {
         this.classList.remove("active-nav");
         dropdownContent.classList.remove('active-cont');
      } else {
         this.classList.add("active-nav");
         dropdownContent.classList.add('active-cont');
      }
   });
}

const toggleIndice = ()  => {
   let nav = document.querySelector('.wikinav')
   nav.classList.toggle('hidden-nav')
   nav.classList.contains('')
}

if(window.innerWidth < 1024) {
   toggleIndice()
}