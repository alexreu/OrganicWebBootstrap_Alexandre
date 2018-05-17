$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(window).scrollTop()>400){
            $('nav').addClass('nav_black');
        }
        else{
            $('nav').removeClass('nav_black');

        } 
    });

});