'use strict';
$(document).ready(function() {
    var menuShown       = false;
    var $menuSelection  = $('.triple-bar, #drop-down-menu > a');
    var $dropMenu       = $('#drop-down-menu');

    $menuSelection.click(function() {
        if(menuShown) {
            $dropMenu.removeClass('show-menu');
        }
        else {
            $dropMenu.addClass('show-menu');
        }
        menuShown = !menuShown;
    });
});