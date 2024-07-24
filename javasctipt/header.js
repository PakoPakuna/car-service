var header = document.getElementById("header")

window.onscroll = function() {
  navscroll()
}

var sticky = header.offsetTop

function navscroll(){
  if(window.pageYOffset > sticky){
    header.classList.add('sticky')
  }
    else { (header.classList.remove('sticky'))
  }
}

console.log(sticky);
