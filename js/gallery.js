// --- 1. DEFINE THE IMAGE LIST MANUALLY ---
// IMPORTANT: You MUST update this array whenever you add or remove images from the 'gallery/' folder.
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
    if (!imageFiles || imageFiles.length === 0) {
        galleryContainer.innerHTML = '<p>No images defined in the JavaScript file. Please update `imageFiles` array.</p>';
        return;
    }

    // 1. Clear any existing content
    galleryContainer.innerHTML = '';
    
    // 2. Loop through the imageFiles array and create DOM elements
    imageFiles.forEach((fileName, index) => {
        const altText = `Gallery Image ${index + 1}`; 
        
        // Create the necessary DOM elements
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = fileName;
        img.alt = altText;

        // 3. ATTACH EVENT LISTENER (The key improvement)
        galleryItem.addEventListener('click', () => {
            openLightbox(fileName, index);
        });

        // 4. Append elements
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
}

// Ensure gallery generation runs once the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', generateGallery);

// --- 4. Lightbox Functions (Publicly exposed for HTML button calls) ---

function openLightbox(imageSrc, index) {
    currentImageIndex = index;
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = imageFiles.length - 1; 
    } else if (currentImageIndex >= imageFiles.length) {
        currentImageIndex = 0; 
    }

    lightboxImg.src = imageFiles[currentImageIndex];
}

// Ensure functions are globally accessible for navigation buttons in HTML
window.closeLightbox = closeLightbox;
window.changeImage = changeImage;

// --- 5. Optional: Keyboard Navigation (Arrow keys and Escape) ---
document.addEventListener('keydown', function(event) {
    if (lightbox.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'Escape') {
            closeLightbox();
        }
    }
});

// --- 6. Event Listener to Close Lightbox on Background Click ---
lightbox.addEventListener('click', function(event) {
    // If the click occurred directly on the lightbox container (the dark background)
    if (event.target === lightbox) {
        closeLightbox();
    }
});
