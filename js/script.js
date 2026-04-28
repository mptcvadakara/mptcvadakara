/* ===============================
   CONTENT LOADING FUNCTIONS
=============================== */
function load_home(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/home.html"></object>'; }
function load_principal(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/principal.html"></object>'; }
function load_orgchart(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/orgchart.html"></object>'; }
function load_pta(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/pta.html"></object>'; }
function load_staffclub(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/staffclub.html"></object>'; }
function load_ihrd(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/ihrd.html"></object>'; }

function load_bme(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/bme.html"></object>'; }
function load_ce(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/ce.html"></object>'; }
function load_che(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/che.html"></object>'; }
function load_ec(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/ec.html"></object>'; }
function load_eee(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/eee.html"></object>'; }
function load_gen(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/gen.html"></object>'; }
function load_office(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/office.html"></object>'; }

function load_acccomm(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/acccomm.html"></object>'; }
function load_antcomm(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/antcomm.html"></object>'; }

function load_nss(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/nss.html"></object>'; }
function load_vimukthi(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/vimukthi.html"></object>'; }
function load_iedc(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/iedc.html"></object>'; }
function load_yip(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/yip.html"></object>'; }
function load_council(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/council.html"></object>'; }

function load_library(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/library.html"></object>'; }

function load_tpmembers(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/tpmembers.html"></object>'; }

function load_alumniact(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/alumniact.html"></object>'; }
function load_alumnireg(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/alumnireg.html"></object>'; }

function load_syllabus(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="https://sitttrkerala.ac.in/index.php?r=site%2Fdiploma-syllabus&scheme=REV2021"></object>'; }

function load_gallery(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/gallery.html"></object>'; }

function load_placed26(){document.getElementById("content").innerHTML='<object width="100%" height="100%" data="source/placed26.html"></object>'; }


/* ===============================
   MOBILE MENU + SUBMENU LOGIC
=============================== */
document.addEventListener('DOMContentLoaded', function () {

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav');

    // Toggle main menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu--open');
    });

    // -------- LEVEL 1 (sub menu) --------
    const parents = document.querySelectorAll('#nav li.top');

    parents.forEach(li => {
        const link = li.querySelector('a.top_link');

        if (li.querySelector('ul.sub')) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();

                    li.classList.toggle('item--open');

                    // close others
                    parents.forEach(other => {
                        if (other !== li) {
                            other.classList.remove('item--open');
                        }
                    });
                }
            });
        }
    });

    // -------- LEVEL 2 (flyout submenu) --------
    const flyLinks = document.querySelectorAll('.has-flyout > a');

    flyLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                const parent = link.parentElement;
                parent.classList.toggle('flyout-open');

                // close other flyouts
                document.querySelectorAll('.has-flyout').forEach(other => {
                    if (other !== parent) {
                        other.classList.remove('flyout-open');
                    }
                });
            }
        });
    });

    // Close menu after clicking final links
    const allLinks = document.querySelectorAll('#nav a');

    allLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (!link.closest('.has-flyout') && window.innerWidth <= 768) {
                setTimeout(() => {
                    navMenu.classList.remove('nav-menu--open');
                    document.querySelectorAll('.item--open, .flyout-open')
                        .forEach(el => el.classList.remove('item--open','flyout-open'));
                }, 200);
            }
        });
    });

});


/* ===============================
   SLIDESHOW
=============================== */
const images = [];
for (let i = 1; i <= 15; i++) {
    images.push(`${i}.jpg`);
}
images.push('mptc.jpg');

const imagePath = 'Slides/';
let slideIndex = 0;
let interval;

function showImage(n){
    const img = document.getElementById('slideshow-img');
    if(!img) return;

    slideIndex = (n + images.length) % images.length;

    img.style.opacity = 0;

    setTimeout(()=>{
        img.src = imagePath + images[slideIndex];
        img.onload = () => img.style.opacity = 1;
    },300);
}

function autoSlide(){
    showImage(slideIndex + 1);
}

window.plusSlides = function(n){
    clearInterval(interval);
    showImage(slideIndex + n);
    interval = setInterval(autoSlide,4000);
}

document.addEventListener('DOMContentLoaded',()=>{
    const img = document.getElementById('slideshow-img');
    if(img){
        img.src = imagePath + images[0];
        img.style.opacity = 1;
    }
    interval = setInterval(autoSlide,4000);
});
