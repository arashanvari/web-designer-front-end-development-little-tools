//移动端自适应
(function(win, lib) {
    'use strict';
    var DesignWidth = 375,
        doc = win.document,
        docEl = doc.documentElement,
        metaEl = doc.querySelector('meta[name="viewport"]'),
        flexibleEl = doc.querySelector('meta[name="flexible"]'),
        dpr = 0,
        scale = 0,
        tid, flexible = lib.flexible || (lib.flexible = {});
    if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        match && (scale = parseFloat(match[1]), dpr = parseInt(1 / scale))
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/),
                maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            initialDpr && (dpr = parseFloat(initialDpr[1]), scale = parseFloat((1 / dpr).toFixed(2))), maximumDpr && (dpr = parseFloat(maximumDpr[1]), scale = parseFloat((1 / dpr).toFixed(2)))
        }
    }
    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi),
            isIPhone = win.navigator.appVersion.match(/iphone/gi),
            devicePixelRatio = win.devicePixelRatio;
        dpr = isIPhone ? 3 <= devicePixelRatio && (!dpr || 3 <= dpr) ? 3 : 2 <= devicePixelRatio && (!dpr || 2 <= dpr) ? 2 : 1 : 1, scale = 1 / dpr
    }
    if (docEl.setAttribute('data-dpr', dpr), !metaEl)
        if (metaEl = doc.createElement('meta'), metaEl.setAttribute('name', 'viewport'), metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'), docEl.firstElementChild) docEl.firstElementChild.appendChild(metaEl);
        else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl), doc.write(wrap.innerHTML)
        }

    function refreshRem() {
        var a = docEl.getBoundingClientRect().width,
            b = a / (DesignWidth / 100);
        console.log('1rem=', b, 'px', '\u5BBD\u5171', a / b, 'rem'), docEl.style.fontSize = b + 'px', flexible.rem = win.rem = b
    }
    win.addEventListener('resize', function() { clearTimeout(tid), tid = setTimeout(refreshRem, 300) }, !1), win.addEventListener('pageshow', function(a) { a.persisted && (clearTimeout(tid), tid = setTimeout(refreshRem, 300)) }, !1), 'complete' === doc.readyState ? doc.body.style.fontSize = 12 * dpr + 'px' : doc.addEventListener('DOMContentLoaded', function() { doc.body.style.fontSize = 12 * dpr + 'px' }, !1), refreshRem(), flexible.dpr = win.dpr = dpr, flexible.refreshRem = refreshRem, flexible.rem2px = function(a) { var b = parseFloat(a) * this.rem; return 'string' == typeof a && a.match(/rem$/) && (b += 'px'), b }, flexible.px2rem = function(a) { var b = parseFloat(a) / this.rem; return 'string' == typeof a && a.match(/px$/) && (b += 'rem'), b };
})(window, window['lib'] || (window['lib'] = {}));
//移动端自适应