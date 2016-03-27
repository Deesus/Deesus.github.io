'use strict';
$(document).ready(function() {
    /*************************
     * Initialize variables, functions:
     *************************/
    var menuShown       = false;
    var $menuContainer  = $('#drop-down-menu');
    var $menuSelection  = $menuContainer.find('a');
    var $dropMenu       = $menuContainer.children('ul');
    function showMenu() {
        $dropMenu.addClass('show-menu');
        $menuContainer.addClass('fill-bg');
        menuShown = true;
    }
    function hideMenu() {
        $dropMenu.removeClass('show-menu');
        $menuContainer.removeClass('fill-bg');
        menuShown = false;
    }

    /*************************
     * Event handlers:
     *************************/
    // If 'triple-bar' logo is clicked, display/hide menu:
    $menuSelection.click(function() {
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
