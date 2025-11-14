// --- 1. DEFINE IMAGE COUNT & GENERATE FILE LIST ---
// IMPORTANT: Set this constant to the total number of sequentially named images (e.g., 1.jpg, 2.jpg, ...).
const TOTAL_GALLERY_IMAGES = 28; 

const imageFiles = [];
// Loop from 1 up to the total number of images to generate paths
for (let i = 1; i <= TOTAL_GALLERY_IMAGES; i++) {
    // The path MUST be relative to the HTML file (gallery.html).
    // Assuming images are in the '../gallery/' folder.
    imageFiles.push(`../gallery/${i}.jpg`);
}

// --- 2. Gallery and Lightbox DOM Elements & Global Vars ---
const galleryContainer = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentImageIndex; // Global variable to track the index of the currently displayed image
let slideshowTimeout; // Global variable to hold the timeout ID for auto-play

// --- 3. Function to Dynamically Generate the Gallery ---
function generateGallery() {
    if (!imageFiles || imageFiles.length === 0) {
        galleryContainer.innerHTML = '<p>No images found. Please check TOTAL_GALLERY_IMAGES constant and file paths.</p>';
        return;
    }

    let galleryHTML = '';
    imageFiles.forEach((fileName, index) => {
        // Use the filename (e.g., 1.jpg) for the alt text
        const altText = `Gallery Image ${fileName.substring(fileName.lastIndexOf('/') + 1)}`;
        
        galleryHTML += `
            <div class="gallery-item" onclick="openLightbox('${fileName}', ${index})">
                <img src="${fileName}" alt="${altText}">
            </div>
        `;
    });
    
    galleryContainer.innerHTML = galleryHTML;
}

document.addEventListener('DOMContentLoaded', generateGallery);

// --- 4. Slideshow Functions ---

// Automatic Slideshow Function (Runs every 4 seconds)
function autoShowSlides() {
    // 1. Calculate the next slide (n=1)
    let nextIndex = currentImageIndex + 1;
    if (nextIndex >= imageFiles.length) {
        nextIndex = 0;
    }
    
    // 2. Apply Fade Out effect (start transition: 400ms)
    lightboxImg.classList.add('fade');

    // 3. Wait for fade-out, change src, and fade in
    slideshowTimeout = setTimeout(() => {
        currentImageIndex = nextIndex; // Update the global index
        lightboxImg.src = imageFiles[currentImageIndex];
        lightboxImg.classList.remove('fade'); // Triggers fade-in

        // 4. Schedule the next auto-slide
        slideshowTimeout = setTimeout(autoShowSlides, 4000); // Change image every 4 seconds (4000 milliseconds)
    }, 400); // Wait 400ms for fade-out to complete before changing src
}


// Function for manual Next/Previous controls 
function plusSlides(n) {
    // 1. Stop the current auto-slide cycle and restart it 
    clearTimeout(slideshowTimeout);
    
    // 2. Start the Fade Out effect
    lightboxImg.classList.add('fade');

    // Wait for the fade-out animation to complete (400ms defined in CSS)
    setTimeout(() => {
        // 3. Calculate the new index
        currentImageIndex += n;

        // Handle looping
        if (currentImageIndex < 0) {
            currentImageIndex = imageFiles.length - 1; 
        } else if (currentImageIndex >= imageFiles.length) {
            currentImageIndex = 0; 
        }

        // 4. Update the image source
        lightboxImg.src = imageFiles[currentImageIndex];
        
        // 5. End the Fade In effect
        lightboxImg.classList.remove('fade');
        
        // 6. Resume auto-play after manual navigation (starts new 4000ms timer)
        slideshowTimeout = setTimeout(autoShowSlides, 4000); 

    }, 400); // This delay must match the CSS transition duration
}

// Function to open the lightbox with a specific image
function openLightbox(imageSrc, index) {
    currentImageIndex = index; 
    
    // 1. Set the source and ensure the fade class is ADDED (opacity: 0)
    lightboxImg.src = imageSrc;
    lightboxImg.classList.add('fade'); 
    
    // 2. Display the lightbox wrapper
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // 3. Use a small timeout to remove the fade class, starting the smooth transition (fade-in)
    // This delay ensures the browser registers the element is now visible before starting the transition.
    setTimeout(() => {
        lightboxImg.classList.remove('fade'); // Triggers fade-in/scale-up
    }, 50);

    // 4. START AUTO SLIDESHOW after the initial image is visible.
    clearTimeout(slideshowTimeout); 
    slideshowTimeout = setTimeout(autoShowSlides, 4000); // First transition will happen after 4s
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; 
    document.body.style.overflow = 'auto'; 
    
    // STOP AUTO SLIDESHOW
    clearTimeout(slideshowTimeout); 
}

// Make functions globally accessible
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.plusSlides = plusSlides; 

// --- 5. Optional: Keyboard Navigation (Arrow keys and Escape) ---
document.addEventListener('keydown', function(event) {
    if (lightbox.style.display === 'flex') {
        if (event.key === 'ArrowLeft') { 
            plusSlides(-1); 
        } else if (event.key === 'ArrowRight') { 
            plusSlides(1); 
        } else if (event.key === 'Escape') { 
            closeLightbox(); 
        }
    }
});

// --- 6. Event Listener to Close Lightbox on Background Click ---
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

