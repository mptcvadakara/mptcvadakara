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
        
        // Function to collapse the entire mobile menu
        const collapseMainMenu = () => {
            if (window.innerWidth <= 768 && navMenu.classList.contains('nav-menu--open')) {
                navMenu.classList.remove('nav-menu--open');
                navToggle.setAttribute('aria-expanded', false);
                
                // Also collapse any open submenus when the main menu closes
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

        // ----------------------------------------------------
        // 2. Submenu Toggle Logic for Mobile 
        // ----------------------------------------------------
        const parentMenuItems = navMenu.querySelectorAll('li.top:has(ul.sub)');

        parentMenuItems.forEach(parentLi => {
            const mainLink = parentLi.querySelector('a.top_link');
            
            if (mainLink) {
                mainLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        
                        // Check if the link's hash is '#', '#nogoXX', or similar non-content links
                        // If it has a valid href (like #home), it should be allowed to navigate/close
                        const isNavigationalLink = mainLink.hash && mainLink.hash !== '#';
                        
                        // If the link is NOT a final destination link (i.e., it's just a menu header),
                        // we prevent default to only handle the submenu toggle.
                        if (mainLink.hash === "#contacts" || mainLink.hash.includes("#nogo")) {
                             e.preventDefault();
                        }
                        
                        // Always toggle the submenu on mobile click
                        parentLi.classList.toggle('item--open');

                        // Collapse other open submenus
                        parentMenuItems.forEach(otherLi => {
                            if (otherLi !== parentLi && otherLi.classList.contains('item--open')) {
                                otherLi.classList.remove('item--open');
                            }
                        });
                        
                        // If the main link IS a navigational link AND it doesn't have a submenu open,
                        // collapse the main menu immediately.
                        if (isNavigationalLink && !parentLi.classList.contains('item--open')) {
                            // Use a slight delay to ensure the page navigation begins
                            setTimeout(collapseMainMenu, 50);
                        }
                    }
                });
            }
        });

        // ----------------------------------------------------
        // 3. Collapse Menu When Any Submenu Link is Clicked
        // ----------------------------------------------------
        
        // Select all anchor tags (excluding those with submenus, as they were handled above)
        // and add a listener to ensure they close the menu.
        const allNavLinks = navMenu.querySelectorAll('a');

        allNavLinks.forEach(link => {
            // Check if the link is a destination link (i.e., not a parent menu header)
            const isDestination = !link.parentElement.classList.contains('top') || link.parentElement.closest('ul').classList.contains('sub');

            if (isDestination) {
                link.addEventListener('click', function() {
                    // Use a slight delay to ensure the page navigation begins before the menu hides
                    setTimeout(collapseMainMenu, 50); 
                });
            }
        });
    }
});



