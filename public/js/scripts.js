$(document).ready(function(){

    /**************
     *  bg scrolling
     *
     * bg moves in opposite direction of scroll
     *************/
    var speed = 10;
    var $bgObject = $('.typography');
    $(window).scroll(function(){
        // user scrolls at y speed, whilst bg scrolls at y/constant speed:
        var adjustedY = -($(window).scrollTop() / 2);
        var coordinates = '50% '+ adjustedY + 'px';             //`50%` is added to keep x-position of the bg as static
        $bgObject.css({ backgroundPosition: coordinates });
    });
});