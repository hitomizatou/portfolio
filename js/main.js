'use strict';





// スクロールしたら、ふわっと表示
//*-------------------------------------------------------*/

$(function () {
  $(window).on('scroll', function () {
    $(".imageBox").each(function () {
      let scroll = $(window).scrollTop();
      let elemPos = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass("fadeUp");
      }
    });
  });
});




// 左から文字が出現する
//*-------------------------------------------------------*/

function slideAnime() {
  //====左に動くアニメーションここから===
  $('.leftAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

    }
  });

}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function () {
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//* smooth scroller
//*-------------------------------------------------------*/

$(function () {
  $('a[href*="#"]').on('click', function () {
    var hash = this.hash;
    if (!hash || hash == '#') {
      return false;
    }
    var offset = $(hash).offset();
    if (!offset) {
      return true;
    }

    //メニュー除く
    var menu_height = 0;
    //        if ($('.header.fixed').length){
    //            var menu_height = $('.header.fixed').outerHeight();
    //        }

    $('body,html').animate({ scrollTop: (offset.top - menu_height) }, 800, 'swing');
    return false;
  });
});