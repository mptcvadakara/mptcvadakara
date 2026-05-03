const TOTAL_STUDENT_SLIDES = 5; // Updated to match your .dat file count[cite: 5]
var slideIndexStudent = 0; 
let studentNames = {}; 

const TOTAL_STUDENT_SLIDES = 5; 
var slideIndexStudent = 0; 
let studentNames = {}; 

function loadStudentDataAndCreateSlides() {
    const xhr = new XMLHttpRequest();
    // Cache-busting query string to ensure fresh data[cite: 4]
    xhr.open("GET", "placed26.dat?v=" + Math.random(), true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText.length > 0)) {
                // Success: File found and readable
                parseStudentData(xhr.responseText);
            } else {
                console.error("File access denied or not found. Status:", xhr.status);
                // If file fails, we still render images with fallback labels
                renderSlides();
            }
        }
    };
    xhr.send();
}

function parseStudentData(data) {
    const lines = data.split(/\r?\n/);
    lines.forEach(line => {
        const trimLine = line.trim();
        if (trimLine) {
            // Split by the first whitespace
            const parts = trimLine.split(/[\s\t]+/);
            if (parts.length >= 2) {
                const rollNo = parts[0];
                const name = parts.slice(1).join(" ");
                studentNames[rollNo] = name;
            }
        }
    });
    renderSlides();
}

function renderSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return; 

    let slidesHTML = '';
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        // Use the name from the file, or fallback if roll number doesn't match[cite: 5, 7]
        const displayName = studentNames[i] || "Student " + i; 
        
        slidesHTML += `
            <div class="mySlides-student fade">
                <img src="${i}.jpg" alt="Student ${i}" class="responsive-placed-img" 
                     onerror="this.src='placeholder.jpg';">
                <div class="dynamic-name-tag">
                    Congratulations <br> <strong>${displayName}</strong>
                </div>
            </div>
        `;
    }
    container.innerHTML = slidesHTML;
    startShow();
}

function startShow() {
    showSlidesStudent(0);
    // Use a named interval so it doesn't double up on refresh
    if (window.studentInterval) clearInterval(window.studentInterval);
    window.studentInterval = setInterval(() => {
        slideIndexStudent++;
        showSlidesStudent(slideIndexStudent);
    }, 4000);
}

function showSlidesStudent(n) {
    let slides = document.getElementsByClassName("mySlides-student");
    if (slides.length === 0) return;
    if (n >= slides.length) slideIndexStudent = 0;
    if (n < 0) slideIndexStudent = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexStudent].style.display = "block";
}

// Initialize on load
window.onload = loadStudentDataAndCreateSlides;

document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);

function plusSlidesStudent(n) {
    slideIndexStudent += n;
    showSlidesStudent(slideIndexStudent);
}

function showSlidesStudent(n) {
    var slides = document.getElementsByClassName("mySlides-student");
    if (slides.length === 0) return;

    if (n >= slides.length) { slideIndexStudent = 0; }
    if (n < 0) { slideIndexStudent = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexStudent].style.display = "block";
}

function autoShowSlidesStudent() {
    var slides = document.getElementsByClassName("mySlides-student");
    if (slides.length === 0) return;

    slideIndexStudent++;
    showSlidesStudent(slideIndexStudent);
    
    setTimeout(autoShowSlidesStudent, 4000);
}

// Ensure the function runs on page load
document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);
