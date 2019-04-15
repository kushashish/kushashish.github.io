$(document).ready(function() {
    $('.slider-box .container-small').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.ques-card').click(function() {
        if($(this).children('.ans').is(":hidden")) {
            $('.ans').hide();
            $(this).children('.ans').slideDown();
            $(this).children('.ques').addClass('active');
        } else {
            $(this).children('.ans').slideUp();
            $(this).children('.ques').removeClass('active');
        }
    });

    $('.tablinks').click(function(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        //check if this is not active li
        var isActive = $(this).hasClass('active');
        // catch target
        var target = $(this).attr("href");
        var isClickedSub = target.split('_')[1];
        var hasSubmenu = Boolean($(this).next('.sublist').length);
        if(!isActive) {
            //remove active from all li
            $('.tablinks.active').removeClass('active');
            // debugger
            if(!hasSubmenu && !isClickedSub) {
                //remove active from all li
                $('.tablinks.active-first').removeClass('active-first');
                // hide old tab content
                $('.tab-content').hide();
                //add active on current
                $(this).addClass('active');
                // show relative tab content
                $(target).show();
            } else {
                if(isClickedSub) {
                    //add active on current
                    $(this).addClass('active');
                    // hide all inner tab
                    $(".tab-content-child").hide();
                    // show relative tab content
                    $(target).show();
                } else {
                    $('.tab-content, .tab-content-child').hide();
                    $(this).addClass('active-first')
                    //add active first li of submenu
                    $(this).next('.sublist').children().eq(0).children().addClass('active');
                    // show relative tab content
                    $(target).show();
                    $(target+'_1').show();
                }
            }
        }
    });

    $('.price-card').hover(function() {
        $('.price-card').removeClass('active');
        $(this).addClass('active');
    })
})