// =================================================================
// Placed Students Slideshow Logic (using class .mySlides-student)
// =================================================================
const TOTAL_STUDENT_SLIDES = 15; // Set the total number of images (1.jpg to 15.jpg)
var slideIndexStudent = 0; // Start at 0 for initial auto-run logic

// Function to dynamically generate the slideshow HTML
function createStudentSlides() {
    const container = document.getElementById("studentSlidesPlaceholder");
    if (!container) return;

    let slidesHTML = '';
    // Loop from 1 to 15, assuming images are named 1.jpg, 2.jpg, ..., 15.jpg inside the 'placed/' directory
    for (let i = 1; i <= TOTAL_STUDENT_SLIDES; i++) {
        // Generates <div class="mySlides-student fade"><img src="placed/X.jpg" ...></div>
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
  // Get all elements with the specific student slide class
  var slides = document.getElementsByClassName("mySlides-student"); 

  if (slides.length === 0) return; // Exit if no slides are found

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
  
  if (slides.length === 0) {
      // If slides haven't been created yet, try again soon
      setTimeout(autoShowSlidesStudent, 100); 
      return; 
  }

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

// Run the slideshow when the page loads
window.onload = function() {
    // 1. Dynamically create the slides
    createStudentSlides();
    
    // 2. Start the automatic slideshow
    autoShowSlidesStudent();
    
    // NOTE: If you have other JavaScript initialization code in script.js, 
    // ensure it is still called, or move it to this function if appropriate.
};
