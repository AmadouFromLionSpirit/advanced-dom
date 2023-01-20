'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */
  //Another way to write the method on the top
  btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));
  


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting elements 
  //Selecting the entire document of any webpage
  console.log(document.documentElement);
  //Let's select the head and the body
  console.log(document.head);
  console.log(document.body);

  const header = document.querySelector('.header');
  const allSections = document.querySelectorAll('.section');
  console.log(allSections);

  document.getElementById('section--1');
  const allButtons = document.getElementsByTagName('button');
  console.log(allButtons);

  console.log(document.getElementsByClassName('btn'));

  //Creating and inserting elements 
  //.insertAdjacentHTML to create movement
  const message = document.createElement('div');
  message.classList.add('cookie-message');
  message.textContent = 'We use cookies for improved functionality and analytics';
  //We can insert HTML
  message.innerHTML = 'We use cookies for improves functionnality and analytics.<button class = "btn btn--close-cookie">Got it! </button>';
  //Now all we have to do is insert it into our header
  // header.prepend(message);
  //We can add it as last child of our element (node) with append
 // header.append(message);
 //What if we want to make some copies and print the cookie message in different places
 //header.append(message.cloneNode(true));

 //let's just apped the message
 header.append(message);

 //2 other methods
/*  header.before(message);
 header.after(message);
 */

 //Delete elements
 document.querySelector('.btn--close-cookie').addEventListener('click',function() {
  message.remove();
  //old way to remove the child element
 // message.parentElement.removeChild(message);
 });

 //Styles 
 message.style.backgroundColor = '#37383d';
 message.style.width = '120%';   

 console.log(message.style.color);
 console.log(message.style.backgroundColor);

 //if we really want to print a property that is not in the script file
 //console.log(getComputedStyle(message).color);
//For example, we want to know the height of our div
console.log(getComputedStyle(message).height);

//Let's increase the height of the message banner by 40 px
message.style.height = Number.parseFloat
(getComputedStyle(message).height, 10) + 30 + 'px';

//CSS custom properties or variables by passing the name of the property and the value after using setProperty() method
 //I will seclect the root element, and in css JS it will be the document
 document.documentElement.style.setProperty('--color-primary','orangered');

 //Attributes (attributes of elements, for example, src, alt, class, id etc)
 const logo = document.querySelector('.nav__logo');
 console.log(logo.alt);
 console.log(logo.src);
 console.log(logo.className);

 //Let's set the attribute 
 logo.alt = 'Beautiful minimalist logo';

 //Non standard attribute thhat we have created
 console.log(logo.designer); //This one will not work, because not a standard property
 console.log(logo.getAttribute('designer'));
 logo.setAttribute('company','Bankist');

 //get the relative attribute of src
 console.log(logo.src);
  //the correct is thhe statement below
 console.log(logo.getAttribute('src'));

 const link = document.querySelector('.nav__link--btn');
 console.log(link.href);
 console.log(link.getAttribute('href'));

 //Data attributes, data attributes are special kind of data thta start with the word data
console.log(logo.dataset.versionNumber);
console.log(logo.getAttribute('data-version-number'));

//Classes , we can add multiple classes, by passing in multiple values
logo.classList.add('c','j');
logo.classList.remove('c','j');
logo.classList.toggle('c');   
logo.classList.contains('c');
// wa can set a class, but don't use this, it will override all the existing classes//
logo.className = 'jonas';

//We want to implement the smooth scrolling

//1) we declare our variables
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//Let's add tehe event listener and implement the function
btnScrollTo.addEventListener('click', function(e) {
  
})


