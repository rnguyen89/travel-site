console.log("hi from index");const navMenu=document.getElementById("menu"),navMenuLinks=document.querySelector(".navMobileLinks");navMenu.addEventListener("click",function(){console.log("menu clicked"),navMenuLinks.classList.toggle("hide"),element.classList.toggle("mystyle")});let hiddenTags=document.querySelectorAll(".hidden");const observer=new IntersectionObserver(e=>{e.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})});hiddenTags.forEach(e=>observer.observe(e));