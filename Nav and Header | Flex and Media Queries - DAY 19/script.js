
// Navbar Functionality on Mobile

//Grab HTML elements 
let dropDown = document.querySelector('.dropdown_menu')
let navLinks = document.querySelector('.nav_links')
//console.log(dropDown.classList)


//Add Click Event Listener to dropDown

dropDown.addEventListener("click", ()=>{
 
 //Toggle class of 'toggle' on navLinks
 navLinks.classList.toggle('toggle')
 console.log(navLinks)
})



