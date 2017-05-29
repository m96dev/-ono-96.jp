
$.fn.touchable = function(options) {
    var defaults = {
        className: 'touchable'
    };
    var opts = $.extend(defaults, options);

    var touchable = false;
    if ( window && window.Touch ) {
        touchable = true;
    } if ( window && window.navigator && window.navigator.userAgent ) {
        var ua = window.navigator.userAgent;
        if ( ua.match(/iPhone|iPad|iPod/i) || ua.match(/Android/) )
            touchable = true;
    }

    if ( touchable ) {
        $(this).addClass(opts.className);
    }
};

$.fn.autoSpyToc = function(options) {
    var defaults = {
        target: '#auto-spy-toc'
    };
    var opts = $.extend(defaults, options);add


};

$('[data-if-touchable]').touchable();

$('body').scrollspy();
