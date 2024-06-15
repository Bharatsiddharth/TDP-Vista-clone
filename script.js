

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
    // topElement.style.backgroundColor = "#d2ab54";
    topElement.style.backgroundImage = "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    topElement.style.backgroundPosition = "center"
    topElement.style.backgroundSize = "contain"
    topElement.style.color = "black"
    bottomElement.style.transform = "translateY(13vh)";
    topElement.style.transition = "transform 0.5s ease";
    bottomElement.style.transition = "transform 0.5s ease";
});

card.addEventListener("mouseleave", function() {
    topElement.style.transform = "translateY(0px)";
    // topElement.style.backgroundColor = "";
   
    bottomElement.style.transform = "translateY(0px)";
    topElement.style.backgroundImage = "url(')" 
    topElement.style.color = "white" 
});





var card2 = document.querySelector(".card2,.upper-card2,.lower-card2");

var topElement2 = document.querySelector(".upper-card2");
var bottomElement2 = document.querySelector(".lower-card2");

card2.addEventListener("mouseenter", function() {
    topElement2.style.transform = "translateY(-13vh)"; 
    // topElement2.style.backgroundColor = "#d2ab54";
    topElement2.style.backgroundImage = "url('https://images.unsplash.com/photo-1614332243412-00e687d0c898?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    topElement2.style.color = "black"
    topElement2.style.backgroundPosition = "center"
    topElement2.style.backgroundSize = "contain"
    bottomElement2.style.transform = "translateY(13vh)";
    topElement2.style.transition = "transform 0.5s ease";
    bottomElement2.style.transition = "transform 0.5s ease";
});

card2.addEventListener("mouseleave", function() {
    topElement2.style.transform = "translateY(0px)";
    bottomElement2.style.transform = "translateY(0px)"; 
    topElement2.style.backgroundColor = ""; 
    topElement2.style.backgroundImage = "url(')"
    topElement2.style.color = "white"
 
});

var card3 = document.querySelector(".card3,.upper-card3,.lower-card3");

var topElement3 = document.querySelector(".upper-card3");
var bottomElement3 = document.querySelector(".lower-card3");

card3.addEventListener("mouseenter", function() {
    topElement3.style.transform = "translateY(-13vh)"; 
    // topElement3.style.backgroundColor = "#d2ab54";
    topElement3.style.backgroundImage = "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    topElement3.style.backgroundPosition = "center"
    topElement3.style.backgroundSize = "contain"
    topElement3.style.color = "black"
    bottomElement3.style.transform = "translateY(13vh)";
    topElement3.style.transition = "transform 0.5s ease";
    bottomElement3.style.transition = "transform 0.5s ease";
});

card3.addEventListener("mouseleave", function() {
    topElement3.style.transform = "translateY(0px)";
    bottomElement3.style.transform = "translateY(0px)";  
    // topElement3.style.backgroundColor = "";
    topElement3.style.backgroundImage = "url(')"
    topElement3.style.color = "white"
});
}

cardUpDown();


var cardsPage3 = [
  {logo:"data:image/png;base64,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", heading:"Connect", para:"Connect with people with same passion, just in one click"},
  {logo:"data:image/png;base64,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", heading:"Communicate", para:"Communicate with friends and people with same interest"},
  {logo:"data:image/png;base64,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", heading:"Colloborate", para:"Collaborate with team and individuals and have the partner you are looking for"},
  {logo:"data:image/png;base64,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", heading:"Share", para:"Share your talent and work with world and create your online presence"},
  {logo:"data:image/png;base64,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", heading:"Be Connected", para:"Be connected with the art and community right at one place"},
  {logo:"data:image/png;base64,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", heading:"View", para:"View what's trending right in your field"},
  {logo:"data:image/png;base64,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", heading:"Review", para:"Watch and review others from your field"},
  {logo:"data:image/png;base64,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", heading:"Watch", para:"Watch what others are doing from your field and stay tuned with the trend"},
];


function blogs(){
  var clutter = '';

  cardsPage3.forEach(function(product,idx){
  clutter += `<div class="card1-page4 py-8 mt-12 rounded-xl  w-[20rem] flex flex-col items-center gap-1 font-serif text-[1vw] bg-[#121420] p-8 font-thin text-center">
                    <img src="${product.logo}" alt="">
                    <h2 class="text-[1.2rem] text-[#c9a544]">${product.heading}</h2>
                    <h4 class="text-white text-[1rem]">${product.para}</h4>

                    </div>`;

})

{/* <div class="container mx-auto px-4">
        <div class="card1-page3 py-4 mt-6 rounded-xl w-full sm:w-[40vw] md:w-[25vw] lg:w-[15vw] flex flex-col items-center gap-2 font-serif text-sm bg-[#121420] p-4 font-thin text-center">
            <img src="${product.logo}" alt="" class="w-full h-auto mb-2">
            <h2 class="text-base text-[#c9a544]">${product.heading}</h2>
            <h4 class="text-white">${product.para}</h4>
        </div>
    </div> */}

document.querySelector(".cards-page3").innerHTML = clutter;
}

blogs()


//page 1 animation

let tl = gsap.timeline();

tl.from(".nav-img", {
  y: -100,
  duration: 1, // Increased duration for more drama
  opacity: 0,
  stagger: 0.3,
  ease: "power2.inOut" // Changed easing for a different effect
});

tl.from(".nav-elem a", {
  x: 100,
  duration: 1, // Increased duration for more drama
  opacity: 0,
  stagger: 0.3,
  ease: "power2.inOut" // Changed easing for a different effect
});

// let tl = gsap.timeline();

tl.from(".img2-page1", {
    y: -100,
  scale: 0.8, // Slightly less dramatic scale effect
  duration: 0.6, // Shorter duration for simplicity
  opacity: 0,
  stagger: 0.2, // Faster stagger for a quicker sequence
  ease: "power1.out" // Smooth easing without the bounce
});

tl.from(".right-page1", {
  y: -100, // Less dramatic movement
  scale: 0.8, // Slightly less dramatic scale effect
  duration: 0.6, // Shorter duration for simplicity
  opacity: 0,
  stagger: 0.2, // Faster stagger for a quicker sequence
  ease: "power1.out" // Smooth easing without the bounce
});



// ScrollTrigger for triggering animations on scroll
gsap.registerPlugin(ScrollTrigger);

// Animation for .btn1
gsap.from(".btn1", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".btn1",
        start: "top 80%", // Trigger animation when top of the trigger element is 80% in view
        end: "bottom 20%", // End animation when bottom of the trigger element is 20% in view
        toggleActions: "play none none reverse", // Play animation when scrolling down, reverse when scrolling up
        // markers: true // Add markers for visualization
    }
});

// Animation for .page2 h1 span
gsap.from(".page2 h1 span", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page2 h1",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});




//page 3 animation



// Animation for .page2 h1 span
gsap.from(".page3 .heading-page3", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page3 .heading-page3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});



gsap.from(".page3 .card-1,.card2,.card3", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page3 .card-1,.card2,.card3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});




gsap.from(".page4 .heading-page4", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page4 .heading-page4",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});


gsap.from(".page4 .card1-page4", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page4 .card1-page4",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});




