'use strict';

$(document).ready(function(){


  window.onload = function(){
    setTimeout (function(){
      scrollTo(0, 0), 100;})
  };


  // 최상단 배너 X버튼
  $(".banner_xbutton").on("click", function(){
    $(".banner_top").hide();
  });


  // 1~2차 메뉴
  $(".gnb_2dep_1").css({
    display:'block',
    opacity: 0
  });

  $(".gnb_1dep_1").mouseover(function(){
      $(".gnb_2dep_1").css({
        display:'block',
        opacity: 1,
        transitionDuration : '.5s'
      });
  });

  $(".gnb_1dep_1").mouseout(function(){
    $(".gnb_2dep_1").css({
      opacity: 0,
      transitionDuration : '.5s'
    });
  });


  $(".gnb_2dep_2").css({
    display: 'block',
    opacity: 0
  });

  $(".gnb_1dep_2").mouseover(function(){
    $(".gnb_2dep_2").css({
      display: 'block',
      opacity: 1,
      transitionDuration: '.5s'
    });
  });

  $(".gnb_1dep_2").mouseout(function(){
    $(".gnb_2dep_2").css({
      opacity: 0,
      transitionDuration:'.5s'
    });
  });


  // 언어선택창
  $(".language").on("click", function(){
    $(".lang_list").fadeToggle(300);
  });


  // swiper slide
  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoHeight: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });




  // contents2 - box1 SNS 버튼
  $(".sns_slide_btn_w1").on("click", function(e){
    e.preventDefault();
      $(".sns_box1").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg1").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook1").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare1").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL1").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton1").on("click", function(){
    $(".facebook1").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare1").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL1").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg1").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box1").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });


  // contents2 - box2 SNS 버튼
  $(".sns_slide_btn_w2").on("click", function(e){
    e.preventDefault();
      $(".sns_box2").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg2").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook2").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare2").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL2").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton2").on("click", function(){
    $(".facebook2").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare2").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL2").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg2").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box2").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });



  // contents2 - box3 SNS 버튼
  $(".sns_slide_btn_b3").on("click", function(e){
    e.preventDefault();
      $(".sns_box3").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg3").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook3").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare3").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL3").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton3").on("click", function(){
    $(".facebook3").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare3").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL3").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg3").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box3").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });



  // contents2 - box4 SNS 버튼
  $(".sns_slide_btn_b4").on("click", function(e){
    e.preventDefault();
      $(".sns_box4").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg4").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook4").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare4").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL4").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton4").on("click", function(){
    $(".facebook4").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare4").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL4").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg4").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box4").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });




  // contents2 - box5 SNS 버튼
  $(".sns_slide_btn_w5").on("click", function(e){
    e.preventDefault();
      $(".sns_box5").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg5").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook5").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare5").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL5").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton5").on("click", function(){
    $(".facebook5").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare5").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL5").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg5").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box5").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });



  // contents2 - box6 SNS 버튼
  $(".sns_slide_btn_b6").on("click", function(e){
    e.preventDefault();
      $(".sns_box6").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg6").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook6").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare6").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL6").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton6").on("click", function(){
    $(".facebook6").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare6").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL6").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg6").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box6").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });



  // contents2 - box7 SNS 버튼
  $(".sns_slide_btn_b7").on("click", function(e){
    e.preventDefault();
      $(".sns_box7").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg7").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook7").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare7").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL7").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton7").on("click", function(){
    $(".facebook7").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare7").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL7").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg7").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box7").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });



  // contents2 - box8 SNS 버튼
  $(".sns_slide_btn_b8").on("click", function(e){
    e.preventDefault();
      $(".sns_box8").css({
        visibility: 'visible',
        transitionDuration: '.3s',
        opacity : 1
      });
      $(".sns_box_bg8").css({
        opacity: 1,
        transitionDuration: '.5s'
      });
      $(".facebook8").css({
        position:'absolute',
        top: '63px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".linkedinshare8").css({
        top: '126px',
        transitionDuration: '.5s',
        opacity: 1,
      });
      $(".copyURL8").css({
        top: '189px',
        transitionDuration: '.5s',
        opacity: 1,
      });
  });

  $(".sns_xbutton8").on("click", function(){
    $(".facebook8").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".linkedinshare8").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".copyURL8").css({
      top: '0',
      transitionDuration: '.5s',
      opacity: 0
    });
    $(".sns_box_bg8").css({
      opacity: 0,
      transitionDuration: '.5s',
    });
    $(".sns_box8").css({
      visibility: 'hidden',
      transitionDuration: '.3s',
    });
  });


  // contents3 동영상 팝업
  $(".play_video1").on("click", function(){
    $(".con3_popup_video1").css({
      visibility: 'visible'
    });
  });

  $(".video_xbutton1").on("click", function(){
    $(".con3_popup_video1").css({
      visibility: 'hidden'
    });
  });


  $(".play_video2").on("click", function(){
    $(".con3_popup_video2").css({
      visibility: 'visible'
    });
  });

  $(".video_xbutton2").on("click", function(){
    $(".con3_popup_video2").css({
      visibility: 'hidden'
    });
  });


  $(".play_video3").on("click", function(){
    $(".con3_popup_video3").css({
      visibility: 'visible'
    });
  });

  $(".video_xbutton3").on("click", function(){
    $(".con3_popup_video3").css({
      visibility: 'hidden'
    });
  });


  $(".play_video4").on("click", function(){
    $(".con3_popup_video4").css({
      visibility: 'visible'
    });
  });

  $(".video_xbutton4").on("click", function(){
    $(".con3_popup_video4").css({
      visibility: 'hidden'
    });
  });



  // footer '위로' 버튼
  $(".goTop").on("click", function(){
    scrollTo(0, 0), 100;
  });


  //family site 버튼
  $(".familySite button").on("click", function(){
    if(document.querySelector(".familySite_list").style.visibility == 'visible') {
      $(".familySite_list").css({
        transitionDuration: '.5s',
        visibility: 'hidden',
        height: "0px",
        bottom: '40px',
        opacity: '0'
      });
      $(".familySite").css({
        'border-radius': '0',
         border: 'none',
         border: '1px solid #fff',
        'border-bottom': '1px solid #333',
      });
    } else {
      $(".familySite").css({
        border: '1px solid #e3e3e3',
        'border-radius': '0 0 10px 10px'
      });
      $(".familySite_list").css({
        visibility: 'visible',
        transitionDuration: '.5s',
        height: '110px',
        bottom: '40px',
        border: '1px solid #e3e3e3',
        opacity: '1'
      });
    }
  });

  $(".familySite button").on("click", function(){
    if($(".arrow").hasClass("xi-angle-down")) {
      $(".xi-angle-down").attr("class", "xi-angle-up");
    } else {
      $(".xi-angle-up").attr("class", "xi-angle-down");
      $(".xi-angle-down").addClass("arrow");
    }
  });


  


});