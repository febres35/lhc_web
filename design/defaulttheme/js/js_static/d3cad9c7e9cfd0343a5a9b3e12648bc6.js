!function(e){var o,t,r,i,a,n,c,l,d,s,p,u,h,f,v,m,g,k,b,_,x,w,y,C,M,I,q,P,N,S,H,O,z,Y,E,T,j,W=(o=65,t={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},r=function(o,t){var r=E(o);e(t).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()},i=function(o,t){e(t).data("colorpicker").fields.eq(4).val(o.h).end().eq(5).val(o.s).end().eq(6).val(o.b).end()},a=function(o,t){e(t).data("colorpicker").fields.eq(0).val(T(o)).end()},n=function(o,t){e(t).data("colorpicker").selector.css("backgroundColor","#"+T({h:o.h,s:100,b:100})),e(t).data("colorpicker").selectorIndic.css({left:parseInt(150*o.s/100,10),top:parseInt(150*(100-o.b)/100,10)})},c=function(o,t){e(t).data("colorpicker").hue.css("top",parseInt(150-150*o.h/360,10))},l=function(o,t){e(t).data("colorpicker").currentColor.css("backgroundColor","#"+T(o))},d=function(o,t){e(t).data("colorpicker").newColor.css("backgroundColor","#"+T(o))},s=function(t){var r=t.charCode||t.keyCode||-1;if(r>o&&r<=90||32==r)return!1;!0===e(this).parent().parent().data("colorpicker").livePreview&&p.apply(this)},p=function(o){var t,l=e(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?l.data("colorpicker").color=t=z(O(this.value)):this.parentNode.className.indexOf("_hsb")>0?l.data("colorpicker").color=t=S({h:parseInt(l.data("colorpicker").fields.eq(4).val(),10),s:parseInt(l.data("colorpicker").fields.eq(5).val(),10),b:parseInt(l.data("colorpicker").fields.eq(6).val(),10)}):l.data("colorpicker").color=t=Y(H({r:parseInt(l.data("colorpicker").fields.eq(1).val(),10),g:parseInt(l.data("colorpicker").fields.eq(2).val(),10),b:parseInt(l.data("colorpicker").fields.eq(3).val(),10)})),o&&(r(t,l.get(0)),a(t,l.get(0)),i(t,l.get(0))),n(t,l.get(0)),c(t,l.get(0)),d(t,l.get(0)),l.data("colorpicker").onChange.apply(l,[t,T(t),E(t)])},u=function(o){e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")},h=function(){o=this.parentNode.className.indexOf("_hex")>0?70:65,e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),e(this).parent().addClass("colorpicker_focus")},f=function(o){var t=e(this).parent().find("input").focus(),r={el:e(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:o.pageY,field:t,val:parseInt(t.val(),10),preview:e(this).parent().parent().data("colorpicker").livePreview};e(document).bind("mouseup",r,m),e(document).bind("mousemove",r,v)},v=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&p.apply(e.data.field.get(0),[!0]),!1},m=function(o){return p.apply(o.data.field.get(0),[!0]),o.data.el.removeClass("colorpicker_slider").find("input").focus(),e(document).unbind("mouseup",m),e(document).unbind("mousemove",v),!1},g=function(o){var t={cal:e(this).parent(),y:e(this).offset().top};t.preview=t.cal.data("colorpicker").livePreview,e(document).bind("mouseup",t,b),e(document).bind("mousemove",t,k)},k=function(e){return p.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview]),!1},b=function(o){return r(o.data.cal.data("colorpicker").color,o.data.cal.get(0)),a(o.data.cal.data("colorpicker").color,o.data.cal.get(0)),e(document).unbind("mouseup",b),e(document).unbind("mousemove",k),!1},_=function(o){var t={cal:e(this).parent(),pos:e(this).offset()};t.preview=t.cal.data("colorpicker").livePreview,e(document).bind("mouseup",t,w),e(document).bind("mousemove",t,x)},x=function(e){return p.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview]),!1},w=function(o){return r(o.data.cal.data("colorpicker").color,o.data.cal.get(0)),a(o.data.cal.data("colorpicker").color,o.data.cal.get(0)),e(document).unbind("mouseup",w),e(document).unbind("mousemove",x),!1},y=function(o){e(this).addClass("colorpicker_focus")},C=function(o){e(this).removeClass("colorpicker_focus")},M=function(o){var t=e(this).parent(),r=t.data("colorpicker").color;t.data("colorpicker").origColor=r,l(r,t.get(0)),t.data("colorpicker").onSubmit(r,T(r),E(r),t.data("colorpicker").el)},I=function(o){var t=e("#"+e(this).data("colorpickerId"));t.data("colorpicker").onBeforeShow.apply(this,[t.get(0)]);var r=e(this).offset(),i=N(),a=r.top+this.offsetHeight,n=r.left;return a+176>i.t+i.h&&(a-=this.offsetHeight+176),n+356>i.l+i.w&&(n-=356),t.css({left:n+"px",top:a+"px"}),0!=t.data("colorpicker").onShow.apply(this,[t.get(0)])&&t.show(),e(document).bind("mousedown",{cal:t},q),!1},q=function(o){P(o.data.cal.get(0),o.target,o.data.cal.get(0))||(0!=o.data.cal.data("colorpicker").onHide.apply(this,[o.data.cal.get(0)])&&o.data.cal.hide(),e(document).unbind("mousedown",q))},P=function(e,o,t){if(e==o)return!0;if(e.contains)return e.contains(o);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(o));for(var r=o.parentNode;r&&r!=t;){if(r==e)return!0;r=r.parentNode}return!1},N=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},S=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},H=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},O=function(e){var o=6-e.length;if(o>0){for(var t=[],r=0;r<o;r++)t.push("0");t.push(e),e=t.join("")}return e},z=function(e){return Y(function(e){return{r:(e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16))>>16,g:(65280&e)>>8,b:255&e}}(e))},Y=function(e){var o={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),i=r-t;return o.b=r,o.s=0!=r?255*i/r:0,0!=o.s?e.r==r?o.h=(e.g-e.b)/i:e.g==r?o.h=2+(e.b-e.r)/i:o.h=4+(e.r-e.g)/i:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o},E=function(e){var o={},t=Math.round(e.h),r=Math.round(255*e.s/100),i=Math.round(255*e.b/100);if(0==r)o.r=o.g=o.b=i;else{var a=i,n=(255-r)*i/255,c=t%60*(a-n)/60;360==t&&(t=0),t<60?(o.r=a,o.b=n,o.g=n+c):t<120?(o.g=a,o.b=n,o.r=a-c):t<180?(o.g=a,o.r=n,o.b=n+c):t<240?(o.b=a,o.r=n,o.g=a-c):t<300?(o.b=a,o.g=n,o.r=n+c):t<360?(o.r=a,o.g=n,o.b=a-c):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},T=function(o){return t=E(o),r=[t.r.toString(16),t.g.toString(16),t.b.toString(16)],e.each(r,(function(e,o){1==o.length&&(r[e]="0"+o)})),r.join("");var t,r},j=function(){var o=e(this).parent(),t=o.data("colorpicker").origColor;o.data("colorpicker").color=t,r(t,o.get(0)),a(t,o.get(0)),i(t,o.get(0)),n(t,o.get(0)),c(t,o.get(0)),d(t,o.get(0))},{init:function(o){if("string"==typeof(o=e.extend({},t,o||{})).color)o.color=z(o.color);else if(null!=o.color.r&&null!=o.color.g&&null!=o.color.b)o.color=Y(o.color);else{if(null==o.color.h||null==o.color.s||null==o.color.b)return this;o.color=S(o.color)}return this.each((function(){if(!e(this).data("colorpickerId")){var t=e.extend({},o);t.origColor=o.color;var v="collorpicker_"+parseInt(1e3*Math.random());e(this).data("colorpickerId",v);var m=e('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id",v);t.flat?m.appendTo(this).show():m.appendTo(document.body),t.fields=m.find("input").bind("keyup",s).bind("change",p).bind("blur",u).bind("focus",h),m.find("span").bind("mousedown",f).end().find(">div.colorpicker_current_color").bind("click",j),t.selector=m.find("div.colorpicker_color").bind("mousedown",_),t.selectorIndic=t.selector.find("div div"),t.el=this,t.hue=m.find("div.colorpicker_hue div"),m.find("div.colorpicker_hue").bind("mousedown",g),t.newColor=m.find("div.colorpicker_new_color"),t.currentColor=m.find("div.colorpicker_current_color"),m.data("colorpicker",t),m.find("div.colorpicker_submit").bind("mouseenter",y).bind("mouseleave",C).bind("click",M),r(t.color,m.get(0)),i(t.color,m.get(0)),a(t.color,m.get(0)),c(t.color,m.get(0)),n(t.color,m.get(0)),l(t.color,m.get(0)),d(t.color,m.get(0)),t.flat?m.css({position:"relative",display:"block"}):e(this).bind(t.eventName,I)}}))},showPicker:function(){return this.each((function(){e(this).data("colorpickerId")&&I.apply(this)}))},hidePicker:function(){return this.each((function(){e(this).data("colorpickerId")&&e("#"+e(this).data("colorpickerId")).hide()}))},setColor:function(o){if("string"==typeof o)o=z(o);else if(null!=o.r&&null!=o.g&&null!=o.b)o=Y(o);else{if(null==o.h||null==o.s||null==o.b)return this;o=S(o)}return this.each((function(){if(e(this).data("colorpickerId")){var t=e("#"+e(this).data("colorpickerId"));t.data("colorpicker").color=o,t.data("colorpicker").origColor=o,r(o,t.get(0)),i(o,t.get(0)),a(o,t.get(0)),c(o,t.get(0)),n(o,t.get(0)),l(o,t.get(0)),d(o,t.get(0))}}))}});e.fn.extend({ColorPicker:W.init,ColorPickerHide:W.hidePicker,ColorPickerShow:W.showPicker,ColorPickerSetColor:W.setColor})}(jQuery);
//# sourceMappingURL=d3cad9c7e9cfd0343a5a9b3e12648bc6.js.map
