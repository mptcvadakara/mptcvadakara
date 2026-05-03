// 1. Configuration Constants
const TOTAL_STUDENT_SLIDES = 5; 
const DATA_FILE_PATH = "../placed/2026/placed26.dat";
const IMAGE_FOLDER_PATH = "placed/2026/";

// 2. Global State
var slideIndexStudent = 0; 
let studentNames = {}; 
var studentTimer; 

// 3. Data Loading Function
function loadStudentDataAndCreateSlides() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", DATA_FILE_PATH + "?v=" + Math.random(), true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText.length > 0)) {
                parseStudentData(xhr.responseText);
            } else {
                console.error("Data file not found at: " + DATA_FILE_PATH);
                renderSlides();
            }
        }
    };
    xhr.send();
}

// 4. Parsing Logic
function parseStudentData(data) {
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== "");
    
    studentNames = {}; // reset

    lines.forEach(line => {
        // Handles: 1 NAME, multiple spaces, tabs
        const parts = line.trim().split(/\s+/);
        const rollNo = parts.shift(); // first item
        const name = parts.join(" "); // rest is name

        if (rollNo && name) {
            studentNames[rollNo] = name;
        }
    });
console.log(studentNames);
    renderSlides();
}

// 5. DOM Rendering
function renderSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return; 

    let slidesHTML = '';

    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        const displayName = studentNames[i] || ("Student " + i);

        slidesHTML += `
            <div class="mySlides-student fade" style="display: none;">
                <img src="${IMAGE_FOLDER_PATH}${i}.jpg" 
                     alt="Student ${i}" 
                     class="responsive-placed-img" 
                     onerror="this.src='placeholder.jpg';">
                <div class="dynamic-name-tag">
                    Congratulations <br> <strong>${displayName}</strong>
                </div>
            </div>
        `;
    }

    container.innerHTML = slidesHTML;
    
    showSlidesStudent(0);
    startAutoCycle();
}

// 6. Navigation Controls
function plusSlidesStudent(n) {
    if (studentTimer) clearInterval(studentTimer);
    slideIndexStudent += n;
    showSlidesStudent(slideIndexStudent);
    startAutoCycle();
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

// 7. Automation
function startAutoCycle() {
    if (studentTimer) clearInterval(studentTimer);
    studentTimer = setInterval(() => {
        slideIndexStudent++;
        showSlidesStudent(slideIndexStudent);
    }, 4000);
}

// 8. Entry Point
document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);
