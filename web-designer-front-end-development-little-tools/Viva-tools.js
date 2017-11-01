 /*
                     
                     
                     
                                                   vivapercuore的小工具槽
                     
                     
                     
                  */


 //获取滚动值
 function getscroll() {
     scrollh = document.getElementById("body").scrollTop
     return scrollh
 }
 //获取滚动值


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


 //--------------------------------------------简化选择器--------------------------------------------
 function getid(id) { //简化选择器
     var duixiang = window.document.getElementById(id)
     return duixiang
 }
 //--------------------------------------------简化选择器--------------------------------------------



 function getclass(name, fn) { //.style.width=50
     var x = document.getElementsByClassName(name);
     var i;
     for (i = 0; i < x.length; i++) {
         fn(x[i])
     }
 }


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
         xmlHttp.open(opt.method, opt.url, opt.async);
         xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
         xmlHttp.send(postData);
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