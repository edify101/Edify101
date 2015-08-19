!function(t){"use strict";var s=function(s,o){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,o),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){t.typewrite(t.strings[t.arrayPos],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.typeSpeed,e=this;e.timeout=setTimeout(function(){var o=0,i=t.substr(s);if("^"===i.charAt(0)){var r=1;/^\^\d+/.test(i)&&(i=/\d+/.exec(i)[0],r+=i.length,o=parseInt(i)),t=t.substring(0,s)+t.substring(s+r)}if("html"===e.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}e.timeout=setTimeout(function(){if(s===t.length){if(e.options.onStringTyped(e.arrayPos),e.arrayPos===e.strings.length-1&&(e.options.callback(),e.curLoop++,e.loop===!1||e.curLoop===e.loopCount))return;e.timeout=setTimeout(function(){e.backspace(t,s)},e.backDelay)}else{0===s&&e.options.preStringTyped(e.arrayPos);var o=t.substr(0,s+1);e.attr?e.el.attr(e.attr,o):e.isInput?e.el.val(o):"html"===e.contentType?e.el.html(o):e.el.text(o),s++,e.typewrite(t,s)}},o)},o)}},backspace:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.backSpeed,e=this;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var o="";"<"!==t.substr(s).charAt(0);)o-=t.substr(s).charAt(0),s--;s--,o+="<"}var i=t.substr(0,s);e.attr?e.el.attr(e.attr,i):e.isInput?e.el.val(i):"html"===e.contentType?e.el.html(i):e.el.text(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.init()):e.typewrite(e.strings[e.arrayPos],s))},o)}},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(o){return this.each(function(){var e=t(this),i=e.data("typed"),r="object"==typeof o&&o;i||e.data("typed",i=new s(this,r)),"string"==typeof o&&i[o]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

$(function(){

    // Checking for CSS 3D transformation support
    $.support.css3d = supportsCSS3D();

    var formContainer = $('#formContainer');

    // Listening for clicks on the ribbon links
    $('.flipLink').click(function(e){

        // Flipping the forms
        formContainer.toggleClass('flipped');

        // If there is no CSS3 3D support, simply
        // hide the login form (exposing the recover one)
        if(!$.support.css3d){
            $('#login').toggle();
        }
        e.preventDefault();
    });

    formContainer.find('form').submit(function(e){
        // Preventing form submissions. If you implement
        // a backend, you will want to remove this code
        e.preventDefault();
    });

    // A helper function that checks for the
    // support of the 3D CSS3 transformations.
    function supportsCSS3D() {
        var props = [
            'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
        ], testDom = document.createElement('a');

        for(var i=0; i<props.length; i++){
            if(props[i] in testDom.style){
                return true;
            }
        }

        return false;
    }
});


console.log("yash");