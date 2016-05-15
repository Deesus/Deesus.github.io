'use strict';
$(document).ready(function() {
    /*************************
     * Initialize variables, functions:
     *************************/
    var menuShown       = false;
    var $links          = $('.hamburger-icon, #hamburger-menu a, .ion-ios-close-empty');
    var $menu           = $('#hamburger-menu');
    function showMenu() {
        // TODO: change to 'toggle' method:
        $menu.removeClass('menu-hidden');
        $menu.addClass('menu-visible');
        menuShown = true;
    }
    function hideMenu() {
        $menu.removeClass('menu-visible');
        $menu.addClass('menu-hidden');
        menuShown = false;
    }

    /*************************
     * Event handlers:
     *************************/
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
