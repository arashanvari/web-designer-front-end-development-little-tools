/*
    vivapercuore的小工具槽
*/

/*
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
禁止运行运营商插入js
<meta http-equiv="Content-Security-Policy" content="script-src 'self'">
禁止百度转码
<meta http-equiv="Cache-Control" content="no-transform" />
<meta name="applicable-device" content="pc,mobile">
<meta name="MobileOptimized" content="width"/>
<meta name="HandheldFriendly" content="true"/>
<meta http-equiv="Cache-Control" content="no-siteapp" />
*/


/*  查看边界   */

[].forEach.call($$("*"), function(a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });

[].forEach.call(document.querySelectorAll("*"), function(a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });


//获取滚动值
function getscroll() {
    scrollh = window.scrollY
    return scrollh
}
//获取滚动值

//----------------------------------------------------fetch 封装

postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

//----------------------------------------------------fetch 封装


function hasClass(ele, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ');
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

//发布订阅者模式  事件
game.prototype.on = function(eventName, callback) {
    //这里判断他是不是第一次添加(订阅)
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback]
    }
};
game.prototype.emit = function(eventName, ...args) {
    if (this._events[eventName]) {
        this._events[eventName].forEach(cb => cb(...args));
    }
};


// toast
function toast(msg, duration, height) { //字符串   显示多久   显示位置距离顶部高度
    duration = isNaN(duration) ? 2000 : duration; //2000是默认显示时长
    let m = document.createElement('div');
    m.innerHTML = msg;
    m.className = "toast";
    m.style.top = height || "50%"
    m.style.minWidth = "10vw"
    m.style.background = "#000"
    m.style.opacity = "0.75"
    m.style.color = "#fff"
    m.style.lineHeight = " 5vw"
    m.style.fontSize = "3.6vw"
    m.style.textAlign = "center"
    m.style.borderRadius = "2vw"
    m.style.position = "fixed"
    m.style.index = "999999"
    m.style.left = "50%"
    m.style.transform = "translateX(-50%)"
    m.style.fontWeight = "500"
    m.style.padding = " 3vw 4.1vw"
    m.style.wordWrap = "break-word"
    m.style.width = "70vw"
    m.style.zIndex = "9999999"
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5; //设置渐隐时长
        m.style.transition = 'transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () { document.body.removeChild(m) }, d * 1000);
    }, duration);
}

var full = {
    //全屏代码
    launchFullscreen(element) {
        try {
            if ($(".video_main").offset().height < $(".video_main").offset().width) {
                screen.orientation.lock('landscape')
            }
        } catch (error) {

        }
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    },
    //退出全屏
    exitFullscreen() {
        try {

            screen.orientation.lock("natural");
        } catch (error) {

        }
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    },
    IsFull() { //是否全屏
        var fullscreenElement =
            document.fullscreenEnabled ||
            document.mozFullscreenElement ||
            document.webkitFullscreenElement;
        var fullscreenEnabled =
            document.fullscreenEnabled ||
            document.mozFullscreenEnabled ||
            document.webkitFullscreenEnabled;
        if (fullscreenElement == null) {
            return false;
        } else {
            return true;
        }
    }
}

/*
    -------全屏代码，另一份
*/
//反射調用
var invokeFieldOrMethod = function(element, method) {
    var usablePrefixMethod;
    ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
        if (usablePrefixMethod) return;
        if (prefix === "") {
            // 无前缀，方法首字母小写
            method = method.slice(0, 1).toLowerCase() + method.slice(1);
        }
        var typePrefixMethod = typeof element[prefix + method];
        if (typePrefixMethod + "" !== "undefined") {
            if (typePrefixMethod === "function") {
                usablePrefixMethod = element[prefix + method]();
            } else {
                usablePrefixMethod = element[prefix + method];
            }
        }
    });

    return usablePrefixMethod;
};

//進入全屏
function launchFullscreen(element) {
    //此方法不可以在異步任務中執行，否則火狐無法全屏
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.oRequestFullscreen) {
        element.oRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    } else {
        var docHtml = document.documentElement;
        var docBody = document.body;
        var videobox = document.getElementById('videobox');
        var cssText = 'width:100%;height:100%;overflow:hidden;';
        docHtml.style.cssText = cssText;
        docBody.style.cssText = cssText;
        videobox.style.cssText = cssText + ';' + 'margin:0px;padding:0px;';
        document.IsFullScreen = true;
    }
}
//退出
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.oRequestFullscreen) {
        document.oCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else {
        var docHtml = document.documentElement;
        var docBody = document.body;
        var videobox = document.getElementById('videobox');
        docHtml.style.cssText = "";
        docBody.style.cssText = "";
        videobox.style.cssText = "";
        document.IsFullScreen = false;
    }
}
document.getElementById('fullScreenBtn').addEventListener('click', function() {
    launchFullscreen(document.getElementById('video'));
    window.setTimeout(function exit() {
        //檢查瀏覽器是否處於全屏
        if (invokeFieldOrMethod(document, 'FullScreen') || invokeFieldOrMethod(document, 'IsFullScreen') || document.IsFullScreen) {
            exitFullscreen();
        }
    }, 5 * 1000);
}, false);
/*
    -------全屏代码，另一份
*/



//--------------------------------------------获取浏览器宽高-----------------------------------------------------
var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

var h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
window.addEventListener("resize", resize)

function resize() {
    var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
}
//---------------------------------------------获取浏览器宽高----------------------------------------------------

//--------------------------------------------判断是pc还是手机--------------------------------------------
function mobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}
//--------------------------------------------判断是pc还是手机--------------------------------------------


//对HTMLImageElement原型进行扩展，增加了stop()和play()两个方法
var image = document.getElementsByTagName("img")[0];
// 停止gif图片
image.stop();
// 播放gif图片
image.play();

function gifExpand() { //gif增加停止，播放功能
    if ('getContext' in document.createElement('canvas')) {
        HTMLImageElement.prototype.play = function() {
            if (this.storeCanvas) {
                // 移除存储的canvas
                this.storeCanvas.parentElement.removeChild(this.storeCanvas);
                this.storeCanvas = null;
                // 透明度还原
                image.style.opacity = '';
            }
            if (this.storeUrl) {
                this.src = this.storeUrl;
            }
        };
        HTMLImageElement.prototype.stop = function() {
            var canvas = document.createElement('canvas');
            // 尺寸
            var width = this.width,
                height = this.height;
            if (width && height) {
                // 存储之前的地址
                if (!this.storeUrl) {
                    this.storeUrl = this.src;
                }
                // canvas大小
                canvas.width = width;
                canvas.height = height;
                // 绘制图片帧（第一帧）
                canvas.getContext('2d').drawImage(this, 0, 0, width, height);
                // 重置当前图片
                try {
                    this.src = canvas.toDataURL("image/gif");
                } catch (e) {
                    // 跨域
                    this.removeAttribute('src');
                    // 载入canvas元素
                    //canvas.style.position = 'absolute';
                    // 前面插入图
                    this.parentElement.insertBefore(canvas, this);
                    // 隐藏原图
                    this.style.opacity = '0';
                    // 存储canvas
                    this.storeCanvas = canvas;
                }
            }
        };
    }
}

function getclass(name, fn) { //.style.width=50
    var x = document.getElementsByClassName(name);
    var i;
    for (i = 0; i < x.length; i++) {
        fn(x[i])
    }
}

/*
 @keyframes loading{
    from {transform: rotateX(0deg);}
    to {transform: rotateX(360deg);}
}

.loading{
    animation: loading 1 linear infinite;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABoJJREFUWAnNV3tMU1cYv7ellEIyLFm2ZYnMBYhpMGAqEZXHwDgjkbIBinEWTdzUZDHDuZglxmzLlixLZpxscVGz/SEMHyBbGl7hj8piIpANBBYNa3no9ofLMplbAantvffs991XL6QtCP/sJLffud/5Hr/zPc495bj/yeBXgmNsbKyCMc7N81xTVlaWZyW2lg3k3r17SeGw8IgxlgQAT5KTbfbVq1fPLRdMwmKKPt/4exzHtpnN/InMzMw7mjzP83YCgYfDY52dnbVjTQcyPDycLYrSacYkb15e3mlNLxY1xVogPkLv5DgJRtgOSWJevD9jlCcQkiTJj5FPcoIgeEVR3CEI4uf9/f0bjOvR5nGBmEymh1ASSBFOnwP5gOba0EDAocaSaSAQOAXgz6vrAtbJTtwRF0hGRsbvKMSvNQsw/s7ExEQWvQMY04BQZLQxODiYiZTUKWsEkJ0vKCj4TVuPReMCISWr1foRyBTNMSwI9RmaYJfwJaqpEblwOCyHBewz4CfSGvD9DdEPSX6xMa9r/P6JKuzgWZvN2mjsAOT8bTg4RzunnTJmXr9u3dqRkZFfBgHICd5QXt4GJ6KREwqFRxQ5AsKOFhUVndNA9Pb22qanp2slyfSwrOzV7zU+UT0icHaQMbEVAb8wNxf8Fe81miC65QIwDCkgWJCx0AytpaXZC5G6QoDHI6drFjJBqhmAGC4sLDxPfBo3btyomZmZGUV6YSvc2t7e/qayovzq7csYnwJTMhdG0uH4mt/vP4o2rcMzBGAlwaDwLsDeysnJmSBBNWq3FFMchzad6Ovrc0kSX2CxJHwBPbGnp2c9gNUjdcXqRpBWCSoM/iJDTw2cm8bHx88DwFuYy3xQ2hm02OsOh6Mtora0GUCUo409AGAiEIgG2aMi/9blKj8CoIRIHnpqiIlj+rDZbMrHvE9RlKgoTajDY5rC01CAOEYgKFWKPbEfRZxfUeE6ZARBNvXUaA7Qsj8DdIHP53sDyp9inobAnNXWn4YiRWcBYiMigU+BdLK8vPwyAER6fanGAMKE2rAuVT6aXGdnp5XsRFsz8uRamJycXBsOSw6gx7tySgoCpTM8mpub6zMqLGfu8XStRTM5EGHZH6UKxhmiM1pTUyPb532+ySKc4j0QMqsCaj7lb4iI9tzqdDpvLgcA6aBNi9AxPbBthm/1HNIp7Xrrvn37bpp4XnCS0EIQ1CxQBJ/hw7f8ARB04JmpY0DxMGoAea76le0n2Gy2xkBgejucrqNoRVBLmLI7ycnJDcuHwXGK/cB22FDtKx0LUFS0d5KSklZkfyXYourKxRNthaKDe0QlkL+wZcuWiygs+ToQTTYWr7m52Yy1w7Dx5549e36I17pRgfT1DeSjgOtFUchX8sp9U1JSfCiWw1j8q1evXoA+gFAW2E/4qXO73f3R5OcdaLdv334xFAp/JkkhNwzw9E1QaoYlR1NejAcbKUqRyu26ERHpvXTpUlNiYuL7e/fufWDU1w+agYGBjGAwdBdRqAUAFQQBkX7EYVhnVFrqHIVYR/q0GRqUbhB3KBS629jYmCkz1R89Imizg9jBKmpb2gXofSieKC0tvU6y3d3du7B+Ee3s3bmzrCZavsnRNQzIbcP8SFVVVQtUS+G0Gjzcfbk1eGjADzsIelJ+w48eEcy/A2ZyHgA9BerQQHi93pfw3ghjuLmLu9ra2orJgMfjqWhtbW1uaWl5jd5RnEU4G3bjseNpuHLlyhri19bWtqanpzsA/hQe2Ofu4z4Mf5Exr1jhLAG3LB73inBEhOO6urqayYEaqX/NZvPLKSkpc1NTU48Ajv5SPIEDu8Viob8V98FLBY9MXD9w4MBuoy2UgAW3NIZNzutCY0Q4GBMWgkBKihUQcr3QifgJvqKPHj9+vAr8JLwTz4q5vbKy8h/Qj1UQ5H9XQ0PDK0YgZH8hCFqfB8SoQHMYNOFOUa84k49oP25lX9JaMBjUT2E4J5Y8srOzv8KGjB/KerKjrceicQU6Ojo24da+noAoRSwdN0ZMjQZFRLevrh/XGACR29TUtFl7j0XjAoERP+LyAJScXa6uru4wGqJzhqJB68axf//+TkSliXigf+DcgJ34Iy4Ql8v1ENW9GY7K0Ipuoyk4EClK2oBMJD9golNqoVuG6SbcOf7S5GLReV0TSygWH4U4CABOgBpCFJyx5JbC1w+0pQgvlMHJWYhT0pmamjq0cO1p3/8DI2FwyZxuN/sAAAAASUVORK5CYII=");
}


loading 动画
*/





//--------------------------------------------获取浏览器滚动条大小--------------------------------------------
function getScrollWidth() { //获取浏览器滚动条大小
    var noScroll, scroll, oDiv = document.createElement("DIV");
    oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
    noScroll = document.body.appendChild(oDiv).clientWidth;
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    document.body.removeChild(oDiv);
    return noScroll - scroll;
}
//--------------------------------------------获取浏览器滚动条大小--------------------------------------------

function touching() { //被触摸到的对象半透明
    this.style.opacity = 0.6;
}

function touchend() { //离开时恢复透明度
    this.style.opacity = 1;
}

//--------------------------------------------获取元素的左上角在页面中距离整个页面顶端和左边的距离--------------------------------------------
element.getBoundingClientRect() //获取元素左上角离屏幕左上角距离

function getObjXy(obj) { //html元素相对于视窗的位置集合
    var xy = obj.getBoundingClientRect();
    var top = xy.top - document.documentElement.clientTop + document.documentElement.scrollTop, //document.documentElement.clientTop 在IE67中始终为2，其他高级点的浏览器为0
        bottom = xy.bottom,
        left = xy.left - document.documentElement.clientLeft + document.documentElement.scrollLeft, //document.documentElement.clientLeft 在IE67中始终为2，其他高级点的浏览器为0
        right = xy.right,
        width = xy.width || right - left, //IE67不存在width 使用right - left获得
        height = xy.height || bottom - top;
    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height
    }
}


function getElementLeft(element) {　　
    var actualLeft = element.offsetLeft;　　
    var current = element.offsetParent;　　
    while (current !== null) {　　　　
        actualLeft += current.offsetLeft;　　　　
        current = current.offsetParent;　　
    }　　
    return actualLeft;
}

function getElementTop(element) {　　
    var actualTop = element.offsetTop;　　
    var current = element.offsetParent;　　
    while (current !== null) {　　　　
        actualTop += current.offsetTop;　　　　
        current = current.offsetParent;　　
    }　　
    return actualTop;
}
//--------------------------------------------获取元素的左上角在页面中距离整个页面顶端和左边的距离--------------------------------------------

function getElementBottom(element) {　　
    var actualTop = element.offsetTop;　　
    var current = element.offsetParent;　　
    while (current !== null) {　　　　
        actualTop += current.offsetTop;　　　　
        current = current.offsetParent;　　
    }　　
    actualTop += element.offsetHeight
    return actualTop;
}
//--------------------------------------------获取元素的底部离页面顶端的距离--------------------------------------------




//进入全屏
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}

  //是否处于全屏中
function isFullscreen() {
    return document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement || false;
}


//--------------------------------------------封装原生ajax--------------------------------------------
/*
 * 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
function ajax(opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function() {};
    opt.fail = opt.fail || function() {};
    var xmlHttp = null;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var params = [];
    for (var key in opt.data) {
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.withCredentials = true;
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData); // JQ 中：crossDomain: true, xhrFields:{withCredentials: true},    用于跨域时附带cookies信息防止错误
    } else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            opt.success(xmlHttp.responseText);
        }
        if (xmlHttp.readyState == 4 && xmlHttp.status !== 200) {
            opt.fail(status);
        }
    };
}

/*         使用示范
ajax({
    method: 'POST',
    url: 'test.php',
    data: {
        name1: 'value1',
        name2: 'value2'
    },
    success: function (response) {
       console.log(response)
    },
    fail: function (status) {
        console.log(status)
    }
});
*/
//--------------------------------------------封装原生ajax--------------------------------------------


var charset = document.characterSet ? document.characterSet : document.charset;
//判读网页编码




//js深拷贝
function DeepCopy(obj) {
    // Hash表 记录所有的对象引用关系
    let map = new WeakMap();

    function dp(obj) {
        let result = null;
        let keys = null,
            key = null,
            temp = null,
            existObj = null;

        existObj = map.get(obj);
        // 如果这个对象已被记录则直接返回
        if (existObj) {
            return existObj;
        }
        keys = Object.keys(obj);
        result = {};
        // 记录当前对象
        map.set(obj, result);
        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            temp = obj[key];
            // 如果字段的值也是一个对象则递归复制
            if (temp && typeof temp === 'object') {
                result[key] = dp(temp);
            } else {
                // 否则直接赋值给新对象
                result[key] = temp;
            }
        }
        return result;
    }
    return dp(obj);
}
//js深拷贝



//----------------------检测是否微信----------------------------
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
//----------------------检测是否微信----------------------------



//----------------------强制转换为数字----------------------------
function tonum(num) {
    if (typeof(num) == "string") {
        return parseInt(num)
    }
    if (typeof(num) == "number") {
        return num
    }
}
//----------------------强制转换为数字----------------------------



//------------------------------------------------------toast调用--------------------------------------------------------
function Toast(msg, duration, height) { //字符串   显示多久   显示位置距离顶部高度
    duration = isNaN(duration) ? 3000 : duration; //3000是默认显示时长
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.className = "toast";
    m.style.top = height || m.style.top
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5; //设置渐隐时长
        m.style.transition = 'transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
}
var toast = Toast //大小写通用
    /*
    .toast {
        width: 60%;
        min-width: 2rem;
        background: #000;
        opacity: 0.75;
        min-height: 0.75rem;
        color: #fff;
        line-height: 0.75rem;
        font-size: 0.35rem;
        text-align: center;
        border-radius: 0.0666666666666667rem;
        position: fixed;
        top: 80%;
        left: 20%;
        z-index: 999999;
        font-weight: bold;
        word-wrap: break-word;
    }
    //css文件支持
    */
    //------------------------------------------------------toast调用--------------------------------------------------------



function getElementLeft(element) {　　　　
    var actualLeft = element.offsetLeft;　　　　
    var current = element.offsetParent;　　　　
    while (current !== null) {　　　　　　
        actualLeft += current.offsetLeft;　　　　　　
        current = current.offsetParent;　　　　
    }　　　　
    return actualLeft;　　
}　　
function getElementTop(element) {　　　　
    var actualTop = element.offsetTop;　　　　
    var current = element.offsetParent;　　　　
    while (current !== null) {　　　　　　
        actualTop += current.offsetTop;　　　　　　
        current = current.offsetParent;　　　　
    }　　　　
    return actualTop;　　
}

/*

var info = {
    
}
window.location.href = url + "?" + JSON.stringify(info)

var getInfo = window.location.search.slice(window.location.search.lastIndexOf("?") + 1);
var a = JSON.parse(decodeURI(getInfo))
*/













//------------------------------------------------------获取在canvas中的鼠标坐标值-------------------

//将utils定义为window对象下的一个属性，属性值为对象
window.utils = {};
//在utils对象上定义捕获坐标的方法
window.utils.getmousexy = function(element) {
        //定义一个名为mouse的对象
        var mouse = { x: 0, y: 0 };

        //为元素绑定mousemove事件
        element.addEventListener('mousemove', function(event) {
            var x, y;

            //获取鼠标位于当前屏幕的位置， 并作兼容处理
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else {
                x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            //将当前的坐标值减去元素的偏移位置，即为鼠标位于当前canvas的位置
            x -= element.offsetLeft;
            y -= element.offsetTop;
            mouse.x = x;
            mouse.y = y;
        }, false);
        //返回值为mouse对象
        return mouse;
    }
    //------------------------------------------------------获取在canvas中的鼠标坐标值-------------------

/*           使用方法示例
window.onload = function(){
    var canvas = document.getElementById('canvas'),
    //将canvas传入，该方法会返回一个包含属性x和y的对象
    mouse = utils.getmousexy(canvas);
    //为canvas绑定mousedown事件，当鼠标按下的时候打印出当前鼠标相对于canvas的坐标值
    canvas.addEventListener('mousedown',function(event){
      console.log("x:" +mouse.x +",y:" + mouse.y);
})
 */

//------------------------------------------------------获取在canvas中的触摸操作坐标值-------------------
window.utils.captureTouch = function(element) {
    var touch = {
        x: null,
        y: null,
        isPressed: false,
        event: null
    };
    var body_scrollLeft = document.body.scrollLeft,
        element_scrollLeft = document.documentElement.scrollLeft,
        body_scrollTop = document.body.scrollTop,
        element_scrollTop = document.documentElement.scrollTop,
        offsetLeft = element.offsetLeft,
        offsetTop = element.offsetTop;

    // 绑定touchstart事件
    element.addEventListener('touchstart', function(event) {
        touch.isPressed = true;
        touch.event = event;
    }, false);

    // 绑定touchend事件
    element.addEventListener('touchend', function(event) {
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
    }, false);

    //绑定touchmove事件
    element.addEventListener('touchmove', function(event) {
        var x, y,
            touch_event = event.touches[0]; //第一次touch

        if (touch_event.pageX || touch_event.pageY) {
            x = touch_event.pageX;
            y = touch_event.pageY;
        } else {
            x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
            y = touch_event.clientY + body_scrollTop + element_scrollTop;
        }
        //剪去偏移量
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
    }, false);
    //返回touch对象
    return touch;
};
//------------------------------------------------------获取在canvas中的触摸操作坐标值-------------------


function GetRequest() {
    var url = decodeURI(location.search); //获取url中"?"符后的字串    
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest; //返回一个对象，包含所有键值对
}

//GET URL 取参为对象


function link() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var dowloadlink = ""
    if (isAndroid) {
        dowloadlink = "http://a.app.qq.com/o/simple.jsp?pkgname=com.xigua100.infoflow&ckey=CK1380654933226"
    } else if (isiOS) {
        dowloadlink = "https://itunes.apple.com/cn/app/id1274851342?mt=8"
    } else {
        console.log(u)
    }
    return dowloadlink
} // 设备分类型跳转


function DownloadFile(fileName, content) { //直接下载文件  传入  文件名  ，内容  请自行改造blob部分
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
}


//获取标签中的属性
getAttribute()
    //略 
setAttribute()



//图片的异步加载

var imgs = document.getElementsByTagName("img");

bindEvent(window, 'scroll', lazyload);
lazyload();

function lazyload() {
    forEach(imgs, function(img, i) {
        if (!img || img.src) { return; }
        var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var ot = getAbsPoint(img).y;
        if (h + t < ot || t > ot + img.offsetHeight) {
            return;
        }
        var url = img.getAttribute("data-src");
        if (!img.src && url) {
            img.src = url;
        }
    });
}

function getAbsPoint(o) {
    var x = o.offsetLeft;
    var y = o.offsetTop;
    while (o = o.offsetParent) {
        x += o.offsetLeft;
        y += o.offsetTop
    }
    return {
        'x': x,
        'y': y
    };
}

function bindEvent(obj, evt, fun) {
    if (window.addEventListener) {
        obj.addEventListener(evt, function(e) { fun(e); }, false);
    } else {
        obj.attachEvent('on' + evt, fun);
    }
}

function forEach(array, callback, thisObject) {
    if (array.forEach) {
        array.forEach(callback, thisObject)
    } else {
        for (var i = 0, len = array.length; i < len; i++) {
            callback.call(thisObject, array[i], i, array)
        }
    }
};



//图片的异步加载




//cookies 存取

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie(key, callback, callbackf) {
    var user = getCookie(key);
    if (user != "") {
        callback()
    } else {
        callbackf()
    }
}

function DelCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
    var cval = getCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
    checkCookie(name, function*() {
        setCookie(name, '', 1)
    })
}

//cookies 存取


//innerText  
function isIE() { //ie? 
    if (window.navigator.userAgent.toLowerCase().indexOf("msie") >= 1)
        return true;
    else
        return false;
}
if (!isIE()) { //firefox innerText define 
    HTMLElement.prototype.__defineGetter__("innerText",
        function() {
            var anyString = "";
            var childS = this.childNodes;
            for (var i = 0; i < childS.length; i++) {
                if (childS[i].nodeType == 1)
                    anyString += childS[i].tagName == "BR" ? '\n ' : childS[i].textContent;
                else if (childS[i].nodeType == 3)
                    anyString += childS[i].nodeValue;
            }
            return anyString;
        }
    );
    HTMLElement.prototype.__defineSetter__("innerText",
        function(sText) {
            this.textContent = sText;
        }
    );
}
//innerText


//拦截返回键
var XBack = {};

(function(XBack) {
    XBack.STATE = 'x - back';
    XBack.element;

    XBack.onPopState = function(event) {
        event.state === XBack.STATE && XBack.fire();
        XBack.record(XBack.STATE); //初始化事件时，push一下  
        XBack.listen()
    };

    XBack.record = function(state) {
        history.pushState(state, null, location.href);
    };

    XBack.fire = function() {
        var event = document.createEvent('Events');
        event.initEvent(XBack.STATE, false, false);
        XBack.element.dispatchEvent(event);
    };

    XBack.init = function() {
        XBack.element = document.createElement('span');
        window.addEventListener('popstate', XBack.onPopState);
        XBack.record(XBack.STATE);
    };

})(XBack); // 引入这段js文件  

XBack.init();
XBack.listen = function() {
    alert("不要按返回键") //按返回键时触发
};

//拦截返回键