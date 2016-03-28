'use strict';
$(document).ready(function() {
    /*************************
     * Initialize variables, functions:
     *************************/
    var menuShown       = false;
    var $menuContainer  = $('#drop-down-menu');
    var $menuLinks      = $menuContainer.find('a');
    function showMenu() {
        $menuLinks.removeClass('hidden');
        menuShown = true;
    }
    function hideMenu() {
        $menuLinks.addClass('hidden');
        menuShown = false;
    }

    /*************************
     * Event handlers:
     *************************/
    // If 'triple-bar' logo is clicked, display/hide menu:
    $menuLinks.click(function() {
        if(!menuShown) {
            showMenu();
        }
        else {
            hideMenu();
        }
    });

    // Corner case: if menu is shown but user resizes to larger width, we must hide menu:
    // TODO: Derive a non-JS solution for hiding menu icon upon browser resize?
    $(window).resize(function() {
        if(window.innerWidth > 540){
            hideMenu();
        }
    });
});
