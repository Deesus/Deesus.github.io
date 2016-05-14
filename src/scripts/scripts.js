'use strict';
$(document).ready(function() {
    /*************************
     * Initialize variables, functions:
     *************************/
    var menuShown       = false;
    var $links          = $('a[name=test]');
    var $menu           = $('#hamburger-menu');
    function showMenu() {
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
    $links.click(function() {
        if(!menuShown) {
            showMenu();
        }
        else {
            hideMenu();
        }
    });

    // Corner case: if menu is shown but user resizes to larger width, we must hide menu:
    // TODO: Derive a non-JS solution for hiding menu icon upon browser resize?
    // $(window).resize(function() {
    //     if(window.innerWidth > 540){
    //         hideMenu();
    //     }
    // });
});
