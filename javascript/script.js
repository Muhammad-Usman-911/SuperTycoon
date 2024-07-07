/*fixed-nav-bar_Start*/


window.onscroll = () => {

  
  if(window.scrollY > 20){
    document.querySelector('.nav-bar').classList.add('active')
  }else{
    document.querySelector('.nav-bar').classList.remove('active')
  }

}

/*fixed-nav-bar_end*/


/*DropDown_Start*/


window.addEventListener('mouseup', e => {

  const box = document.getElementById('dropd')

  if(e.target != box && e.target.parentNode != box ){
    document.querySelector('.dropdown').classList.remove('active')    
  }
  else{
   document.querySelector('.dropdown').classList.toggle('active')    
  }

})


/*DropDown_End*/

/*Slider-1_Start */

var slider=document.getElementById("sld_m")
var sl_item= document.getElementsByClassName("slider-item")
function next()
{
  
  slider.append(sl_item[0])
  
}

function prev(){
  slider.prepend(sl_item[sl_item.length -1])
}


/* Contact us - start  */

let contact = document.querySelector('.contactus')

function Contactus(){
  if(contact.style.display === 'none')
  {
  contact.style.display = 'block'
  }
  else
  contact.style.display = 'none'
   
  return false;
}

function crossbox()
{
    contact.style.display = 'none'
    return false
}


/* Contact us - end */


/* Validation - Start */ 
let mailpattren= /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/
let er1=document.querySelector("#e1");
let er2=document.querySelector("#e2");

let check_m_validate
let check_n_validate

let tbox=document.querySelector('.v-box');


function validmail(){


if(document.querySelector('#mail').value.match(mailpattren))
{

 document.querySelector('.invalid').style.display="none"
 er2.innerHTML=" <strong>Valid</strong> "
 er2.style.color="#0fe90fad" 
 document.querySelector('.valid').style.display="block"
 console.log('valid')
  return true 
}

else if(document.querySelector('#mail').value=="")
  {
    er2.innerHTML=" <storng> Please insert email </storng>"
    er2.style.color="red"
    return false
    
  }


else
{
 document.querySelector('.valid').style.display="none"
 er2.innerHTML="<strong> Invalid ! </strong>"
 er2.style.color="#ff0000cc" 
 document.querySelector('.invalid').style.display="block"
 return false
 
 console.log('invalid')
}


}


function validate()
{
  if(document.querySelector('#name').value=="")
  {
    er1.innerHTML="<strong> Please insert name </strong>"
    er1.style.color="#ff0000cc"
    check_n_validate=false
  }
  else
  {
     er1.innerHTML="<strong> Valid </strong>"
     er1.style.color="#0fe90fad"
     check_n_validate=true
  }
 
  if(document.querySelector('#mail').value=="")
  {
    er2.innerHTML="<strong> Please insert email </strong>"
    er2.style.color="#ff0000cc"
    check_m_validate=false
  }
  else
  {
    check_m_validate=validmail()
  }

}

function thankyou()
{

  if(check_m_validate==true && check_n_validate==true)
  { tbox.style.display = 'block'
  }
  else
   tbox.style.display = 'none' 
}

function ratethankyou(){
  console.log("helo")
  document.querySelector('.v-box').style.display = 'block'
}

function removevbox(){
 tbox.style.display  = 'none'
}
  
function sendEmail(){

  let n_c = document.getElementById('name').value
  let em_c = document.getElementById('mail').value
  let feedback = document.getElementById('message').value
  var body='name : '+n_c+'<br/> email: '+email+'<br/> feedback : '+feedback

  Email.send({
    Host : "smtp.gmail.com",
    Username : "usman03025@gmail.com",
    Password : "ekffwukfgcvkjybt",
    To : 'usman03025@gmail.com',
    From : em_c,
    Subject : "Feedback",
    Body : body
}).then(
 message => alert("receieved")
)  
}

/* Validation - End */ 



/* Swipper Start */
 var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 35,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

 /*  Swipper End
 */

 /*
   rate box start
 */

function addratebox()
{
  document.querySelector('.ratebox').style.display="block";
}

function removeratebox(){
  document.querySelector('.ratebox').style.display="none"; 
}




var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});



var swiper = new Swiper(".review", {
  effect: "cards",
        grabCursor: true
 });


var swiper = new Swiper(".nextbook", {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        loopFillGroupWithBlank: true,
         autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
 
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


let themetoggler = document.querySelector('.toggler')
themetoggler.onclick = () => {
  document.body.classList.toggle('active')
  return
}


function clearcart(){
  document.querySelector('.cartshow').style.display="none"
}
function showcart(){
  document.querySelector('.cartshow').style.display="block"
}



/* 
  Cart
*/

let b_p1 = document.getElementById("f1").value

let b_p2 = document.getElementById('f-2').value
let b_p3 = document.getElementById('f-3').value
let b_p4 = document.getElementById('f-4').value
let b_p5 = document.getElementById('f-5').value
let b_p6 = document.getElementById('f-6').value
let b_p7 = document.getElementById('f-7').value
let b_p8 = document.getElementById('f-8').value




let t_p1 = document.getElementById('t-1')
let t_p2 = document.getElementById('t-2')
let t_p3 = document.getElementById('t-3')
let t_p4 = document.getElementById('t-4')
let t_p5 = document.getElementById('t-5')
let t_p6 = document.getElementById('t-6')
let t_p7 = document.getElementById('t-7')
let t_p8 = document.getElementById('t-8')

let t
let total=document.getElementById('G-t')

function calculate ( check){
  if(check==1)
  {
  console.log(b_p1.value + " hello ") 
   t_p1.value= b_p1 * 15.99 
  }
  if(check==2)
   { 
   t= b_p2 * 15.99 
   t_p2.value=t
   }
  if(check==3)
  {
   t= b_p3 * 15.99 
   t_p3.value=t
  }
  if(check==4)
   {
   t= b_p4 * 15.99 
   t_p4.value=t
  }
  if(check==5)
  {
   t= b_p5 * 15.99 
   t_p5.value=t
  }
  if(check==6)
  {
   t= b_p6 * 15.99 
   t_p6.value=t
  }
  if(check==7)
  {
   t= b_p7 * 15.99 
   t_p7.value=t
  }
  if(check==8)
  {
   t= b_p8 * 15.99 
   t_p8.value=t
  }
}