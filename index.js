let hamburger = document.querySelector("#hamburger");
let navLinks = document.querySelector(".nav-links");
console.log(navLinks.classList)
const toggle =()=> {
    navLinks.classList.toggle("active");
}
hamburger.addEventListener("click", toggle);