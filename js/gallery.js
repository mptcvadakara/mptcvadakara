// --- 1. DEFINE THE IMAGE LIST MANUALLY ---
// IMPORTANT: You MUST update this array whenever you add or remove images from the 'gallery/' folder.
// The paths MUST be relative to the HTML file (gallery.html is in 'source/').
// Use '../gallery/' to correctly reference images from the HTML file's location.
const imageFiles = [
    '../gallery/mptc.jpg', '../gallery/1.jpg', '../gallery/2.jpg', '../gallery/3.jpg', '../gallery/4.jpg', '../gallery/5.jpg', 
    '../gallery/6.jpg', '../gallery/7.jpg', '../gallery/8.jpg', '../gallery/9.jpg', '../gallery/10.jpg','../gallery/11.jpg', 
    '../gallery/12.jpg', '../gallery/13.jpg', '../gallery/14.jpg', '../gallery/15.jpg', '../gallery/17.jpg',  '../gallery/17.jpg',  
    '../gallery/18.jpg',  '../gallery/19.jpg',  '../gallery/20.jpg',  '../gallery/21.jpg',  '../gallery/22.jpg',  '../gallery/23.jpg',  
    '../gallery/24.jpg',  '../gallery/25.jpg',  '../gallery/26.jpg',  '../gallery/27.jpg',  '../gallery/28.jpg'  
];

// --- 2. Gallery and Lightbox DOM Elements ---
const galleryContainer = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentImageIndex; // Global variable to track the index of the currently displayed image

// --- 3. Function to Dynamically Generate the Gallery ---
function generateGallery() {
    // Check if the imageFiles array is empty or not defined
    if (!imageFiles || imageFiles.length === 0) {
        galleryContainer.innerHTML = '<p>No images defined in the JavaScript file. Please update `imageFiles` array.</p>';
        return;
    }

    let galleryHTML = '';
    
    // Loop through the imageFiles array and create HTML for each image thumbnail
    imageFiles.forEach((fileName, index) => {
        const altText = `Gallery Image ${index + 1}`; // Simple alt text
        
        // Construct the HTML for each gallery item.
        // `onclick` calls `openLightbox` passing the image path and its index.
        galleryHTML += `
            <div class="gallery-item" onclick="openLightbox('${fileName}', ${index})">
                <img src="${fileName}" alt="${altText}">
            </div>
        `;
    });
    
    // Insert the generated HTML into the gallery container
    galleryContainer.innerHTML = galleryHTML;
}

// Ensure gallery generation runs once the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', generateGallery);

// --- 4. Lightbox Functions (Made Global for HTML `onclick` attributes) ---

// Function to open the lightbox with a specific image
function openLightbox(imageSrc, index) {
    currentImageIndex = index; // Store the index of the image being opened
    lightboxImg.src = imageSrc; // Set the source of the large image in the lightbox
    lightbox.style.display = 'flex'; // Display the lightbox (uses flex for centering)
    document.body.style.overflow = 'hidden'; // Prevent scrolling the main page while lightbox is open
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Hide the lightbox
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the main page
}

// Function to navigate between images in the lightbox
function changeImage(direction) {
    // direction will be -1 for previous image, 1 for next image
    currentImageIndex += direction;

    // Handle looping: if we go past the end, go to the beginning; if past the beginning, go to the end
    if (currentImageIndex < 0) {
        currentImageIndex = imageFiles.length - 1; // Loop to the last image
    } else if (currentImageIndex >= imageFiles.length) {
        currentImageIndex = 0; // Loop to the first image
    }

    // Update the lightbox image source to the new current image
    lightboxImg.src = imageFiles[currentImageIndex];
}

// Make these functions globally accessible so they can be called from HTML `onclick` attributes
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeImage = changeImage;

// --- 5. Optional: Keyboard Navigation (Arrow keys and Escape) ---
document.addEventListener('keydown', function(event) {
    // Only respond to key presses if the lightbox is currently visible
    if (lightbox.style.display === 'flex') {
        if (event.key === 'ArrowLeft') { // Left arrow key
            changeImage(-1); // Move to previous image
        } else if (event.key === 'ArrowRight') { // Right arrow key
            changeImage(1); // Move to next image
        } else if (event.key === 'Escape') { // Escape key
            closeLightbox(); // Close the lightbox
        }
    }
});

// --- 6. Event Listener to Close Lightbox on Background Click ---
lightbox.addEventListener('click', function(event) {
    // If the click occurred directly on the lightbox container (the dark background),
    // but NOT on the image itself or the navigation buttons, then close the lightbox.
    if (event.target === lightbox) {
        closeLightbox();
    }
});



