(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[11],{216:function(e,t,n){var r,a,o;a=[],void 0===(o="function"===typeof(r=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,r=e.replace(/^v/,"").replace(/\+.*$/,""),a=(n="-",-1===(t=r).indexOf(n)?t.length:t.indexOf(n)),o=r.substring(0,a).split(".");return o.push(r.substring(a+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function r(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function a(e,a){[e,a].forEach(r);for(var o=t(e),i=t(a),l=0;l<Math.max(o.length-1,i.length-1);l++){var c=parseInt(o[l]||0,10),u=parseInt(i[l]||0,10);if(c>u)return 1;if(u>c)return-1}var s=o[o.length-1],f=i[i.length-1];if(s&&f){var p=s.split(".").map(n),d=f.split(".").map(n);for(l=0;l<Math.max(p.length,d.length);l++){if(void 0===p[l]||"string"===typeof d[l]&&"number"===typeof p[l])return-1;if(void 0===d[l]||"string"===typeof p[l]&&"number"===typeof d[l])return 1;if(p[l]>d[l])return 1;if(d[l]>p[l])return-1}}else if(s||f)return s?-1:1;return 0}var o=[">",">=","=","<","<="],i={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return a.validate=function(t){return"string"===typeof t&&e.test(t)},a.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n);var r=a(e,t);return i[n].indexOf(r)>-1},a})?r.apply(t,a):r)||(e.exports=o)},217:function(e,t,n){e.exports=n.p+"static/media/puzztool_banner_dark.1521c511.svg"},218:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(31),i=n(27),l=n(12),c=Object(l.a)("card-deck"),u=n(216),s=n.n(u);let f;function p(e){return"".concat("puzztool","_").concat(e)}function d(){var e,t;(function(e,t){try{if(e)return 0!==s()(t,e)}catch(n){}return!0})(function(e){if(m())return window.localStorage.getItem(p(e));return null}("appVersion"),"1.0.1")&&(g(),e="appVersion",t="1.0.1",m()&&window.localStorage.setItem(p(e),t))}function m(){if(void 0===f){const t=window.localStorage,n="__storage_test__";try{t.setItem(n,n),t.removeItem(n),f=!0}catch(e){f=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}f&&d()}return f}function g(){m()&&window.localStorage.clear()}var v=n(217),h=n.n(v);n(218);t.default=function(){return a.a.createElement("div",{className:"Settings"},a.a.createElement(c,null,a.a.createElement(i.a,null,a.a.createElement(i.a.Header,null,"Saved state"),a.a.createElement(i.a.Body,null,a.a.createElement("p",null,"The most recent inputs to each tool are stored in the browser's local storage. In the event that state becomes corrupted it can be cleared using the button below."),a.a.createElement(o.a,{onClick:function(){g()},variant:"danger"},"Clear saved state"))),a.a.createElement(i.a,null,a.a.createElement(i.a.Header,null,"About"),a.a.createElement(i.a.Body,null,a.a.createElement("img",{className:"AboutLogo",src:h.a,alt:"PuzzTool logo"}),"Version: ","1.0.1",a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/puzztool/puzztool/",rel:"noopener noreferrer",target:"_blank"},"Project page")))))}}}]);
//# sourceMappingURL=11.de710ba3.chunk.js.map