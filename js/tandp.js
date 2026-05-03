// 1. Configuration Constants
const TOTAL_STUDENT_SLIDES = 5; 
const DATA_FILE_PATH = "placed/2026/placed26.dat";
const IMAGE_FOLDER_PATH = "placed/2026/";

// 2. Global State
var slideIndexStudent = 0; 
let studentNames = {}; 
var studentTimer; 

// 3. Data Loading Function
function loadStudentDataAndCreateSlides() {
    const xhr = new XMLHttpRequest();
    // Cache-busting prevents the browser from showing old data[cite: 4]
    xhr.open("GET", DATA_FILE_PATH + "?v=" + Math.random(), true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // Check if file is found (status 200) or local access (status 0)
            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText.length > 0)) {
                parseStudentData(xhr.responseText);
            } else {
                console.error("Data file not found at: " + DATA_FILE_PATH);
                renderSlides(); // Fallback to images only
            }
        }
    };
    xhr.send();
}

// 4. Parsing Logic
function parseStudentData(data) {
    // Split by lines and remove empty entries
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== "");
    
    lines.forEach(line => {
        // Regex handles spaces or tabs between the number and name
        const match = line.match(/^\s*(\d+)\s+(.+)$/);
        if (match) {
            const rollNo = match[1];
            const name = match[2].trim();
            studentNames[rollNo] = name;
        }
    });
    renderSlides();
}

// 5. DOM Rendering
function renderSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return; 

    let slidesHTML = '';
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        // Use name from .dat file; if missing, use fallback[cite: 5, 7]
        const displayName = studentNames[i] || "Student " + i; 
        
        slidesHTML += `
            <div class="mySlides-student fade" style="display: none;">
                <img src="${IMAGE_FOLDER_PATH}${i}.jpg" alt="Student ${i}" 
                     class="responsive-placed-img" 
                     onerror="this.src='placeholder.jpg';">
                <div class="dynamic-name-tag">
                    Congratulations <br> <strong>${displayName}</strong>
                </div>
            </div>
        `;
    }
    container.innerHTML = slidesHTML;
    
    // Initialize the display after elements are created
    showSlidesStudent(0);
    startAutoCycle();
}

// 6. Navigation Controls
function plusSlidesStudent(n) {
    // Stop the auto-timer if the user clicks manually
    if (studentTimer) clearInterval(studentTimer);
    slideIndexStudent += n;
    showSlidesStudent(slideIndexStudent);
    startAutoCycle(); // Restart timer
}

function showSlidesStudent(n) {
    let slides = document.getElementsByClassName("mySlides-student");
    if (slides.length === 0) return;

    // Reset index if out of bounds
    if (n >= slides.length) slideIndexStudent = 0;
    if (n < 0) slideIndexStudent = slides.length - 1;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show current slide
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

// 8. Single Entry Point (Prevents double-loading)
document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);
