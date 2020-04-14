$(document).ready(function(){
    
    // SuperSlides Setup
    $('#slides').superslides({
        animation: "fade",
        play: 5000,
    });

    // Typed Js Setup
    var typed = new Typed(".typed", {
        strings: ["Estudante de Sistemas de Informação na Universidade de São Paulo (USP)", "Programador",
        "Entusiasta de tecnologias"],
        typeSpeed: 50,
        loop: true,
        startDelay: 500,
        backDelay: 1500,
        showCursor: false,
    });

    // Owl Carousel Setup
    $('.owl-carousel').owlCarousel({
        loop:true,
        itens: 4,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

    var skillsSectionOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function (){
        if(window.pageYOffset >  (skillsSectionOffset - $(window).height() + 200) ){
            // Easy Pie Chart 
            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });           
        }
    });


    $("[data-fancybox]").fancybox();


    $(".items").isotope({
        filter: "*",
        animationOptions : {duration: 1500, easing: "linear",queue: false}
    });


    $("#filters a").click(function(){

        $("#filters .current").removeClass("current")
        $(this).addClass("current")

        var selector = $(this).attr("data-filter");
        
        $(".items").isotope({ // Calling Isotope again
            filter: selector,
            animationOptions : {duration: 1500, easing: "linear", queue: false}
        });

        return false; // Stop click action
    });

    $("#navigation li a ").click(function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        
        if(targetElement === "#timeline"){
            $("html, body").animate({ scrollTop: targetPosition - 100 }, "slow");
        }else {
            $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
        }
        
    });

    
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation );
    
    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    }

    $('.cntl').cntl({
        // The amount of "scroll padding" to allow 
        // The more, the later the state will be revealed
        revealbefore: 300,
        // The animate class
        // This class should have animation rules in css
        anim_class: 'cntl-animate',
        // A callback once the state has been revealed
        onreveal: null
        });
        

});