let navlinks = document.querySelector(".nav-item")
let sidebar = document.getElementById("icon")
let items = document.querySelectorAll(".nav-item a")
sidebar.addEventListener("click", function(e){
    e.preventDefault();
    navlinks.classList.toggle("nav-active");
})
 items.forEach(function(item){
    item.addEventListener("click",()=>{
        navlinks.classList.remove("nav-active");
    })
 })
 window.addEventListener("click", (e)=>{
    if(!navlinks.contains(e.target)&& !sidebar.contains(e.target)){
        navlinks.classList.remove("nav-active")
    }

 })

