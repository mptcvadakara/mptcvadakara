// --- 1. Define the List of Image Files ---
// Update this array whenever you add or remove images from your folder.
// Ensure these names EXACTLY match the file names in your image folder (e.g., 1.jpg, 2.jpg, mptc.jpg).
const imageFiles = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', 
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', 
    'mptc.jpg' 
    // Add or remove file names here
];

// --- 2. Dynamic Gallery Generation ---
const galleryContainer = document.querySelector('.gallery');

// Function to generate the HTML items
function generateGallery() {
    let galleryHTML = '../gallery/';
    
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
