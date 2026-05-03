// 1. Configuration Constants
const DATA_FILE_PATH = "../placed/2026/placed26.dat";
const IMAGE_FOLDER_PATH = "placed/2026/";

// 2. Global State
var slideIndexStudent = 0;
let studentList = []; // Array of {rollNo, name}
var studentTimer;

// 3. Data Loading Function
function loadStudentDataAndCreateSlides() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", DATA_FILE_PATH + "?v=" + Math.random(), true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText.length > 0)) {
                parseStudentData(xhr.responseText);
            } else {
                console.error("Data file not found at: " + DATA_FILE_PATH);
            }
        }
    };
    xhr.send();
}

// 4. Parsing Logic
function parseStudentData(data) {
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== "");

    studentList = [];

    lines.forEach(line => {
        const match = line.match(/^\s*(\d+)\s+(.+)$/);
        if (match) {
            studentList.push({
                rollNo: match[1],
                name: match[2].trim()
            });
        }
    });

    renderSlides();
}

// 5. DOM Rendering
function renderSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return;

    let slidesHTML = '';

    studentList.forEach(student => {
        slidesHTML += `
            <div class="mySlides-student fade" style="display: none;">
                <img src="${IMAGE_FOLDER_PATH}${student.rollNo}.jpg"
                     alt="Student ${student.rollNo}"
                     class="responsive-placed-img"
                     onerror="this.src='placeholder.jpg';">

                <div class="dynamic-name-tag">
                    Congratulations <br> <strong>${student.name}</strong>
                </div>
            </div>
        `;
    });

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

// 7. Show Slides
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

// 8. Auto Slide
function startAutoCycle() {
    if (studentTimer) clearInterval(studentTimer);

    studentTimer = setInterval(() => {
        slideIndexStudent++;
        showSlidesStudent(slideIndexStudent);
    }, 4000);
}

// 9. Entry Point
document.addEventListener('DOMContentLoaded', loadStudentDataAndCreateSlides);
