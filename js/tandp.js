const TOTAL_STUDENT_SLIDES = 5; // Matches the 5 students in your .dat file
var slideIndexStudent = 0; 
let studentNames = {}; 

async function loadStudentDataAndCreateSlides() {
    try {
        // Fetch the data file
        const response = await fetch('../placed/2026/placed26.dat');
        if (!response.ok) throw new Error("File not found");

        const data = await response.text();
        const lines = data.split('\n');
        
        lines.forEach(line => {
            const trimLine = line.trim();
            if (trimLine) {
                // Split by first space to get Roll No and Name[cite: 5, 7]
                const firstSpaceIndex = trimLine.indexOf(' ');
                if (firstSpaceIndex !== -1) {
                    const rollNo = trimLine.substring(0, firstSpaceIndex).trim();
                    const name = trimLine.substring(firstSpaceIndex + 1).trim();
                    studentNames[rollNo] = name;
                }
            }
        });

        createStudentSlides();
        setTimeout(autoShowSlidesStudent, 100); 
    } catch (error) {
        console.error("Error loading student data:", error);
        createStudentSlides(); // Fallback to show images only
    }
}

function createStudentSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return; 

    let slidesHTML = '';
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        const name = studentNames[i] || "Student"; 
        slidesHTML += `
            <div class="mySlides-student fade">
                <img src="placed/2026/${i}.jpg" alt="Placed Student ${i}" class="responsive-placed-img">
                <div class="dynamic-name-tag">
                    Congratulations <br> <strong>${name}</strong>
                </div>
            </div>
        `;
    }
    container.innerHTML = slidesHTML;
}

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
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndexStudent++;
    if (slideIndexStudent >= slides.length) { slideIndexStudent = 0; }
    slides[slideIndexStudent].style.display = "block";  
    setTimeout(autoShowSlidesStudent, 4000); 
}

document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);
