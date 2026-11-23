const nav=document.getElementById("nav"),menu=document.getElementById("menuToggle"),topBtn=document.getElementById("topBtn");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰"}));
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>500),{passive:true});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const target=document.querySelector(a.getAttribute("href"));if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})}}));
