!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){var e,t;e=[],t=function(){var t=window.innerHeight;e.forEach(function(e){var r=e.getBoundingClientRect();if(function(e){var t=e.top;return t+e.height>=0&&t<=window.innerHeight}(r)){var o=r.top,l=e.meScroll.offset,n=Math.max(t,r.height),c=-(o-t*(1-l))/(n*(1-e.meScroll.endPoint));e.meScroll.allowOverscroll||(c=Math.max(0,Math.min(1,c))),e.meScroll.reverse&&(c=1-c),e.style.setProperty("--mescroll-value",c),e.style.setProperty("--mescroll-percent",100*c+"%")}})},window.addEventListener("DOMContentLoaded",function(){(e=Array.from(document.querySelectorAll("[data-mescroll]"))).forEach(function(e){e.style.setProperty("--mescroll-value",0),e.style.setProperty("--mescroll-percent","0%")}),e.forEach(function e(t){t.meScroll=t.meScroll||{};var r=t.meScroll.styles||window.getComputedStyle(t),o=parseFloat(r.getPropertyValue("--mescroll-offset")||"0")/100,l=parseInt(r.getPropertyValue("--mescroll-end-point")||"0")/100,n=!!r.getPropertyValue("--mescroll-allow-overscroll"),c=!!r.getPropertyValue("--mescroll-reverse");t.meScroll={allowOverscroll:n,offset:o,reverse:c,styles:r,endPoint:l,updateState:function(){e(t)}}}),window.addEventListener("scroll",t),window.addEventListener("resize",t),t()})});
//# sourceMappingURL=mescroll.umd.js.map
