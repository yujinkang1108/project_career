$(function(){
    //헤더

    /**
     * nav
     * hover underline
     */
    //gnb-item
    $('.gnb .gnb-item>a').mouseover(function(e){
        e.preventDefault();
        $(this).children('.gnb-item .gnb-title').addClass('on')
      });

    $('.gnb .gnb-item>a').mouseout(function(e){
        e.preventDefault();
        $(this).children('.gnb-item .gnb-title').removeClass('on')
    });
    //sub-item
    $('.sub-item').mouseover(function(e){
        e.preventDefault();
        $(this).children('.sub-item .sub-title').addClass('on')
      });

    $('.sub-item').mouseout(function(e){
        e.preventDefault();
        $(this).children('.sub-item .sub-title').removeClass('on')
    });

    /**
     * nav
     * slide down up
     */
    $('.gnb-item').mouseover(function(e){
        e.preventDefault();
        $('.sub').css('display','none');
      });
    $('.gnb-item.teams').mouseover(function(e){
        e.preventDefault();
        $('.sub').css('display','block');
      });
      $('.gnb-item.teams .sub').mouseout(function(e){
        e.preventDefault();
        $('.sub').css('display','none');
      });





    //사이드 메뉴
     //open
    $('.nav-btn-box .btn-open').on('click',function(e){
      e.preventDefault();
      if ($('.side-nav').hasClass('open')){
        $('.side-nav').removeClass('open')
      } else {
        $('.side-nav').removeClass('close')
        $('.side-nav').addClass('open')
        $('.nav-btn-box .btn-open').addClass('on')
        $('.nav-btn-box .btn-close').addClass('on')
      }
   })
    //  close
    $('.nav-btn-box .btn-close').on('click',function(e){
      e.preventDefault();
      if ($('.side-nav').hasClass('close')){
        $('.side-nav').removeClass('close')
      } else {
        $('.side-nav').removeClass('open')
        $('.side-nav').addClass('close')
        $('.nav-btn-box .btn-open').removeClass('on')
        $('.nav-btn-box .btn-close').removeClass('on')
      }
   })
   

      //sub
      $('.side-nav .nav-link').click(function(e){
        e.preventDefault();
        //nav-item
        $(this).toggleClass('on')
        //sub
        $('.side-nav .sub').toggleClass('on')
        // ic-arrow rotate
        $('.side-nav .ic-arrow').toggleClass('on')
    })
      



    
    //m-lnb
    // open
    $('.sc-search .m-search-area').on('click',function(e){
      e.preventDefault();

       if ($('.m-lnb').hasClass('on')){
          $('.m-lnb').removeClass('on')
        } else {
         $('.m-lnb').removeClass('on')
         $('.m-lnb').addClass('on')
       }
    })
    // close
    $('.m-lnb .btn-close').on('click',function(e){
      e.preventDefault();

       if ($('.m-lnb').hasClass('on')){
          $('.m-lnb').removeClass('on')
        } else {
         $('.m-lnb').removeClass('on')
         $('.m-lnb').addClass('on')
       }
    })
    // sub-list
    $('.m-lnb .filter-title').on('click',function(e){
      e.preventDefault();
      $(this).siblings('.sub-list').toggleClass('on')
    })
    // checked
    $('.m-lnb label').on('click',function(){
      $(this).toggleClass('on')
    })
    // clear-filter
    $('.m-lnb .btn-clear').on('click',function(){
      if ($('.sub-item label').hasClass('on')){
        $('.sub-item label').removeClass('on')
      } else {
       $('.sub-item label').removeClass('on')
       $('.sub-item label').addClass('off')
     }
    })



    //메인
    /**
    * sc-main
    */
    const mainSwiper = new Swiper ('.main-slide',{
        loop:true,
        slidesPerView: 1,
    
        autoplay:{
            autopplay:true,
            delay:3200,
            disableOnInteraction: false
           },
        }) 
    
    /**
     * sc-search
     * select-box
     */
    $('.select-box .select').change(function(){
        $(this).addClass('active')
    })

    /**
     * sc-content.people
     */
    var peopleSlide = new Swiper ('.people-slide',{
      slidesPerView: 1,
      spaceBetween:15,
      
      navigation:{
        nextEl:".btn.next",
        prevEl:".btn.prev",
       },

      breakpoints:{
        768:{
          slidesPerView:1,
        },
        1025:{
          slidesPerView:1.2,
        },
      }
  });

    /**
     * sc-content.benefits
     * /* slick-slide
     * */
    var benefitsSlide = new Swiper ('.benefits-slide',{
      slidesPerView: 1,
      spaceBetween:30,

      navigation:{
        nextEl:".next",
        prevEl:".prev",
       },
      breakpoints:{
        768:{
          slidesPerView:2,
        },
        1025:{
          slidesPerView:3,
        },
      }
  });
 
     
 
  


    //푸터
    $('.footer .btn-relate').click(function(e){
      e.preventDefault();
      //site-list 
      $('.footer .site-list').toggleClass('on')
      // btn-relate 
      $('.footer .btn-relate').toggleClass('on')
  })

})//지우지 말 것