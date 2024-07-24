var header = document.getElementById("header")
var listElements = document.querySelectorAll('.link');
var image = document.querySelector('#image')
var move = document.querySelector('.swiper-slider-child');
var label1 = document.querySelector('.arrow-left');
var  h4 = document.querySelector('#preview-h4')
var  p = document.querySelector('#preview-p');


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

var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0:{
          slidesPerView:1,
      },
      520:{
          slidesPerView:2,
      },
      950:{
          slidesPerView:3,
      },
  }
});

// there is one more way to create mepty object



function paragraph1() {
  h4.innerHTML = 'გაუმარტივე ცხოვრება შენს კლიენტებს'
  p.innerHTML = 'შეამცირე ბიუროკრატია, გააციფრულე რუტინული პროცესები და ჩახურე კონტრაქტები უფრო სწრაფად. შექმენი დაკონტრაქტების სასიამოვნო პროცესი შენი კლიენტებისთვის.'

}

function paragraph2() {
  console.log(h4);
  h4.innerHTML = 'გაამარტივე შესყიდვების პროცესი'
  p.innerHTML = 'ნუ დაკარგავ დროს ბეჭდვაში, დასკანერებასა და დოკუმენტების აქეთ-იქით გაგზავნაში. მართე მთლიანი პროცესი ციფრულად შეკვეთის გაფორმებიდან დაკონტრაქტებამდე.'
}

function paragraph3() {
  console.log(h4);
  h4.innerHTML = 'გააუმჯობესე თანამშრომლის დაკონტრაქტება'
  p.innerHTML = 'გააციფრულე HR პროცესები და გაამარტივე თანამშრომლების დოკუმენტების მართვა. ნუ დაკარგავ ძვირფას დროს ფურცლომანიაზე.'
}

function paragraph4() {
  console.log(h4);
  h4.innerHTML = 'მართე ფინანსური დოკუმენტები მარტივად'
  p.innerHTML = 'ნუღარ დახარჯავ ძვირფას დროს დოკუმენტების დევნაში. გააციფრულე პროცესები და დააკონტრაქტე სწრაფად, მარტივად, ყველა რეგულაციის დაცვით.'
}

function paragraph5() {
  console.log(h4);
  h4.innerHTML = 'გააქრე ფურცლები ფრონტ ოფისიდან'
  p.innerHTML = 'შეამცირე კლიენტის მომსახურების დრო, მექანიკური შეცდომები და დაზოგე ფურცლებზე ბეჭდვის ხარჯები. გამოცადე Signify PAD-ები და გააუმჯობესე მომხმარებელთა გამოცდილება.'
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
        headers: {
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
 