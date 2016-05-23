'use strict';
document.addEventListener('DOMContentLoaded', (function() {
    /**
     * slide-in side menu (responsive menu):
     *
     * TODO:
     *  corner cases:   - if viewport/browser is resized [larger] then menu should disappear
     *                  - if user clicks outside menu, menu should close
     *                  - lock scroll bar
     */
    // initialize variables, functions:
    var menuShown   = false;
    var $links      = document.querySelectorAll('.hamburger-icon, #hamburger-menu a, .ion-ios-close-empty');
    var $menu       = document.getElementById('hamburger-menu');  // TODO: replace with query selector?

    function showMenu() {
        // TODO: change to 'toggle' method:
        $menu.classList.remove('menu-hidden');
        $menu.classList.add('menu-visible');
        menuShown = true;
    }
    function hideMenu() {
        $menu.classList.remove('menu-visible');
        $menu.classList.add('menu-hidden');
        menuShown = false;
    }
    // Event handlers:
    // If 'hamburger' logo is clicked, display/hide menu:
    for(var i = 0; i < $links.length; i++){
        $links[i].addEventListener('click', function (event) {
            if(!menuShown) {
                showMenu();
            }
            else {
                hideMenu();
            }
        })
    }
})());
