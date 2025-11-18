// *** UPDATED ARRAY GENERATION USING A FOR LOOP ***
const imageFiles = [];
let totalImages = 15;
// Start at 1, go up to and include 15.
for (let i = 1; i <= totalImages; i++) {
    imageFiles.push(`${i}.jpg`);
}
// Add the 'mptc.jpg' file separately if it's not part of the sequence.
imageFiles.unshift("mptc.jpg"); // Add 'mptc.jpg' to the beginning

let imagePaths = []; // Global array to store full paths
let currentImageIndex = 0; // Global variable to track the currently viewed image

// Function to update the modal image based on index
function displayImage(index) {
        const modalImg = document.getElementById("full-image");
        currentImageIndex = index;
        modalImg.src = imagePaths[currentImageIndex];
}

// Function to display the full-screen image modal
function openModal(index) {
        const modal = document.getElementById("image-modal");
        modal.style.display = "block";
        displayImage(index); // Set the initial image
}

// Function to close the modal
function closeModal() {
        const modal = document.getElementById("image-modal");
        modal.style.display = "none";
}
        
// Function to navigate to the previous image, looping to the end
function showPrevImage() {
        let newIndex = currentImageIndex - 1;
        if (newIndex < 0) {
                newIndex = imagePaths.length - 1; // Loop to the last image
        }
        displayImage(newIndex);
}

// Function to navigate to the next image, looping to the beginning
function showNextImage() {
        let newIndex = currentImageIndex + 1;
        if (newIndex >= imagePaths.length) {
                newIndex = 0; // Loop back to the first image
        }
        displayImage(newIndex);
}

// Function to dynamically load all gallery images
function loadGalleryImages() {
        const gallerySection = document.getElementById('department-gallery-section');
        let galleryHTML = '';

        // 1. Populate the imagePaths array
        imagePaths = imageFiles.map(fileName => `../Slides/${fileName}`);

        // 2. Generate gallery HTML using the index
        imagePaths.forEach((path, index) => {
                galleryHTML += `
                <div class="gallery-item-ext">
                <img src="${path}" alt="Gallery image of Biomedical Engineering equipment/lab" onclick="openModal(${index})">
                </div>
                `;
        });

        gallerySection.innerHTML = galleryHTML;
}

// Function to toggle the visibility of the extended gallery section
function toggleGallery() {
        const gallery = document.getElementById('department-gallery-section');
        const link = document.getElementById('gallery-toggle-link');

        if (gallery.style.display === 'none' || gallery.style.display === '') {
                // Display the gallery
                gallery.style.display = 'grid';
                link.innerHTML = '<i class="fas fa-eye-slash"></i> HIDE DEPARTMENT GALLERY';
        } else {
                // Hide the gallery
                gallery.style.display = 'none';
                link.innerHTML = '<i class="fas fa-camera"></i> VIEW DEPARTMENT GALLERY';
        }
        return false; // Prevent page refresh
}

 // Run this function once the page content is loaded to insert the images initially
document.addEventListener('DOMContentLoaded', loadGalleryImages);




