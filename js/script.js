function load_home() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/home.html" ></object>';
}

function load_principal() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/principal.html" ></object>';
}

function load_orgchart() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/orgchart.html" ></object>';
}

function load_pta() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/pta.html" ></object>';
}

function load_staffclub() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/staffclub.html" ></object>';
}

function load_ihrd() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/ihrd.html" ></object>';
}

function load_bme() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/bme.html" ></object>';
}

function load_che() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/che.html" ></object>';
}

function load_ec() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/ec.html" ></object>';
}

function load_eee() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/eee.html" ></object>';
}

function load_ce() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/ce.html" ></object>';
}

function load_gen() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/gen.html" ></object>';
}

function load_office() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/office.html" ></object>';
}

function load_acccomm() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/acccomm.html" ></object>';
}

function load_antcomm() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/antcomm.html" ></object>';
}

function load_nss() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/nss.html" ></object>';
}

function load_vimukthi() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/vimukthi.html" ></object>';
}

function load_iedc() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/iedc.html" ></object>';
}

function load_arts() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/arts.html" ></object>';
}

function load_yip() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/yip.html" ></object>';
}

function load_staff() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/staff.html" ></object>';
}

function load_council() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/council.html" ></object>';
}

function load_library() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/library.html" ></object>';
}

function load_tpcell() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/tpcell.html" ></object>';
}
        
function load_tpmembers() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/tpmembers.html" ></object>';
}

function load_alumniact() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/alumniact.html" ></object>';
}

function load_syllabus() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="https://sitttrkerala.ac.in/index.php?r=site%2Fdiploma-syllabus&scheme=REV2021" ></object>';
}

function load_gallery() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/gallery.html" ></object>';
}

function load_alumnireg() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/alumnireg.html" ></object>';
}

function load_placed26() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/placed26.html" ></object>';
}

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav');

    if (navToggle && navMenu) {
        // Main Mobile Menu Toggle
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu--open');
        });

        // Handle all links that have a submenu (including nested ones)
        navMenu.querySelectorAll('li').forEach(li => {
            const subMenu = li.querySelector('ul');
            if (subMenu) {
                const link = li.querySelector(':scope > a');
                
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();

                        // Toggle the current item
                        const isOpen = li.classList.contains('item--open');
                        
                        // Optional: Close siblings at the same level
                        li.parentElement.querySelectorAll(':scope > li').forEach(sib => {
                            sib.classList.remove('item--open');
                        });

                        if (!isOpen) {
                            li.classList.add('item--open');
                        }
                    }
                });
            }
        });
    }
        const navigationalLinks = navMenu.querySelectorAll('li:not(:has(ul.sub)) > a, ul.sub a');
        navigationalLinks.forEach(link => {
            link.addEventListener('click', function() {
                setTimeout(collapseMainMenu, 50); 
            });
        });
    }
});

// --- UPDATED SLIDESHOW LOGIC WITH FADE TRANSITION ---
const images = [];
const numImages = 15; 
for (let i = 1; i <= numImages; i++) {
    images.push(`${i}.jpg`);
}
images.push('mptc.jpg'); 

const imagePathPrefix = 'Slides/'; 
let slideIndex = 0; 
let slideshowInterval;
const delay = 4000; // Updated to 3 seconds

const showImage = (n) => {
    const slideshowElement = document.getElementById('slideshow-img');
    if (!slideshowElement) return;

    slideIndex = (n + images.length) % images.length;

    // Fade out effect
    slideshowElement.style.transition = "opacity 0.5s ease-in-out";
    slideshowElement.style.opacity = 0;

    // Wait for fade out to finish before changing source
    setTimeout(() => {
        slideshowElement.src = imagePathPrefix + images[slideIndex]; 
        
        // Fade in effect after image loads
        slideshowElement.onload = () => {
            slideshowElement.style.opacity = 1;
        };
    }, 500); 
};

const autoSlideshow = () => {
    showImage(slideIndex + 1);
};

window.plusSlides = (n) => {
    clearInterval(slideshowInterval); 
    showImage(slideIndex + n);
    slideshowInterval = setInterval(autoSlideshow, delay);
};

document.addEventListener('DOMContentLoaded', (event) => {
    const slideshowElement = document.getElementById('slideshow-img');
    if(slideshowElement && images.length > 0) {
        slideshowElement.src = imagePathPrefix + images[0];
        slideshowElement.style.opacity = 1; // Ensure first image is visible
    }
    slideshowInterval = setInterval(autoSlideshow, delay);
});

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');    
    const startNumber = 1001;
    const endNumber = 1016;

    for (let i = startNumber; i <= endNumber; i++) {
        const card = document.createElement('div');
        card.className = 'image-card';

        const img = document.createElement('img');
        img.src = `../placed/2026/${i}.jpg`; 
        img.alt = `Placement Record Page ${i}`;
        
        img.loading = 'lazy';

        const info = document.createElement('div');
        info.className = 'image-info';
        //info.innerText = `Record Page: ${i}`;

        card.appendChild(img);
        card.appendChild(info);
        gallery.appendChild(card);
    }
});

// Initialize the slideshow when the page loads
showSlides(slideIndex);
