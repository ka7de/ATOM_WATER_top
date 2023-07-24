$(function (){
    // header_accordion
    $('#accordion-item').on('click',function(){
        $('#accordion-list').slideToggle();
        $('#accordion').toggleClass('open');
    });

    // hamburger
    $('#hamburger').on('click',function(){
        $('#hamburger span').toggleClass('show');
        $('nav').toggleClass('show');
        $('#mask').toggleClass('show');

        if($('#slidedown').hasClass('open')){
            $('#slidedown').removeClass('open');
            $('#slideitem').slideUp();
        }
    });

    $('nav ul li a').on('click',function(){
        $('#hamburger span').removeClass('show');
        $('nav').removeClass('show');
        $('#mask').removeClass('show');
    });

    $('#mask').on('click',function(){
        $(this).removeClass('show');
        $('#hamburger span').removeClass('show');
        $('nav').removeClass('show');

        if($('#slidedown').hasClass('open')){
            $('#slidedown').removeClass('open');
            $('#slideitem').slideUp();
        }
    });

    $('#slidedown').on('click',function(){
        let slideItem = $(this).next('#slideitem');
        slideItem.slideToggle();
        $(this).toggleClass('open');
    });

    // トップへスクロール
    $(function(){
        var topBtn = $('#top');
        topBtn.hide();
        $(window).scroll(function(){
            if($(this).scrollTop() > 500){
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
    
        topBtn.click(function(){
            $('body,html').animate({'scrollTop':0},500);
            return false;
        });
    });
});
