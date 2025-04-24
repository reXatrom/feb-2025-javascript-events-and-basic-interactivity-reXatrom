// Button click
// document.getElementById("magicbtn").addEventListener("click", () => {
//     const message = document.getElementById("btnMessage");
//     message.textContent = "✨ You clicked the magic button!";
//     message.style.color = "purple";
// });

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("magicBtn").addEventListener("click", () => {
        const message = document.getElementById("btnMessage");
        message.textContent = "✨ You clicked the magic button!";
        message.style.color = "purple";
        console.log("Button clicked!");
    });
});  



// Double-click secret
document.getElementById("magicBtn").addEventListener("dbclick", () => {
    alert("You found the secret double-click!");
});



// Hover
document.getElementById("magicBtn").addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#e0f7fa";
});

document.getElementById("magicBtn").addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#f5f5f5";
});



// Keypress
document.addEventListener("keypress", (e) => {
    console.log('You pressed: ${e.key}');
});



// Image Gallery
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg"];
let currentImage = 0;
document.getElementById("nextImage").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImage];
});



// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
        document.getElementById(tab.dataset.tab).style.display = "block";
    });
});



// Form Validation
document.addEventListener("DOMContentLoaded", () => {
    // all your event listeners and DOM stuff here
    document.getElementById("sampleForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const feedback = document.getElementById("formFeedBack");
    
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = "Invalid email format!";
            feedback.style.color = "red";
            return;
        }
    
        if (password.length < 8) {
            feedback.textContent = "Password must be at least 8 characters.";
            feedback.style.color = "red";
            return;
        }
    
        feedback.textContent = "Form submitted successfully! 🎉";
        feedback.style.color = "green";
    });
});
  

document.getElementById("sampleForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedBack");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = "Invalid email format!";
        feedback.style.color = "red";
        return;
    }

    if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters.";
        feedback.style.color = "red";
    }

    feedback.textContent = "Form submitted successfully! 🎉";
    feedback.style.color = "green";
});