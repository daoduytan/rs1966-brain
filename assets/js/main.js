(function($) {
    'use strict';

    $(function() {
       
        /* header fixed
    -------------------------------------------------------------------------- */
        $(window).scroll(function(event) {
            if ($(this).scrollTop() > 1) {
                $('.main-header').addClass('active');
            } else {
                $('.main-header').removeClass('active');
            }
        });


        /* --------------------------------------------------------------------------
           Mobile Navigation
           -------------------------------------------------------------------------- */

        function rstAnimateRight(element, number) {
            $(element).animate({
                right: number
            }, 300);
        }

        $(".rst-main-navigation li.menu-item-has-children").prepend("<span class='rst-open-menu-mobile'></span>");
        $(".rst-toggle-menu").click(function() {

            $(".rst-toggle-menu").toggleClass("active");
            // Sidebar menu
            if ($(".rst-toggle-menu").hasClass("active")) {
                rstAnimateRight($(".rst-main-navigation"), 0);
                $(".overlay-mobile").show();
            } else {
                rstAnimateRight($(".rst-main-navigation"), -250);
                $(".overlay-mobile").hide();
            }

        });

        // multi level menu
        $(".rst-open-menu-mobile").on("click", function() {
            $(this).toggleClass("active");
            $(this).parent("li").siblings().find("ul").slideUp();
            $(this).parent("li").siblings().find(".rst-open-menu-mobile").removeClass("active");
            $(this).siblings('ul').slideToggle();
        });

        $(".overlay-mobile").click(function() {
            $(".rst-top-main-navigation .rst-toggle-menu.active").trigger("click");
        });


    }); // end document ready

    $(window).load(function() {});

})(jQuery); // end JQuery namespace
