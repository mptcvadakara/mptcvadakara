
// *** FACULTY PROFILE DATA ***
const facultyProfiles = [
    // HOD Profile (Index 0)
    { 
        name: "Anoop Kumar N", 
        designation: "Head of the Department, Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Electronics Engineering",
        email: "anoop.kumar@example.com", 
        expertise: "Medical Imaging, Electronic Instrumentation, Diagnostic Equipment Maintenance."
    },
    // Lecturer 1 (Index 1)
    { 
        name: "Pooja K P", 
        designation: "Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Biomedical Engineering",
        email: "pooja.kp@example.com",
        expertise: "Bio-signals Processing, Therapeutic Devices, Microprocessors."
    },
    // Lecturer 2 (Index 2)
    { 
        name: "Arya", 
        designation: "Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Biomedical Engineering",
        email: "arya@example.com",
        expertise: "Digital Electronics, Communication Systems, Biomedical Optics."
    },
    // Lecturer 3 (Index 3)
    { 
        name: "Anjali", 
        designation: "Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Biomedical Engineering",
        email: "anjali@example.com",
        expertise: "Circuit Design, Analog Electronics, Medical Equipment Troubleshooting."
    },
    // Demonstrator 1 (Index 4)
    { 
        name: "Bindu", 
        designation: "Demonstrator in Bio Medical Engineering", 
        qualification: "Diploma in Biomedical Engineering",
        email: "bindu@example.com",
        expertise: "Lab Maintenance, Workshop Practice, Basic Equipment Operation."
    }
];


// *** GALLERY IMAGE SETUP ***
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

// Function to close the modal (UPDATED to close both modals)
function closeModal() {
        document.getElementById("image-modal").style.display = "none";
        // Also close the profile modal if it is open
        const profileModal = document.getElementById("profile-modal");
        if (profileModal) {
             profileModal.style.display = "none";
        }
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

// --- FACULTY PROFILE MODAL FUNCTIONS (New functions) ---

// Function to display the faculty profile modal
function openProfileModal(index) {
    const modal = document.getElementById("profile-modal");
    const profileContent = document.getElementById("profile-content");
    const profile = facultyProfiles[index];

    profileContent.innerHTML = `
        <h3>${profile.name}</h3>
        <p><strong>Designation:</strong> ${profile.designation}</p>
        <p><strong>Qualification:</strong> ${profile.qualification}</p>
        <p><strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a></p>
        <p><strong>Expertise:</strong> ${profile.expertise}</p>
    `;

    modal.style.display = "block";
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

