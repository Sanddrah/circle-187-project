const openToggle = document.getElementById("toggleOpen");
const closeToggle = document.getElementById("toggleClose");
const sidebar = document.getElementById("mySidebar");

openToggle.addEventListener("click", ()=>{
    sidebar.style.width = "200px";
})

closeToggle.addEventListener("click",()=>{
    sidebar.style.width ="0px"
})