// =================================================================
// Placed Students Slideshow Logic (using class .mySlides-student)
// =================================================================
const TOTAL_STUDENT_SLIDES = 15; // Set the total number of images (1.jpg to 15.jpg)
var slideIndexStudent = 0; // Start at 0 for initial auto-run logic

// Function to dynamically generate the slideshow HTML
function createStudentSlides() {
    // Ensure the path is correct: assumes placed/ is a folder next to index.html
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) {
        console.error("Slideshow placeholder element not found.");
        return; 
    }

    let slidesHTML = '';
    // Loop from 1 to 15, generating the image path: placed/1.jpg, placed/2.jpg, etc.
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        slidesHTML += `
            <div class="mySlides-student fade">
                <img src="placed/${i}.jpg" alt="Placed Student ${i}" class="responsive-placed-img">
            </div>
        `;
    }
    container.innerHTML = slidesHTML;
}

// Manual Next/Previous controls
function plusSlidesStudent(n) {
  slideIndexStudent += n;
  showSlidesStudent(slideIndexStudent);
}

// Main function to show a specific slide
function showSlidesStudent(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-student"); 

  if (slides.length === 0) return; 

  // Wrap around logic
  if (n >= slides.length) {slideIndexStudent = 0} 
  if (n < 0) {slideIndexStudent = slides.length - 1}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  // Display the current slide
  slides[slideIndexStudent].style.display = "block"; 
}

// Automatic Slideshow Function
function autoShowSlidesStudent() {
  var slides = document.getElementsByClassName("mySlides-student");
  
  // Safety check, in case the element was removed from the DOM
  if (slides.length === 0) return; 

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment slide index
  slideIndexStudent++;
  if (slideIndexStudent >= slides.length) {slideIndexStudent = 0}    
  
  // Display the current slide
  slides[slideIndexStudent].style.display = "block";  
  
  // Change image every 4 seconds (4000 milliseconds)
  setTimeout(autoShowSlidesStudent, 4000); 
}

// --- Initialization ---
// Use DOMContentLoaded to ensure the HTML is loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dynamically create the slides
    createStudentSlides();
    
    // 2. Start the automatic slideshow after a short delay
    // This delay gives the slides time to be created and measured by the browser
    setTimeout(autoShowSlidesStudent, 100); 
});
