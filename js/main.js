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

    // スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var type = 'swing';
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top -80;
        $('body,html').animate({'scrollTop':position},speed,type);
        return false;
    });
});

    // エラーメッセージ
    // $('#submit').on('click',function(){
    //     $('#company-name-text').text("");
    //     $('#name-text').text("");
    //     $('#mail-text').text("");
    //     $('#contents-desc').text("");

    //     if(('input[name = "name"]').val() == ""){
    //         $('#name-text').text("名前は必須項目です。");
    //     }

    //     if(('input[name = "mail"]').val() == ""){
    //         $('#mail-text').text('メールアドレスは必須項目です。');
    //     }

    //     if(('input[name = "contents"]').val() == ""){
    //         $('#contents-desc').text('内容は必須項目です。');
    //     }
    // });

    $(function(){
        const hash = location.hash;

        if(hash){
            $("html,body").stop().scrollTop(0);
            setTimeout(function(){
                const target = $(hash);
                position = target.offset().top;
                $("html,body").animate({scrollTop:position},500,"swing");
            });
        }
    });

    function check(){
        if(mail_form.mail.value=""){
            alert('メールアドレスを入力してください');
            return false;
        } else {
            return true;
        }
    };
});
