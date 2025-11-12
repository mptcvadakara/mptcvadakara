// =================================================================
// Placed Students Slideshow Logic (using class .mySlides-student)
// =================================================================
var slideIndexStudent = 0; // Start at 0 for initial auto-run logic

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
  
  if (slides.length === 0) return; // Exit if no slides are found

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
    // Start the student slideshow if elements are present
    if (document.getElementsByClassName("mySlides-student").length > 0) {
        autoShowSlidesStudent();
    }
    
    // NOTE: If you have other JavaScript initialization code, you should 
    // add it here as well (e.g., initializing a main banner slideshow).
};