!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i),u=n(2),a=o(u),c=function(){function e(){(0,r["default"])(this,e),this.HOST="http://stastistics.maka.mobi",this.API_PROJECT_PV="/api/project/pv",this.API_PROJECT_UV="/api/project/uv",this.API_PROJECT_SHARE="/api/project/share",this.API_PROJECT_REGION="/api/project/region",this.API_PROJECT_LEAVE="/api/project/leave"}return(0,a["default"])(e,[{key:"setData",value:function(e){var t=this;this.uid=e.uid,this.pid=e.pid,this.second=0,this.from=t.getParam("from"),this.countPv(),this.getProvince(),this.interval=setInterval(function(){t.second+=30,t.second>300?clearInterval(t.interval):t.countLeave()},3e4)}},{key:"countPv",value:function(e){var t=this,n="?uid="+t.uid+"&pid="+t.pid,o="&device="+t.getDevice()+"&source="+t.getViewSource(),i=t.getNowFormatDate()+"_"+t.uid+"_"+t.pid+"_uv";$.getScript(t.HOST+t.API_PROJECT_PV+n+o).done(function(e){console.log(t.getCookie(i)),null==t.getCookie(i)&&$.getScript(t.HOST+t.API_PROJECT_UV+n).done(function(e){t.setCookie(i,(new Date).getTime())})})}},{key:"countShare",value:function(e){var t=this,n="?uid="+t.uid+"&pid="+t.pid+"&source="+e;$.getScript(t.HOST+t.API_PROJECT_SHARE+n).done(function(e){})}},{key:"countRegion",value:function(e){var t=this,n="?uid="+t.uid+"&pid="+t.pid+"&province="+e;$.getScript(t.HOST+t.API_PROJECT_REGION+n).done(function(e){})}},{key:"countLeave",value:function(){var e=this,t="?uid="+e.uid+"&pid="+e.pid+"&duration="+e.second;$.getScript(e.HOST+e.API_PROJECT_LEAVE+t).done(function(e){})}},{key:"getDevice",value:function(){return/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"iPhone":/(Android)/i.test(navigator.userAgent)?"Android":"other"}},{key:"getViewSource",value:function(){var e=this,t="from="+e.from;return null==e.from&&(t="none"),t}},{key:"getProvince",value:function(){var e=this;$.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js").done(function(t){e.countRegion(remote_ip_info.province)}).fail(function(t){e.countRegion("其他")})}},{key:"setCookie",value:function(e,t,n,o){var i=1,r=new Date,u=o?o:"/";n?r.setTime(r.getTime()+parseInt(n)):r.setTime(r.getTime()+24*i*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+r.toGMTString()+";path="+u}},{key:"getCookie",value:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}},{key:"getParam",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}},{key:"getNowFormatDate",value:function(){var e=new Date,t=0,n=0,o=0,i="";return t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i+=t,i+=n>=10?n:"0"+n,i+=o>=10?o:"0"+o}}]),e}();window.statisticSDK=new c,t["default"]=window.statisticSDK},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(3),r=o(i);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},function(e,t,n){e.exports={"default":n(4),__esModule:!0}},function(e,t,n){var o=n(5);e.exports=function(e,t,n){return o.setDesc(e,t,n)}},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}}]);