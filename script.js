// ========================================
// LOADING SCREEN
// ========================================

window.addEventListener("load", function () {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        document.getElementById("loader").style.visibility = "hidden";

    }, 1500);

});

// ========================================
// BACK TO TOP BUTTON
// ========================================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ========================================
// COUNTER ANIMATION
// ========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 120;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});

// ========================================
// SCROLL REVEAL
// ========================================

const reveals = document.querySelectorAll(".card, .stat, .gallery-grid img, .planet-card");

window.addEventListener("scroll", reveal);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = "1s";

});

// ========================================
// CONTACT FORM VALIDATION
// ========================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("🚀 Message Sent Successfully!");

            form.reset();

        }

    });

}

// ========================================
// HERO PARALLAX EFFECT
// ========================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";

    }

});

// ========================================
// RANDOM STAR BACKGROUND
// ========================================

for (let i = 0; i < 100; i++) {

    let star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(star);

}

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});

// ========================================
// ACTIVE NAV LINK
// ========================================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});

// ========================================
// SMOOTH FADE FOR PAGE
// ========================================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 1s";

    document.body.style.opacity = "1";

});

// ========================================
// IMAGE HOVER ZOOM
// ========================================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log("%c🚀 Welcome to Explore The Universe",
"color:#6ecbff;font-size:22px;font-weight:bold;");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:white;font-size:16px;");