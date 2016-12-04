'use strict';
$(document).ready(function() {
    /**
     * slide-in side menu (responsive menu):
     * 
     * TODO:
     *  corner cases:   - if viewport/browser is resized [larger] then menu should disappear
     *                  - if user clicks outside menu, menu should close
     *                  - lock scroll bar
     */
    // initialize variables, functions:
    var menuShown       = false;
    var $links          = $('.hamburger-icon, #hamburger-menu a, .ion-ios-close-empty');
    var $menu           = $('#hamburger-menu');
    function showMenu() {
        // TODO: change to 'toggle' method:
        $menu.removeClass('menu-hidden')
             .addClass('menu-visible');
        menuShown = true;
    }
    function hideMenu() {
        $menu.removeClass('menu-visible')
             .addClass('menu-hidden');
        menuShown = false;
    }
    // Event handlers:
    // If 'hamburger' logo is clicked, display/hide menu:
    $links.click(function(event) {
        if(!menuShown) {
            showMenu();
        }
        else {
            hideMenu();
        }
    });
});
