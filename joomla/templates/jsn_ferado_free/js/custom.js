/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function(t){"use strict";if(t.fn.counterUp=function(e){var n=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),u=n,a=function(){var t=[],n=u.time/u.delay,a=e.text(),r=/[0-9]+,[0-9]+/.test(a);a=a.replace(/,/g,"");for(var o=(/^[0-9]+$/.test(a),/^[0-9]+\.[0-9]+$/.test(a)),c=o?(a.split(".")[1]||[]).length:0,i=n;i>=1;i--){var d=parseInt(a/n*i);if(o&&(d=parseFloat(a/n*i).toFixed(c)),r)for(;/(\d+)(\d{3})/.test(d.toString());)d=d.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(d)}e.data("counterup-nums",t),e.text("0");var s=function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),u.delay):(delete e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))};e.data("counterup-func",s),setTimeout(e.data("counterup-func"),u.delay)};e.waypoint(a,{offset:"100%",triggerOnce:!0})})},"#jsndb"==window.location.hash){var e;e=setInterval(function(){t("#jsn-demo-builder-toggle").length&&(clearInterval(e),t("#jsn-demo-builder-button").get(0).dispatchEvent(new Event("click")))},1e3)}}(jQuery);