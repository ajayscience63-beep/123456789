// ===============================
// AUTO IMAGE SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
} 

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);


// ===============================
// ANIMATED STATISTICS COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ===============================
// CART COUNT ANIMATION
// ===============================

let cartCount = document.getElementById("cart-count");

cartCount.style.transition = "0.3s";

setInterval(() => {

    cartCount.style.transform = "scale(1.3)";

    setTimeout(() => {

        cartCount.style.transform = "scale(1)";

    }, 200);

}, 2000);


// ===============================
// NEWSLETTER VALIDATION
// ===============================

const form = document.querySelector(".newsletter-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = form.querySelector("input").value.trim();

        const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(pattern.test(email)){

            alert("Subscribed Successfully!");

            form.reset();

        }else{

            alert("Please enter a valid email address.");

        }

    });

}
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        this.innerHTML = "☀️ Light Mode";
    } else {
        this.innerHTML = "🌙 Dark Mode";
    }
});

// Project Enquiry Form

function submitEnquiry() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let project = document.getElementById("project").value;
    let message = document.getElementById("message").value;

    if(name==="" || email==="" || project===""){
        alert("Please fill all required fields.");
        return;
    }

    alert("Project Enquiry Submitted Successfully!");

    document.getElementById("enquiryForm").reset();

}
// ===============================
// LOGIN PAGE
// ===============================

function welcomeUser() {
    alert("Welcome to CyberSentinels Login Page");
}

function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email and Password.");
        return;
    }

    alert("Login Successful!");

    window.location.href = "index.html";
}
// Open Admin Login Page
function openAdmin() {
    window.location.href = "admin.html";
}