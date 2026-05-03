const TOTAL_STUDENT_SLIDES = 5; // Updated to match your .dat file count[cite: 5]
var slideIndexStudent = 0; 
let studentNames = {}; 

async function loadStudentDataAndCreateSlides() {
    try {
        // Adding a timestamp (?t=...) ensures the browser fetches the latest file[cite: 4]
        const response = await fetch('../placed/2026/placed26.dat?t=' + new Date().getTime());
        
        if (!response.ok) {
            throw new Error("Could not find placed26.dat");
        }

        const data = await response.text();
        const lines = data.split('\n');
        
        lines.forEach(line => {
            const trimLine = line.trim();
            if (trimLine) {
                // Split by the first space to separate Roll No (1, 2, 3...) from Name[cite: 5]
                const firstSpaceIndex = trimLine.indexOf(' ');
                if (firstSpaceIndex !== -1) {
                    const rollNo = trimLine.substring(0, firstSpaceIndex).trim();
                    const name = trimLine.substring(firstSpaceIndex + 1).trim();
                    studentNames[rollNo] = name;
                }
            }
        });

        // Only create slides AFTER data is loaded
        createStudentSlides();
        
        // Start the rotation
        showSlidesStudent(0); 
        setTimeout(autoShowSlidesStudent, 4000); 

    } catch (error) {
        console.error("Data Load Error:", error);
        // Fallback: load images even if names fail
        createStudentSlides();
        showSlidesStudent(0);
        setTimeout(autoShowSlidesStudent, 4000);
    }
}

function createStudentSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return; 

    let slidesHTML = '';
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        const name = studentNames[i] || "Student " + i; 
        slidesHTML += `
            <div class="mySlides-student fade">
                <img src="../placed/2026/${i}.jpg" alt="Student ${i}" class="responsive-placed-img">
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

    slideIndexStudent++;
    showSlidesStudent(slideIndexStudent);
    
    setTimeout(autoShowSlidesStudent, 4000);
}

// Ensure the function runs on page load
document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);
