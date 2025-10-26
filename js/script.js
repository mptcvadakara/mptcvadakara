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

        function load_ihrd() {
            document.getElementById("content").innerHTML='<object width="100%" height="100%" type="text/html" data="source/ihrd.html" ></object>';
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

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav');

    if (navToggle && navMenu) {
        // Main Navigation Toggle Logic (Kept as before)
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu--open');
            const isExpanded = navMenu.classList.contains('nav-menu--open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // ----------------------------------------------------
        // CRITICAL: Submenu Toggle Logic for Mobile
        // ----------------------------------------------------
        
        // Select all main menu items that have submenus
        const parentMenuItems = document.querySelectorAll('#nav li.top:has(ul.sub)');

        parentMenuItems.forEach(parentLi => {
            // Find the main link for this parent item
            const mainLink = parentLi.querySelector('a.top_link');
            
            // Check if the link exists and prevents navigation
            if (mainLink) {
                mainLink.addEventListener('click', function(e) {
                    // Only apply toggle logic on mobile (when the nav is vertically stacked)
                    if (window.innerWidth <= 768) {
                        
                        // Prevent default navigation (following the href)
                        e.preventDefault(); 
                        
                        // Toggle the 'item--open' class on the parent <li> to expand/collapse the submenu
                        parentLi.classList.toggle('item--open');

                        // Optional: Collapse other open submenus
                        parentMenuItems.forEach(otherLi => {
                            if (otherLi !== parentLi && otherLi.classList.contains('item--open')) {
                                otherLi.classList.remove('item--open');
                            }
                        });
                    }
                    // If window.innerWidth > 768, the link will follow its default behavior (hover dropdown)
                });
            }
        });
        
    }
});

