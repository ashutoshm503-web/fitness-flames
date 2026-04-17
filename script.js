let navlinks = document.querySelector(".nav-item")
let sidebar = document.getElementById("icon")
sidebar.addEventListener("click", function(e){
    e.preventDefault();
    console.log("hhs")
    navlinks.classList.toggle("nav-active");
})