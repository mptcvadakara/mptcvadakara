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
    // 1. Select the elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav');

    if (navToggle && navMenu) {
        // 2. Add the click event listener
        navToggle.addEventListener('click', function() {
            // Toggle the CSS class 'nav-menu--open'
            navMenu.classList.toggle('nav-menu--open');
            
            // Optional: Update the accessibility attribute (aria-expanded)
            const isExpanded = navMenu.classList.contains('nav-menu--open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // 3. Optional: Add logic to handle submenu toggling on click (not hover)
        const topLinksWithSub = document.querySelectorAll('#nav li.top > a.top_link span.down');
        
        topLinksWithSub.forEach(linkSpan => {
            // Target the <a> parent of the <span>
            const link = linkSpan.parentElement; 
            // Target the <li> parent of the <a>
            const parentLi = link.parentElement;
            
            link.addEventListener('click', function(e) {
                // Only act on mobile (when the menu is collapsed)
                if (window.innerWidth <= 768) {
                    // Prevent the default link action if the sub-menu is present
                    e.preventDefault(); 
                    
                    // Toggle a class on the parent <li> to expand the sub-menu
                    parentLi.classList.toggle('item--open');
                }
            });
        });
    }
});
