// *** FACULTY PROFILE DATA ***
const facultyProfiles = [
    { 
        name: "Anoop Kumar N", 
        designation: "Head of the Department, Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Electronics Engineering",
        email: "anoop.kumar@example.com", 
        expertise: "Medical Imaging, Electronic Instrumentation, Diagnostic Equipment Maintenance.",
        image: "../staff/anoop.jpg" // Added Image Path
    },
    { 
        name: "Pooja K P", 
        designation: "Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Biomedical Engineering",
        email: "pooja.kp@example.com",
        expertise: "Bio-signals Processing, Therapeutic Devices, Microprocessors.",
        image: "../staff/pooja.jpg"
    },
    { 
        name: "Arya", 
        designation: "Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Biomedical Engineering",
        email: "arya@example.com",
        expertise: "Digital Electronics, Communication Systems, Biomedical Optics.",
        image: "../staff/arya.jpg"
    },
    { 
        name: "Anjali", 
        designation: "Lecturer in Bio Medical Engineering", 
        qualification: "B.Tech in Biomedical Engineering",
        email: "anjali@example.com",
        expertise: "Circuit Design, Analog Electronics, Medical Equipment Troubleshooting.",
        image: "../staff/anjali.jpg"
    },
    { 
        name: "Bindu", 
        designation: "Demonstrator in Bio Medical Engineering", 
        qualification: "Diploma in Biomedical Engineering",
        email: "bindu@example.com",
        expertise: "Lab Maintenance, Workshop Practice, Basic Equipment Operation.",
        image: "../staff/bindu.jpg"
    }
];

// --- MODIFIED PROFILE MODAL FUNCTION ---
function openProfileModal(index) {
    const modal = document.getElementById("profile-modal");
    const profileContent = document.getElementById("profile-content");
    const profile = facultyProfiles[index];

    profileContent.innerHTML = `
        <div class="profile-header">
            <img src="${profile.image}" alt="${profile.name}" class="profile-modal-img">
            <div>
                <h3>${profile.name}</h3>
                <h4>${profile.designation}</h4>
            </div>
        </div>
        <hr>
        <p><strong>Qualification:</strong> ${profile.qualification}</p>
        <p><strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a></p>
        <p><strong>Expertise:</strong> ${profile.expertise}</p>
    `;

    modal.style.display = "block";
}

// *** REST OF THE GALLERY LOGIC REMAINS THE SAME ***
const imageFiles = [];
let totalImages = 6;
for (let i = 1; i < totalImages; i++) { imageFiles.push(`${i}.jpg`); }
imageFiles.unshift("mptc.jpg");

let imagePaths = [];
let currentImageIndex = 0;

function displayImage(index) {
    const modalImg = document.getElementById("full-image");
    currentImageIndex = index;
    modalImg.src = imagePaths[currentImageIndex];
}

function openModal(index) {
    document.getElementById("image-modal").style.display = "block";
    displayImage(index);
}

function closeModal() {
    document.getElementById("image-modal").style.display = "none";
    document.getElementById("profile-modal").style.display = "none";
}
        
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    displayImage(currentImageIndex);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    displayImage(currentImageIndex);
}

function loadGalleryImages() {
    const gallerySection = document.getElementById('department-gallery-section');
    imagePaths = imageFiles.map(fileName => `../gallery/bme/${fileName}`);
    gallerySection.innerHTML = imagePaths.map((path, index) => `
        <div class="gallery-item-ext">
            <img src="${path}" onclick="openModal(${index})">
        </div>
    `).join('');
}

function toggleGallery() {
    const gallery = document.getElementById('department-gallery-section');
    const link = document.getElementById('gallery-toggle-link');
    const isHidden = gallery.style.display === 'none' || gallery.style.display === '';
    gallery.style.display = isHidden ? 'grid' : 'none';
    link.innerHTML = isHidden ? '<i class="fas fa-eye-slash"></i> HIDE DEPARTMENT GALLERY' : '<i class="fas fa-camera"></i> VIEW DEPARTMENT GALLERY';
    return false;
}

document.addEventListener('DOMContentLoaded', loadGalleryImages);
