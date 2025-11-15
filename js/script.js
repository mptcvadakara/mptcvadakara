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
        
function load_po() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/po.html" ></object>';
}

function load_alumniact() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/alumniact.html" ></object>';
}

function load_gallery() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/gallery.html" ></object>';
}

function load_alumnireg() {
    document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/alumnireg.html" ></object>';
}

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav');

    if (navToggle && navMenu) {
        
        // Function to collapse the entire mobile menu (HIDES the main UL)
        const collapseMainMenu = () => {
            // Ensure we are on a small screen and the menu is currently open
            if (window.innerWidth <= 768 && navMenu.classList.contains('nav-menu--open')) {
                navMenu.classList.remove('nav-menu--open');
                navToggle.setAttribute('aria-expanded', false);
                
                // Also close any currently open submenus (optional, but cleaner)
                document.querySelectorAll('#nav li.item--open').forEach(li => {
                    li.classList.remove('item--open');
                });
            }
        };

        // 1. Main Navigation Toggle Logic (Hamburger Icon)
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu--open');
            const isExpanded = navMenu.classList.contains('nav-menu--open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // 2. Submenu Toggle Logic for Mobile (Parent Links)
        const parentMenuItems = navMenu.querySelectorAll('li.top:has(ul.sub)');

        parentMenuItems.forEach(parentLi => {
            const mainLink = parentLi.querySelector('a.top_link');
            
            if (mainLink) {
                mainLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        
                        // Prevent default navigation for all parent links
                        // as their primary role on mobile is to toggle the submenu.
                        e.preventDefault(); 
                        
                        // Toggle the submenu state
                        parentLi.classList.toggle('item--open');

                        // Collapse other open submenus
                        parentMenuItems.forEach(otherLi => {
                            if (otherLi !== parentLi && otherLi.classList.contains('item--open')) {
                                otherLi.classList.remove('item--open');
                            }
                        });
                    }
                });
            }
        });

        // 3. CRITICAL FIX: Collapse Menu When Any Navigational Link is Clicked
        //    This targets: 
        //    a) Top-level links without submenus (e.g., Home, About Us)
        //    b) All links inside submenus (leaf links)
        const navigationalLinks = navMenu.querySelectorAll('li:not(:has(ul.sub)) > a, ul.sub a');

        navigationalLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Wait a moment to ensure the content loading/navigation begins before hiding the menu
                setTimeout(collapseMainMenu, 50); 
            });
        });
    }
});

// --- UPDATED SLIDESHOW LOGIC ---

// Dynamically generate the image file paths (1.jpg, 2.jpg, ... up to 15.jpg)
const images = [];
const numImages = 15; // Assuming files are 1.jpg up to 15.jpg
for (let i = 1; i <= numImages; i++) {
    images.push(`${i}.jpg`);
}
// Add the remaining static images if needed, based on the original list
images.push('mptc.jpg'); // Add mptc.jpg and 1.jpg again if they were special

const imagePathPrefix = 'Slides/'; 
let slideIndex = 0; // Use 0-based index for array
let slideshowInterval;
const delay = 4000; // 4000 milliseconds = 4 seconds

// 1. Function to display a specific slide
const showImage = (n) => {
    const slideshowElement = document.getElementById('slideshow-img');
    if (!slideshowElement) return;

    // 1. Calculate the new index, ensuring wrap-around (0 to max)
    slideIndex = (n + images.length) % images.length;

    // 2. Add the 'slide-out' class to start the transition (hides and moves left)
    // We'll use a class named 'slide-out' for the initial effect.
    slideshowElement.classList.add("slide-out");

    // 3. Set a timeout to change the image source after the slide-out completes
    // The delay should match or slightly exceed the CSS transition time (e.g., 300ms)
    const transitionTime = 300; 

    setTimeout(() => {
        // Change the image source while it's hidden/moved off-screen
        slideshowElement.src = imagePathPrefix + images[slideIndex]; 
        
        // 4. Remove the 'slide-out' class to trigger the 'fly from left' (slide-in) effect
        // The default styles (or an 'slide-in' class combined with CSS transition) 
        // will handle the smooth move back to position.
        slideshowElement.classList.remove("slide-out");

    }, transitionTime); 
};

// 2. Function for the automatic slideshow logic
const autoSlideshow = () => {
    // Moves to the next slide
    showImage(slideIndex + 1);
};


// 3. Function to handle manual button clicks (called via onclick in HTML)
window.plusSlides = (n) => {
    // A. Clear the existing automatic interval
    clearInterval(slideshowInterval); 
    
    // B. Manually move to the requested slide (current index + direction: +1 or -1)
    // We pass the new desired index, which 'showImage' will normalize.
    showImage(slideIndex + n);
    
    // C. Restart the automatic interval
    slideshowInterval = setInterval(autoSlideshow, delay);
};


// 4. Initialization: Run the slideshow logic when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Initial display of the first image (slideIndex = 0)
    const slideshowElement = document.getElementById('slideshow-img');
    if(slideshowElement && images.length > 0) {
        slideshowElement.src = imagePathPrefix + images[0];
    }
    
    // Start the automatic slideshow
    slideshowInterval = setInterval(autoSlideshow, delay);
});
// Initialize the slideshow when the page loads
showSlides(slideIndex);

// Initialize the slideshow when the page loads
showSlides(slideIndex);













