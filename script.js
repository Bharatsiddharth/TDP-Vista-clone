function loco(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    }
    
    
    // loco();

function toggleMobileMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}


function cardUpDown(){
    
var card = document.querySelector(".card-1,.upper-card-1,.lower-card-1");

var topElement = document.querySelector(".upper-card-1");
var bottomElement = document.querySelector(".lower-card-1");

card.addEventListener("mouseenter", function() {
    topElement.style.transform = "translateY(-13vh)"; 
    bottomElement.style.transform = "translateY(13vh)";
    topElement.style.transition = "transform 0.5s ease";
    bottomElement.style.transition = "transform 0.5s ease";
});

card.addEventListener("mouseleave", function() {
    topElement.style.transform = "translateY(0px)";
    bottomElement.style.transform = "translateY(0px)";  
});





var card2 = document.querySelector(".card2,.upper-card2,.lower-card2");

var topElement2 = document.querySelector(".upper-card2");
var bottomElement2 = document.querySelector(".lower-card2");

card2.addEventListener("mouseenter", function() {
    topElement2.style.transform = "translateY(-13vh)"; 
    bottomElement2.style.transform = "translateY(13vh)";
    topElement2.style.transition = "transform 0.5s ease";
    bottomElement2.style.transition = "transform 0.5s ease";
});

card2.addEventListener("mouseleave", function() {
    topElement2.style.transform = "translateY(0px)";
    bottomElement2.style.transform = "translateY(0px)";  
});

var card3 = document.querySelector(".card3,.upper-card3,.lower-card3");

var topElement3 = document.querySelector(".upper-card3");
var bottomElement3 = document.querySelector(".lower-card3");

card3.addEventListener("mouseenter", function() {
    topElement3.style.transform = "translateY(-13vh)"; 
    bottomElement3.style.transform = "translateY(13vh)";
    topElement3.style.transition = "transform 0.5s ease";
    bottomElement3.style.transition = "transform 0.5s ease";
});

card3.addEventListener("mouseleave", function() {
    topElement3.style.transform = "translateY(0px)";
    bottomElement3.style.transform = "translateY(0px)";  
});
}

cardUpDown();




// var bottomElement = document.querySelector(".lower-card-1");

// bottomElement.addEventListener("mouseenter", function() {
//     bottomElement.style.transform = "translateY(15vh)"; 
//     bottomElement.style.transition = "transform 0.5s ease";
// });

// bottomElement.addEventListener("mouseleave", function() {
//     bottomElement.style.transform = "translateY(0px)"; 
// });
















//  <div class="content-page1">
                    
//                     <div class="left-page1 bg-red-800 relative">
//                         <img class="img1 ml-20 absolute h-[90vh] w-[90vh] max-w-[650px]:h-[70vh] max-w-[650px]:w-[60vh] max-w-[650px]:ml-0" src="https://studios.tdpvista.in/static/media/land-component.a363bdda.png" alt="">
//                         <img class="absolute z-10 m-20 max-[650px]:hidden" src="https://studios.tdpvista.in/static/media/logo.60785d8d.png" alt="">
//                     </div>
//                     <div class="right-page1 text-white absolute mt-[15vh] flex flex-col gap-4 right-[10.4vw] max-w-[650px]:right-[5vw]">
//                         <h1 class="bg-red-800 text-[8vh] text-end max-w-[650px]:text-[5vh]">
//                             <span class="span-h1">BE THE PART </span>OF
//                             <br> creative
//                             <br> <span class="span-h1">comm</span>unity
//                         </h1>
//                         <button class="button-6 ml-[22vw] border px-8 text-white py-2 rounded max-w-[650px]:ml-0" role="button">NOW</button>
//                         <h3 class="bg-red-800 text-[1.3vw] font-semibold text-end max-w-[650px]:text-[2.5vh]">and give a spark to your passion</h3>
//                     </div>
//                 </div> 