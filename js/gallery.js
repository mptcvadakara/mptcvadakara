// --- 1. Define the List of Image Files ---
// Update this array whenever you add or remove images from your folder.
// Ensure these names EXACTLY match the file names in your image folder (e.g., 1.jpg, 2.jpg, mptc.jpg).
const imageFiles = [
    '../gallery/1.jpg', '../gallery/2.jpg', '../gallery/3.jpg', '../gallery/4.jpg', '../gallery/5.jpg', 
    '../gallery/6.jpg', '../gallery/7.jpg', '../gallery/8.jpg', '../gallery/9.jpg', '../gallery/10.jpg',
    '../gallery/11.jpg', '../gallery/12.jpg', '../gallery/13.jpg', '../gallery/14.jpg', '../gallery/15.jpg', 
    '../gallery/mptc.jpg' 
];

// --- 2. Dynamic Gallery Generation ---
const galleryContainer = document.querySelector('.gallery');

// Function to generate the HTML items
function generateGallery() {
    let galleryHTML = '';
    
    // Loop through the array and create HTML for each image
    imageFiles.forEach((fileName, index) => {
        const altText = `Gallery Image ${index + 1}`;
        
        // Use a template literal to easily create the HTML structure for each item
        galleryHTML += `
            <div class="gallery-item" onclick="openLightbox('${fileName}')">
                <img src="${fileName}" alt="${altText}">
            </div>
        `;
    });
    
    // Insert all the generated HTML into the .gallery container
    galleryContainer.innerHTML = galleryHTML;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', generateGallery);


// --- 3. Lightbox Functions (Same as before, but ensure they are available globally) ---

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Function to open the lightbox
function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc; 
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// Event listener for closing on background click
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox || event.target.className === 'close-btn') {
        closeLightbox();
    }
});

// Important: Attach the global functions to the window object so they can be called from the HTML's onclick
window.openLightbox = openLightbox;

window.closeLightbox = closeLightbox;



