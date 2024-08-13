var navbar = document.getElementById("navbar")
var listElements = document.querySelectorAll('.link');
var image = document.querySelector('#image')
var move = document.querySelector('.swiper-slider-child');
var label1 = document.querySelector('.arrow-left');
var  h4 = document.querySelector('#preview__h4');
var  p = document.querySelector('#preview__p');


window.onscroll = function() {
  navscroll()
}

var sticky = navbar.offsetTop

function navscroll(){
  if(window.pageYOffset > sticky){
    navbar.classList.add('sticky')
    console.log('qe');
    
    
  }
    else { (navbar.classList.remove('sticky'))
      console.log('qwd');
      
  }
}


//wqdsqdqsd//

function sendPostRequest() {

    const userMail = document.getElementById('mail').value;
 
    const data = new URLSearchParams();
    data.append('userMail', userMail);
 
    console.log(data);
 
    fetch('http://127.0.0.1:5000/mail', {
        method: 'POST',
        body: data,
        navbars: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            // location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
        });
}
 
///qdsdq


const translations = {
  "ge": "ge.json",
  "en": "en.json"
};

function loadTranslations(language) {
  fetch(translations[language])
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll('[data-translate]').forEach(element => {
              const key = element.getAttribute('data-translate');
              element.textContent = data[key] || key;
          });
      });
}

document.getElementById('languageSwitcher').addEventListener('change', (event) => {
  loadTranslations(event.target.value);
});

loadTranslations('ge');