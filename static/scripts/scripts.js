/*************************
 *	Author: Dee Reddy
 *************************/


/*************************
 *	animated menu bar
 *	- menu appears (bounces) when scrolled down
 *	- menu goes off-screen otherwise
 *************************/

var menuShown = false;
$(document).ready(function(){

    $(window).scroll(function() {
        var yPosition = $(document).scrollTop();
        if (yPosition > 100 && !menuShown){
            $(".drop-menu").animate({"top": "0px"}, 100)
                .animate({"top": "-15px"}, 110)
                .animate({"top": "0px"}, 120)
                .animate({"top": "-5px"}, 120);
            menuShown = true;
        }
        else if(yPosition === 0) {
            $(".drop-menu").animate({"top": "-45px"}, 500);
            menuShown = false;
        }
    });


    // iterate over each "<section>" w/ attribute "data-type='background'":
    $('section[data-type="background"]').each(function(){
        var $bgObject = $(this);
        $(window).scroll(function(){
            // user (i.e. content) scrolls at y speed, whilst background scrolls at y/constant speed:
            //`.data('speed')` refers to `data-speed` html attribute
            //bg moves in opposite direction of scroll
            var adjustedY = -($(window).scrollTop() / $bgObject.data('speed'));

            var coordinates = '50% '+ adjustedY + 'px';			//`50%` is added to keep x-position of the bg as static
            //move bg:
            $bgObject.css({ backgroundPosition: coordinates });
        });
    });
});
