'use strict';
$(document).ready(function() {
    var menuShown       = false;
    var $menuSelection  = $('.triple-bar, #drop-down-menu > a');
    var $dropMenu       = $('#drop-down-menu ul');
    var $menuContainer  = $('#drop-down-menu');

    $menuSelection.click(function() {
        if(menuShown) {
            $dropMenu.removeClass('show-menu');
            $menuContainer.removeClass('fill-bg');
        }
        else {
            $dropMenu.addClass('show-menu');
            $menuContainer.addClass('fill-bg');
        }
        menuShown = !menuShown;
    });
});