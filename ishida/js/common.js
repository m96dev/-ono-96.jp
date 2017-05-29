//window.onload = function(){
//  setTimeout(scrollTo, 100, 0, 1);
//}

$(function(){

  // 表示サイズごとにクラスを操作する関数
  function replaceClassbySize(wWidth){
    // デスクトップサイズの場合にクラスを付加
    if(wWidth>=979){
      $('#global-navi').addClass('pc-on');
      $('#menu-category .dropdown').addClass('pc-select');
      $('#menu-category .smp-menu-key.on > a').removeClass('select');
      $('#menu-category .smp-menu-key.on > a').next().removeAttr('style');
    }else{
      $('#global-navi').removeClass('pc-on');
      $('#menu-category .dropdown').removeClass('pc-select');
    }

    // デスクトップ / タブレットサイズの場合にクラスを付加
    if(wWidth>=767){
      $('#item-image .photo_thumbs_block').addClass('on');
    }else{
      $('#item-image .photo_thumbs_block').removeClass('on');
    }

    // スマートフォン / タブレットサイズの場合にクラスを付加
    if(wWidth<=979){
      // global-nav-block sticky header
      $("#head-bar").removeClass('fixed');
      $("#global-nav-block").removeClass('fixed');
      //category-menu
      $('.smp-menu-key').addClass('on');
      //for listsuccess
      $('.list-category').addClass('smp-list-category');
    }else{
      //category-menu
      $('.smp-menu-key').removeClass('on');
      //for listsuccess
      $('.list-category').removeClass('smp-list-category');
    }
  }
  // 表示サイズに変更があった際にイベントを実行
  // @ replaceClassbySize - クラスの置換
  $(function(){
    var timer = false;
    $(window).resize(function() {
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        var wWidth = $(window).width();
        replaceClassbySize(wWidth);
      })
    });

    // 初回表示時にも同様にイベントを実行
    var wWidth = $(window).width();
    replaceClassbySize(wWidth);
  });
  // デバイスサイズごとに処理を変更している為
  // $(document)にイベントを付与しクラス操作にて対応
  $(function(){
      // スマートフォン：ナビカテゴリメニュー - 親要素
      $(document).on('click','#menu-category .smp-menu-key.on > a', function(event){
        var $this   = $(this);
            $parent = $this.closest('.dropdown');
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
          $this.next('.dropdown-menu').slideToggle();
          event.preventDefault();
      });
      // スマートフォン：ナビカテゴリメニュー - 子要素
      $(document).on('click','#menu-category .smp-menu-key.on .has-child', function(event){
        var $this = $(this);
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
          $this.next('.child-block').slideToggle();
          event.preventDefault();
      });
      // スマートフォン：ナビカテゴリメニュー - 孫要素
      $(document).on('click','#menu-category .smp-menu-key.on .has-grand-child h3', function(event){
        var $this = $(this);
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
          $this.next('.grand-child-block').slideToggle();
          event.preventDefault();
      });
      // スマートフォン：カテゴリメニュー - 一覧上部カテゴリ
      $(document).on('click','.smp-list-category .has-child>a', function(event){
        var $this = $(this);
        $this.closest('h3').next('.child-category').slideToggle();
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
        event.preventDefault();
      });
      // スマートフォン：カテゴリメニュー - 一覧上部カテゴリ(孫）
      $(document).on('click','.smp-list-category .has-grand-child h4>a', function(event){
        var $this = $(this);
        $this.closest('h4').next('.grand-child-category').slideToggle();
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
        event.preventDefault();
      });
      // スマートフォン：カテゴリメニュー - 一覧下部カテゴリ親要素
      $(document).on('click','#smp-category-menu .smp-menu-key.on > a', function(event){
        var $this = $(this);
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
          $this.next('.dropdown-menu').slideToggle();
          event.preventDefault();
      });
      // スマートフォン：カテゴリメニュー - 一覧下部カテゴリ子要素
      $(document).on('click','#smp-category-menu .smp-menu-key.on .has-child', function(event){
        var $this = $(this);
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
          $this.next('.child-block').slideToggle();
          event.preventDefault();
      });
      // スマートフォン：カテゴリメニュー - 一覧下部カテゴリ孫要素
      $(document).on('click','#smp-category-menu .smp-menu-key.on .has-grand-child h3', function(event){
        var $this = $(this);
        if($this.hasClass('select')){
          $this.removeClass('select');
        }else{
          $this.addClass('select');
        }
          $this.next('.grand-child-block').slideToggle();
          event.preventDefault();
      });

      // デスクトップ:商品画像切り替え - 商品詳細
      var $mainItemSrc = $('#main-item-block img').attr('src');
      $(document).on({
        'mouseenter':function(){
          var $thumbImgSrc = $(this).find('img').attr('src');
          $('#main-item-block').find('img').attr('src',$thumbImgSrc);
        },
        'mouseleave':function(){
          $('#main-item-block').find('img').attr('src',$mainItemSrc);
        }
      }, '#item-image .photo_thumbs_block.on li');

      // デスクトップ:メガメニュー表示 - グローバルナビ
      $(document).on({
        'mouseenter':function(){
          if($(this).hasClass('pc-menu-key')){
            $(this).addClass('open');
          }
        },
        'mouseleave':function(){
          if($(this).hasClass('pc-menu-key')){
            $(this).removeClass('open');
          }
        }
      }, '#global-navi.pc-on .dropdown');

      // デスクトップ:メガメニュー表示 - グローバルナビ(文字カラーの変更)
      $(document).on({
        'mouseenter':function(){
          if($(this).hasClass('pc-select')){
            $(this).not('select').addClass('active');
          }
        },
        'mouseleave':function(){
          if($(this).hasClass('pc-select')){
            $(this).not('select').removeClass('active');
          }
        }
      }, '#menu-category .dropdown');


  });




/******************
ResiveEvent finish
*******************/

  //boxer
  $("._zoom1").boxer();


  $(function(){
    trueMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test((window.navigator.userAgent||window.navigator.vendor||window.opera));
    if(trueMobile){
      $(".view_zoom").boxer();
    }else{
      $(".view_zoom").boxer({
        minWidth:600,
        top:50
        });
    }
  });

  //boxer(viewSuccess)
  $('#size-detail-boxer').boxer();
  $('#about-size-boxer').boxer();
  //mobile
  var ua = is_mobile();



/********************************
 *flexsliderSetting*
********************************/
  //@grandtop main
  $('#grandtop-main .flexslider').flexslider({
    animation: "slide",
    /*direction: "vertical",*/
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    pauseOnAction: false,
    pauseOnHover: true,
    useCSS:false,
    start: function(){
      //responsive map
      $('img[usemap]').rwdImageMaps();
    }
  });

  //grandtop theme
  $('#grandtop-theme .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: false,
    itemWidth: 282,
    itemMargin: 24,
    maxItems: 4,
    minItems: 3,
    move: 1,
    useCSS:false
  });



//grandtop theme
  $('#grandtop-theme_smp .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: false,
    itemWidth: 140,
    // itemMargin: 24,
    maxItems: 2,
    // minItems: 3,
    move: 1,
    useCSS:false
  });



  //@shoptop main
  $('#shoptop-main .flexslider').flexslider({
    animation: "slide",
    /*direction: "vertical",*/
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    pauseOnAction: false,
    pauseOnHover: true,
    useCSS:false,
    start: function(){
      //responsive map
      $('img[usemap]').rwdImageMaps();
    }
  });

  //shoptop(mens)
  $('#fit-slider .flexslider').flexslider({
      animation: "slide",
      slideshow: true,
      slideshowSpeed: 6000,
      directionNav: true,
      controlNav: false,
      maxItems: 3,
      minItems: 3,
      itemWidth:256,
      move: 1,
      useCSS:false
    });

  //@shoptop main
  $('#categorytop-main .flexslider').flexslider({
    animation: "slide",
    /*direction: "vertical",*/
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    pauseOnAction: false,
    pauseOnHover: true,
    useCSS:false,
    start: function(){
      //responsive map
      $('img[usemap]').rwdImageMaps();
    }
  });

  //recently-recommend-items
  $('#recently-recommend-items .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: false,
    itemWidth: 129,
    itemMargin:24,
    minItems: 6,
    useCSS: false
  });
  //footer-items(features)
  $('#footer-items .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: false,
    itemWidth: 300,
    minItems: 2,
    move: 1,
    useCSS: false
  });

  //vintage clothing
  $('#lvc-main .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    itemWidth: 400,
    minItems: 1,
    move: 1,
  });
  //lvcEpochVisual
  $('#epoch-slider .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: false,
    itemWidth: 214,
    maxItems: 4,
    minItems: 3,
    move: 1,
    useCSS:false
  });

  //made&crafted
  $('#made-main .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    itemWidth: 400,
    minItems: 1,
    move: 1,
  });

  $('#view-slider.flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    itemWidth: 600,
    itemMargin:0,
    minItems: 1,
    move: 1,
    useCSS:false
  });
  $('.five-col-slider .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    pauseOnAction: false,
    pauseOnHover: true,
    useCSS:false,
    minItems: 3,
    itemMargin:0,
    itemWidth: 240
  });

  $('.four-col-slider .flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 6000,
    directionNav: true,
    controlNav: true,
    pauseOnAction: false,
    pauseOnHover: true,
    useCSS:false,
    minItems: 3,
    itemMargin:0,
    itemWidth: 240,
  });

/********************************
 *flexsliderFinish*
********************************/


   //pagetop
  $('.pagetop-common').click(function(){
    $("html,body").animate({scrollTop: 0}, 500);
    return false;
  });

});

function is_mobile(){
  var ua = "";
  var is_mobile_flag = false;
  ua = navigator.userAgent.toLowerCase();
  if(ua.match(/iPhone|iPod|iPad|Android/i)){
    is_mobile_flag = true;
  }
  return is_mobile_flag;
}

//-----------------------
// @search limit stock sort
//------------------------

//Change Limit
function change_limit(obj, path){
  var protocol = location.protocol;
  var host = location.host;
  var index = obj.selectedIndex;
  var value = obj.options[index].value;
  location.href = protocol+"//"+host+path+'/limit/'+value;
}

//Change available
function change_available(obj, path){
  var protocol = location.protocol;
  var host = location.host;
  var index = obj.selectedIndex;
  var value = obj.options[index].value;

  if(value==1){
  location.href = protocol+"//"+host+path+'/stock_available/'+value;
  }else{
  location.href = protocol+"//"+host+path;
  }
}


//-----------------------
// hover
//------------------------
  $("._hover img").hover(function(){
    $(this).stop(true,true).animate({"opacity":"0.7"},100,"swing");
  },function(){
    $(this).stop(true,true).animate({"opacity":"1"},100,"swing");
  });

$(function(){
  $('.listSetting > li').hover(function(){
    if($(this).children().hasClass('product-color-set')){
      $(this).find('.product-color-set').css({/*"z-index":"-1",*/"display":"block"});
      $(this).find('.list-item-text').css({"z-index":"100"});
      $(this).css({"z-index":"100"});
    }
  },function(){
    if($(this).children().hasClass('product-color-set')){
      $(this).find('.product-color-set').css({/*"z-index":"0",*/"display":"none"});
      $(this).find('.list-item-text').css({"z-index":"0"});
      $(this).css({"z-index":"0"});
    }
  });
});

  //global-navi
  $(function(){
    var $userMenu = $('#user-menu'),
        $levis = $('.icn_levis',$userMenu);
      $levis.hover(function(){
        $levis.addClass('open');
      },function(){
        $levis.removeClass('open');
      }
      );
  });
//-----------------------
// lazyImage
//------------------------
var ua_flag = false;

$(window).load(function(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.indexOf('ipad')){
    ua_flag = true;
  }else if(ua.indexOf('iphone')){
    ua_flag = true;
  }else if(ua.indexOf('android')){
    ua_flag = true;
  }else{
    ua_flag = false;
  }

  if(ua_flag == true){
    $('body').lazyImage("400","swing");
  }
});

if(ua_flag != true){
  $(window).scroll(function(){
    $('body').lazyScroll("1000","swing");
  });
}

//----------------------------------------------
// active link
// 現在表示中のリンクを持つ要素にクラスを追加する
// キャッシュを回避する場合に使用
//----------------------------------------------
var al_option = {};
al_option.group = "";
al_option.adcname = "active"; //追加するクラス名
al_option.cname = "li,h3"; //一番近い位置にある要素やクラス、IDの名前を指定
al_option.self_flag = false; //アクティブクラスをつけたい対象が自身であればtrue
al_option.pattern = "/category_id/[0-9]+$"; //マッチさせるパターン


//処理部分
$(function(){
  //activeLink関数で照合してマッチした値を取得
  var s_path = activeLink(al_option);
  if(s_path){
    //指定した要素にクラスを追加
    if(al_option.self_flag && al_option.cname.indexOf != ""){
      $("a[href='"+s_path+"']").addClass(al_option.adcname);
    }else{
      $("a[href='"+s_path+"']").closest(al_option.cname).addClass(al_option.adcname);
    }
  }
});

//現在のパスとパターンとの照合
function activeLink(option){
  if(!option) return;
  var al_pattern;
  if(option){
    al_pattern = option["pattern"]? option["pattern"] : "/category_id/[0-9]+$" ;
  }
  var check_path,
      search_path;
  var path = location.pathname
  var reg = new RegExp(al_pattern, "i");
  check_path = path.match(reg)? true: false;
  if(check_path){
    search_path = path.match(reg)["input"].toString();
  }else{
    search_path = null;
  }
  return search_path;
}


//-----------------------
// category accordion
//-----------------------
//sidenavi用
//listSuccess for pc
$(function(){
  $(".list-category .toggle-btn").click(function(){
    if($(this).is(".select")){
      $(this).removeClass("select");
    } else {
      $(this).addClass("select");
    }
    $(this).closest('li').find(".grand-child-category").slideToggle("normal","swing");
    return false;
  });
  $('.list-category .toggle-btn').each(function(){
      var $this = $(this);
    $this.closest('li').find(".grand-child-category").length;
    var length = $this.closest('li').find(".grand-child-category li").length;
    if(length == 0){$this.css({display:'none'})};
    });
  //孫カテゴリが.activeを保持している場合、初期表示をする
  $grandChild = $('.grand-child-category');
  $active = $grandChild.find('.active');
  if($('li',$grandChild).hasClass('active')){
    $active.closest('ul').addClass('select');
    $active.closest('ul').closest('li').find('.toggle-btn').addClass('select');
  }
});
/*category-common*/
$(function(){
    $('.text-flg>a').click(function(event){
      event.preventDefault();
    });
});
//-----------------------
// affix height
//------------------------
$(function(){
  $('[data-spy="affix"]').each(function(){
    var $spy = $(this), data = $spy.data()
      , header , footer , offsetTop , offsetBottom

      offsetTop = $('#page-header').outerHeight(true) + $('.breadcrumb').outerHeight(true);
      offsetBottom = $('#page-footer').outerHeight(true);

      $spy.attr('data-offset-top', offsetTop);
      $spy.attr('data-offset-bottom', offsetBottom);

      $('[data-spy="affix"]').affix({
          offset: {
              top: offsetTop,
              bottom: offsetBottom
          }
      });

  })
});






/********************
      HEADER
*********************/
// head-menu
// animation ver
// cssを#global-nav-block.fixed{top:-50px;}にする
$(function(){
  var timer = false;
  var box    = $("#global-nav-block");
  var boxTop = box.offset().top;
  var hidden_menu = $("#head-bar"),
  $body = $('body'),
  $wrap = $('#wrapper');
  $(window).scroll(function () {
    if($(window).width()>980){
      if (timer !== false) {
      clearTimeout(timer);
      }
      timer = setTimeout(function() {
      if($(window).scrollTop() >= boxTop) {
      box.addClass("fixed");
      hidden_menu.addClass("fixed");
      //$body.css({marginTop:'41px'});
      box.stop().animate({top:0},300);
      $wrap.addClass('wrap-fixed');
      }else {
      box.removeClass("fixed");
      hidden_menu.removeClass("fixed");
      //$body.css({marginTop:0});
      box.animate({top:'-50px'},300);
      $wrap.removeClass('wrap-fixed');
      }
      },100);
    }
  });
});
//for collapse button
//smp用メニューボタン
$(function(){
  $('#menu-button .btn,#menu-close').click(function(){
    var $menuBtn = $('#menu-button'),
        $menuButtonArea = $menuBtn.closest('li');
    if($menuButtonArea.hasClass('active')){
      $menuButtonArea.removeClass('active');
      $menuButtonArea.find('img').attr('src','images/nav_menu.png');
    }else{
      $menuButtonArea.addClass('active');
      $menuButtonArea.find('img').attr('src','images/nav_menu_open.png');
    }
  });
});

$(function () {
    //ヘッダの高さ
    var headerSpacer = 60;
    $('a[href^=#]').not('[class*="flex"]').click(function(e){
        var href     = $(this).attr("href");
        var target   = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダの高さ分位置をずらす
        var position = target.offset().top - headerSpacer;
        $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
    });
});


/*shopTop(mens fit-chart)*/
$(function(){
  var $open = $('#fit-open'),
      $close = $('#fit-close'),
      $contents =$('#fit-contents');
  $open.click(function(e){
    $contents.slideDown();
    $open.hide();
    $close.fadeIn();
    return false;
  });
  $close.click(function(e){
    $contents.slideUp();
    $close.hide();
    $open.fadeIn();
    return false;
  });


});


$(function(){
  // 詳細検索 - レフトナビ
  $('.side-detailsearch, #searchDetailArea').find('select[class*=shop]').on('change', function(){
    var $this   = $(this),
        $parent = $(this).closest('.form-set'),
        $alias  = $parent.find('select[name=shop_category_code1]'),
        setVal  = $this.val(),
        gender  = setVal == 1 ? 'mens':
                  setVal == 2 ? 'womens':
                  setVal == 8 ? 'kids':
                  setVal == 3 ? 'accessories': null;
        $target   = $parent.find('select.' + gender),
        targetVal = $target.val();

    // 一時的に該当するエイリアスの全セレクトを非表示
    $alias.removeClass('active').val(0);
    $alias.attr({'disabled':'disabled'});
    if (gender != null) {
      // ターゲットのみ再表示し、disabledを削除
      $target.addClass('active').val(targetVal);
      $target.removeAttr('disabled');
    } else {
      $parent.find('select.mens').addClass('active');
    }

    // イベント実行後にアイテムカテゴリをクリア
    $('.side-detailsearch').find('select[name*=shop_category_code1]').change();

  });
  // ロード時にイベントを実行
  $('.side-detailsearch').find('select[class*=shop]').change();


  $('.side-detailsearch').find('select[name*=shop_category_code1]').on('change', function(){
    var $this   = $(this),
        $parent = $(this).closest('.form-set'),
        setVal  = $this.val(),
        $target = $parent.find('select[class*=shop]');

    // ショップカテゴリコードの有無によってショップIDの受け渡しを制御
    if (setVal == 0) {
      $target.attr({'name':'shop_id'});
    } else {
      $target.attr({'name':'shop'});
    }
  });
});
