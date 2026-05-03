const TOTAL_STUDENT_SLIDES = 5; // Updated to match your .dat file count[cite: 5]
var slideIndexStudent = 0; 
let studentNames = {}; 

async function loadStudentDataAndCreateSlides() {
    try {
        // Fetch the file with a cache-buster
        const response = await fetch('../placed/2026/placed26.dat?v=' + Date.now());
        
        if (!response.ok) throw new Error("File not found");

        const data = await response.text();
        // Split by lines and filter out empty lines
        const lines = data.split(/\r?\n/).filter(line => line.trim() !== "");
        
        lines.forEach(line => {
            // Regex to match: [Number][Space][Name]
            // This captures the number and then everything after the first space
            const match = line.match(/^\s*(\d+)\s+(.+)$/);
            if (match) {
                const rollNo = match[1];
                const name = match[2].trim();
                studentNames[rollNo] = name;
            }
        });

        renderSlides();
    } catch (error) {
        console.error("Could not load names, using default labels:", error);
        renderSlides(); 
    }
}

function renderSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return; 

    let slidesHTML = '';
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        // If studentNames[i] exists, use it; otherwise, this is where "Student i" comes from[cite: 5]
        const displayName = studentNames[i] || "Student " + i; 
        
        slidesHTML += `
            <div class="mySlides-student fade">
                <img src="../placed/2026/${i}.jpg" alt="Student ${i}" class="responsive-placed-img">
                <div class="dynamic-name-tag">
                    Congratulations <br> <strong>${displayName}</strong>
                </div>
            </div>
        `;
    }
    container.innerHTML = slidesHTML;
    showSlidesStudent(0);
    startAutoSlide();
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

function startAutoSlide() {
    setInterval(() => {
        slideIndexStudent++;
        showSlidesStudent(slideIndexStudent);
    }, 4000);
}

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
