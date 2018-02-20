/*! Built with http://stenciljs.com */
const{h,Context}=window.index;for(var isBrowser="undefined"!=typeof window&&"undefined"!=typeof document,longerTimeoutBrowsers=["Edge","Trident","Firefox"],timeoutDuration=0,i=0;i<longerTimeoutBrowsers.length;i+=1)if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break}function microtaskDebounce(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function taskDebounce(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},timeoutDuration))}}var supportsMicroTasks=isBrowser&&window.Promise,debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;function isFunction(e){return e&&"[object Function]"==={}.toString.call(e)}function getStyleComputedProperty(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function getParentNode(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function getScrollParent(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=getStyleComputedProperty(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll)/.test(n+r+o)?e:getScrollParent(getParentNode(e))}function getOffsetParent(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===getStyleComputedProperty(t,"position")?getOffsetParent(t):t:e?e.ownerDocument.documentElement:document.documentElement}function isOffsetContainer(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||getOffsetParent(e.firstElementChild)===e)}function getRoot(e){return null!==e.parentNode?getRoot(e.parentNode):e}function findCommonOffsetParent(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var s=i.commonAncestorContainer;if(e!==s&&t!==s||o.contains(r))return isOffsetContainer(s)?s:getOffsetParent(s);var l=getRoot(e);return l.host?findCommonOffsetParent(l.host,t):findCommonOffsetParent(e,getRoot(t).host)}function getScroll(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[t]}return e[t]}function includeScroll(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=getScroll(t,"top"),r=getScroll(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function getBordersSize(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}var isIE10=void 0,isIE10$1=function(){return void 0===isIE10&&(isIE10=-1!==navigator.appVersion.indexOf("MSIE 10")),isIE10};function getSize(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],isIE10$1()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function getWindowSizes(){var e=document.body,t=document.documentElement,n=isIE10$1()&&getComputedStyle(t);return{height:getSize("Height",e,t,n),width:getSize("Width",e,t,n)}}var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),defineProperty=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function getClientRect(e){return _extends({},e,{right:e.left+e.width,bottom:e.top+e.height})}function getBoundingClientRect(e){var t={};if(isIE10$1())try{t=e.getBoundingClientRect();var n=getScroll(e,"top"),o=getScroll(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}catch(e){}else t=e.getBoundingClientRect();var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?getWindowSizes():{},s=i.width||e.clientWidth||r.right-r.left,l=i.height||e.clientHeight||r.bottom-r.top,a=e.offsetWidth-s,p=e.offsetHeight-l;if(a||p){var f=getStyleComputedProperty(e);a-=getBordersSize(f,"x"),p-=getBordersSize(f,"y"),r.width-=a,r.height-=p}return getClientRect(r)}function getOffsetRectRelativeToArbitraryNode(e,t){var n=isIE10$1(),o="HTML"===t.nodeName,r=getBoundingClientRect(e),i=getBoundingClientRect(t),s=getScrollParent(e),l=getStyleComputedProperty(t),a=parseFloat(l.borderTopWidth,10),p=parseFloat(l.borderLeftWidth,10),f=getClientRect({top:r.top-i.top-a,left:r.left-i.left-p,width:r.width,height:r.height});if(f.marginTop=0,f.marginLeft=0,!n&&o){var c=parseFloat(l.marginTop,10),u=parseFloat(l.marginLeft,10);f.top-=a-c,f.bottom-=a-c,f.left-=p-u,f.right-=p-u,f.marginTop=c,f.marginLeft=u}return(n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(f=includeScroll(f,t)),f}function getViewportOffsetRectRelativeToArtbitraryNode(e){var t=e.ownerDocument.documentElement,n=getOffsetRectRelativeToArbitraryNode(e,t),o=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),i=getScroll(t),s=getScroll(t,"left");return getClientRect({top:i-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:o,height:r})}function isFixed(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===getStyleComputedProperty(e,"position")||isFixed(getParentNode(e)))}function getBoundaries(e,t,n,o){var r={top:0,left:0},i=findCommonOffsetParent(e,t);if("viewport"===o)r=getViewportOffsetRectRelativeToArtbitraryNode(i);else{var s=void 0;"scrollParent"===o?"BODY"===(s=getScrollParent(getParentNode(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===o?e.ownerDocument.documentElement:o;var l=getOffsetRectRelativeToArbitraryNode(s,i);if("HTML"!==s.nodeName||isFixed(i))r=l;else{var a=getWindowSizes(),p=a.height,f=a.width;r.top+=l.top-l.marginTop,r.bottom=p+l.top,r.left+=l.left-l.marginLeft,r.right=f+l.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function getArea(e){return e.width*e.height}function computeAutoPlacement(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=getBoundaries(n,o,i,r),l={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},a=Object.keys(l).map(function(e){return _extends({key:e},l[e],{area:getArea(l[e])})}).sort(function(e,t){return t.area-e.area}),p=a.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),f=p.length>0?p[0].key:a[0].key,c=e.split("-")[1];return f+(c?"-"+c:"")}function getReferenceOffsets(e,t,n){return getOffsetRectRelativeToArbitraryNode(n,findCommonOffsetParent(t,n))}function getOuterSizes(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function getOppositePlacement(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function getPopperOffsets(e,t,n){n=n.split("-")[0];var o=getOuterSizes(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),s=i?"top":"left",l=i?"left":"top",a=i?"height":"width",p=i?"width":"height";return r[s]=t[s]+t[a]/2-o[a]/2,r[l]=n===l?t[l]-o[p]:t[getOppositePlacement(l)],r}function find(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function findIndex(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=find(e,function(e){return e[t]===n});return e.indexOf(o)}function runModifiers(e,t,n){return(void 0===n?e:e.slice(0,findIndex(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&isFunction(n)&&(t.offsets.popper=getClientRect(t.offsets.popper),t.offsets.reference=getClientRect(t.offsets.reference),t=n(t,e))}),t}function update(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference),e.placement=computeAutoPlacement(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=getPopperOffsets(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=runModifiers(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function isModifierEnabled(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function getSupportedPropertyName(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function destroy(){return this.state.isDestroyed=!0,isModifierEnabled(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[getSupportedPropertyName("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function getWindow(e){var t=e.ownerDocument;return t?t.defaultView:window}function attachToScrollParents(e,t,n,o){var r="BODY"===e.nodeName,i=r?e.ownerDocument.defaultView:e;i.addEventListener(t,n,{passive:!0}),r||attachToScrollParents(getScrollParent(i.parentNode),t,n,o),o.push(i)}function setupEventListeners(e,t,n,o){n.updateBound=o,getWindow(e).addEventListener("resize",n.updateBound,{passive:!0});var r=getScrollParent(e);return attachToScrollParents(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function enableEventListeners(){this.state.eventsEnabled||(this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate))}function removeEventListeners(e,t){return getWindow(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function disableEventListeners(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=removeEventListeners(this.reference,this.state))}function isNumeric(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function setStyles(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&isNumeric(t[n])&&(o="px"),e.style[n]=t[n]+o})}function setAttributes(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function applyStyle(e){return setStyles(e.instance.popper,e.styles),setAttributes(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&setStyles(e.arrowElement,e.arrowStyles),e}function applyStyleOnLoad(e,t,n,o,r){var i=getReferenceOffsets(r,t,e),s=computeAutoPlacement(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),setStyles(t,{position:"absolute"}),n}function computeStyle(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=find(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==i?i:t.gpuAcceleration,l=getBoundingClientRect(getOffsetParent(e.instance.popper)),a={position:r.position},p={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},f="bottom"===n?"top":"bottom",c="right"===o?"left":"right",u=getSupportedPropertyName("transform"),d=void 0,h=void 0;if(h="bottom"===f?-l.height+p.bottom:p.top,d="right"===c?-l.width+p.right:p.left,s&&u)a[u]="translate3d("+d+"px, "+h+"px, 0)",a[f]=0,a[c]=0,a.willChange="transform";else{var m="bottom"===f?-1:1,g="right"===c?-1:1;a[f]=h*m,a[c]=d*g,a.willChange=f+", "+c}var v={"x-placement":e.placement};return e.attributes=_extends({},v,e.attributes),e.styles=_extends({},a,e.styles),e.arrowStyles=_extends({},e.offsets.arrow,e.arrowStyles),e}function isModifierRequired(e,t,n){var o=find(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function arrow(e,t){var n;if(!isModifierRequired(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,s=i.popper,l=i.reference,a=-1!==["left","right"].indexOf(r),p=a?"height":"width",f=a?"Top":"Left",c=f.toLowerCase(),u=a?"left":"top",d=a?"bottom":"right",h=getOuterSizes(o)[p];l[d]-h<s[c]&&(e.offsets.popper[c]-=s[c]-(l[d]-h)),l[c]+h>s[d]&&(e.offsets.popper[c]+=l[c]+h-s[d]),e.offsets.popper=getClientRect(e.offsets.popper);var m=l[c]+l[p]/2-h/2,g=getStyleComputedProperty(e.instance.popper),v=parseFloat(g["margin"+f],10),b=parseFloat(g["border"+f+"Width"],10),y=m-e.offsets.popper[c]-v-b;return y=Math.max(Math.min(s[p]-h,y),0),e.arrowElement=o,e.offsets.arrow=(defineProperty(n={},c,Math.round(y)),defineProperty(n,u,""),n),e}function getOppositeVariation(e){return"end"===e?"start":"start"===e?"end":e}var placements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],validPlacements=placements.slice(3);function clockwise(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=validPlacements.indexOf(e),o=validPlacements.slice(n+1).concat(validPlacements.slice(0,n));return t?o.reverse():o}var BEHAVIORS={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function flip(e,t){if(isModifierEnabled(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=getBoundaries(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=getOppositePlacement(o),i=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case BEHAVIORS.FLIP:s=[o,r];break;case BEHAVIORS.CLOCKWISE:s=clockwise(o);break;case BEHAVIORS.COUNTERCLOCKWISE:s=clockwise(o,!0);break;default:s=t.behavior}return s.forEach(function(l,a){if(o!==l||s.length===a+1)return e;o=e.placement.split("-")[0],r=getOppositePlacement(o);var p=e.offsets.popper,f=e.offsets.reference,c=Math.floor,u="left"===o&&c(p.right)>c(f.left)||"right"===o&&c(p.left)<c(f.right)||"top"===o&&c(p.bottom)>c(f.top)||"bottom"===o&&c(p.top)<c(f.bottom),d=c(p.left)<c(n.left),h=c(p.right)>c(n.right),m=c(p.top)<c(n.top),g=c(p.bottom)>c(n.bottom),v="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(u||v||y)&&(e.flipped=!0,(u||v)&&(o=s[a+1]),y&&(i=getOppositeVariation(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=_extends({},e.offsets.popper,getPopperOffsets(e.instance.popper,e.offsets.reference,e.placement)),e=runModifiers(e.instance.modifiers,e,"flip"))}),e}function keepTogether(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,s=-1!==["top","bottom"].indexOf(r),l=s?"right":"bottom",a=s?"left":"top",p=s?"width":"height";return n[l]<i(o[a])&&(e.offsets.popper[a]=i(o[a])-n[p]),n[a]>i(o[l])&&(e.offsets.popper[a]=i(o[l])),e}function toValue(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],s=r[2];if(!i)return e;if(0===s.indexOf("%")){var l=void 0;switch(s){case"%p":l=n;break;case"%":case"%r":default:l=o}return getClientRect(l)[t]/100*i}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function parseOffset(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),l=s.indexOf(find(s,function(e){return-1!==e.search(/,|\s/)}));s[l]&&-1===s[l].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,p=-1!==l?[s.slice(0,l).concat([s[l].split(a)[0]]),[s[l].split(a)[1]].concat(s.slice(l+1))]:[s];return(p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",s=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return toValue(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){isNumeric(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}function offset(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,s=r.reference,l=o.split("-")[0],a=void 0;return a=isNumeric(+n)?[+n,0]:parseOffset(n,i,s,l),"left"===l?(i.top+=a[0],i.left-=a[1]):"right"===l?(i.top+=a[0],i.left+=a[1]):"top"===l?(i.left+=a[0],i.top-=a[1]):"bottom"===l&&(i.left+=a[0],i.top+=a[1]),e.popper=i,e}function preventOverflow(e,t){var n=t.boundariesElement||getOffsetParent(e.instance.popper);e.instance.reference===n&&(n=getOffsetParent(n));var o=getBoundaries(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=o;var r=t.priority,i=e.offsets.popper,s={primary:function(e){var n=i[e];return i[e]<o[e]&&!t.escapeWithReference&&(n=Math.max(i[e],o[e])),defineProperty({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=i[n];return i[e]>o[e]&&!t.escapeWithReference&&(r=Math.min(i[n],o[e]-("right"===e?i.width:i.height))),defineProperty({},n,r)}};return r.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";i=_extends({},i,s[t](e))}),e.offsets.popper=i,e}function shift(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,s=r.popper,l=-1!==["bottom","top"].indexOf(n),a=l?"left":"top",p=l?"width":"height",f={start:defineProperty({},a,i[a]),end:defineProperty({},a,i[a]+i[p]-s[p])};e.offsets.popper=_extends({},s,f[o])}return e}function hide(e){if(!isModifierRequired(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=find(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function inner(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,s=-1!==["left","right"].indexOf(n),l=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=i[n]-(l?r[s?"width":"height"]:0),e.placement=getOppositePlacement(t),e.offsets.popper=getClientRect(r),e}var modifiers={shift:{order:100,enabled:!0,fn:shift},offset:{order:200,enabled:!0,fn:offset,offset:0},preventOverflow:{order:300,enabled:!0,fn:preventOverflow,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:keepTogether},arrow:{order:500,enabled:!0,fn:arrow,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:flip,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:inner},hide:{order:800,enabled:!0,fn:hide},computeStyle:{order:850,enabled:!0,fn:computeStyle,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:applyStyle,onLoad:applyStyleOnLoad,gpuAcceleration:void 0}},Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers},Popper=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};classCallCheck(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=debounce(this.update.bind(this)),this.options=_extends({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(_extends({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=_extends({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return _extends({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&isFunction(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return createClass(e,[{key:"update",value:function(){return update.call(this)}},{key:"destroy",value:function(){return destroy.call(this)}},{key:"enableEventListeners",value:function(){return enableEventListeners.call(this)}},{key:"disableEventListeners",value:function(){return disableEventListeners.call(this)}}]),e}();function isFunction$1(e){return e&&"[object Function]"==={}.toString.call(e)}Popper.Utils=("undefined"!=typeof window?window:global).PopperUtils,Popper.placements=placements,Popper.Defaults=Defaults;var classCallCheck$1=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass$1=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},DEFAULT_OPTIONS={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0},Tooltip=function(){function e(t,n){classCallCheck$1(this,e),_initialiseProps.call(this),n=_extends$1({},DEFAULT_OPTIONS,n),t.jquery&&(t=t[0]),this.reference=t,this.options=n;var o="string"==typeof n.trigger?n.trigger.split(" ").filter(function(e){return-1!==["click","hover","focus"].indexOf(e)}):[];this._isOpen=!1,this._popperOptions={},this._setEventListeners(t,o,n)}return createClass$1(e,[{key:"_create",value:function(e,t,n,o){var r=window.document.createElement("div");r.innerHTML=t.trim();var i=r.childNodes[0];i.id="tooltip_"+Math.random().toString(36).substr(2,10),i.setAttribute("aria-hidden","false");var s=r.querySelector(this.innerSelector);if(1===n.nodeType||11===n.nodeType)o&&s.appendChild(n);else if(isFunction$1(n)){var l=n.call(e);o?s.innerHTML=l:s.innerText=l}else o?s.innerHTML=n:s.innerText=n;return i}},{key:"_show",value:function(e,t){if(this._isOpen&&!this._isOpening)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.display="",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this;var n=e.getAttribute("title")||t.title;if(!n)return this;var o=this._create(e,t.template,n,t.html);e.setAttribute("aria-describedby",o.id);var r=this._findContainer(t.container,e);return this._append(o,r),this._popperOptions=_extends$1({},t.popperOptions,{placement:t.placement}),this._popperOptions.modifiers=_extends$1({},this._popperOptions.modifiers,{arrow:{element:this.arrowSelector},offset:{offset:t.offset}}),t.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:t.boundariesElement}),this.popperInstance=new Popper(e,o,this._popperOptions),this._tooltipNode=o,this}},{key:"_hide",value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.display="none",this._tooltipNode.setAttribute("aria-hidden","true"),this):this}},{key:"_dispose",value:function(){var e=this;return this._events.forEach(function(t){var n=t.func,o=t.event;e.reference.removeEventListener(o,n)}),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this.popperInstance.options.removeOnDestroy||(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:"_findContainer",value:function(e,t){return"string"==typeof e?e=window.document.querySelector(e):!1===e&&(e=t.parentNode),e}},{key:"_append",value:function(e,t){t.appendChild(e)}},{key:"_setEventListeners",value:function(e,t,n){var o=this,r=[],i=[];t.forEach(function(e){switch(e){case"hover":r.push("mouseenter"),i.push("mouseleave");break;case"focus":r.push("focus"),i.push("blur");break;case"click":r.push("click"),i.push("click")}}),r.forEach(function(t){var r=function(t){!0!==o._isOpening&&(t.usedByTooltip=!0,o._scheduleShow(e,n.delay,n,t))};o._events.push({event:t,func:r}),e.addEventListener(t,r)}),i.forEach(function(t){var r=function(t){!0!==t.usedByTooltip&&o._scheduleHide(e,n.delay,n,t)};o._events.push({event:t,func:r}),e.addEventListener(t,r)})}},{key:"_scheduleShow",value:function(e,t,n){var o=this;this._isOpening=!0;var r=t&&t.show||t||0;this._showTimeout=window.setTimeout(function(){return o._show(e,n)},r)}},{key:"_scheduleHide",value:function(e,t,n,o){var r=this;this._isOpening=!1;var i=t&&t.hide||t||0;window.setTimeout(function(){if(window.clearTimeout(r._showTimeout),!1!==r._isOpen&&document.body.contains(r._tooltipNode)){if("mouseleave"===o.type)if(r._setTooltipNodeEvent(o,e,t,n))return;r._hide(e,n)}},i)}}]),e}(),_initialiseProps=function(){var e=this;this.show=function(){return e._show(e.reference,e.options)},this.hide=function(){return e._hide()},this.dispose=function(){return e._dispose()},this.toggle=function(){return e._isOpen?e.hide():e.show()},this.arrowSelector=".tooltip-arrow, .tooltip__arrow",this.innerSelector=".tooltip-inner, .tooltip__inner",this._events=[],this._setTooltipNodeEvent=function(t,n,o,r){var i=t.relatedreference||t.toElement||t.relatedTarget;return!!e._tooltipNode.contains(i)&&(e._tooltipNode.addEventListener(t.type,function o(i){var s=i.relatedreference||i.toElement||i.relatedTarget;e._tooltipNode.removeEventListener(t.type,o),n.contains(s)||e._scheduleHide(n,r.delay,r,i)}),!0)}};class ScbTooltip{constructor(){this.type="span",this.href="#",this.target="_blank",this.title="",this.placement="top",this.delay=0,this.trigger="hover",this.offset=""}componentDidLoad(){this.btn=this.el.children[0],this.tooltip=new Tooltip(this.btn,{title:this.title,placement:this.placement,delay:this.delay,trigger:this.trigger,offset:this.offset,template:'<div class="tooltip show" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'})}render(){return"link"==this.type?h("a",{href:this.href,target:this.target},h("slot",{name:"btn-content"})):"button"==this.type?h("button",{type:"button",class:"btn btn-secondary"},h("slot",{name:"btn-content"})):h("span",null,h("slot",{name:"btn-content"}))}static get is(){return"scb-tooltip"}static get properties(){return{delay:{type:"Any",attr:"delay"},el:{elementRef:!0},href:{type:String,attr:"href"},offset:{type:String,attr:"offset"},placement:{type:String,attr:"placement"},target:{type:String,attr:"target"},title:{type:String,attr:"title"},tooltip:{state:!0},trigger:{type:String,attr:"trigger"},type:{type:String,attr:"type"}}}static get style(){return".tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px}.tooltip .tooltip-arrow{border-color:#1e252b}.tooltip[x-placement^=top]{margin-bottom:5px}.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0 5px;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=bottom]{margin-top:5px}.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px 5px;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=right]{margin-left:5px}.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip[x-placement^=left]{margin-right:5px}.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}"}}class TolltipPage{render(){return h("div",{class:"container pt-4"},h("h2",{class:"mb-4"},"Tooltip component "),h("div",{class:"row"},h("div",{class:"col-lg-12"},h("div",{class:"jumbotron pt-3"},h("div",{class:"row"},h("div",{class:"col-lg-4"},h("div",{class:"row"},h("div",{class:"col-lg-12"},h("h3",null,"Usage "),h("div",null,h("scb-tooltip",{type:"link",href:"https://stencil-bs-ui-lib.herokuapp.com/",target:"_blank",title:"Tooltip content",placement:"top",trigger:"hover focus click"},h("span",{slot:"btn-content"},"Btn text"))))),h("br",null),h("div",{class:"row"},h("div",{class:"col-lg-12"},h("pre",null,h("code",{class:"lang-tsx"},h("span",null,"<scb-tooltip"),h("br",null),h("span",{class:"hljs-built_in ml-4"},'type="link"'),h("br",null),h("span",{class:"hljs-built_in ml-4"},'href="https://stencil-bs-ui-lib.herokuapp.com/"'),h("br",null),h("span",{class:"hljs-built_in ml-4"},'target="_blank"'),h("br",null),h("span",{class:"hljs-built_in ml-4"},'title="Tooltip content"'),h("br",null),h("span",{class:"hljs-built_in ml-4"},'placement="top"'),h("br",null),h("span",{class:"hljs-built_in ml-4"},'trigger="hover focus click"'),h("span",null,">"),h("br",null),h("span",null,"</cwc-tooltip>")))))),h("div",{class:"col-lg-8"},h("table",{class:"table"},h("thead",null,h("tr",null,h("th",null,"Param"),h("th",null,"Type"),h("th",null,"Default"),h("th",null,"Description"))),h("tbody",null,h("tr",null,h("td",null,"type"),h("td",null,"String"),h("td",null,"'span'"),h("td",null,"How tooltip is displayed - as a link, button or span")),h("tr",null,h("td",null,"href"),h("td",null,"String"),h("td",null,"'#'"),h("td",null,"Set href to a link type tooltip. Only of type is 'link'.")),h("tr",null,h("td",null,"target"),h("td",null,"String"),h("td",null,"'_blank'"),h("td",null,"The target property sets or returns the value of the target attribute of a link. The target attribute specifies where to open the linked document - '_blank', '_self', '_parent', '_top'. Only of type is 'link'.")),h("tr",null,h("td",null,"title"),h("td",null,"String"),h("td",null,"''"),h("td",null,"Default title value if title attribute isn’t present.")),h("tr",null,h("td",null,"placement"),h("td",null,"String"),h("td",null,"bottom"),h("td",null,"Placement of the popper accepted values: top, right, bottom, left")),h("tr",null,h("td",null,"delay"),h("td",null,"Number | Object"),h("td",null,"0"),h("td",null,"Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: { show: 500, hide: 100 }")),h("tr",null,h("td",null,"trigger"),h("td",null,"String"),h("td",null,"'hover focus'"),h("td",null,"How tooltip is triggered - click, hover, focus. You may pass multiple triggers; separate them with a space.")),h("tr",null,h("td",null,"offset"),h("td",null,"Number | String"),h("td",null,"0"),h("td",null,"Offset of the tooltip relative to its reference. For more information refer to Popper.js’ ",h("a",{href:"https://popper.js.org/popper-documentation.html"},"offset docs"),"."))))))))))}static get is(){return"tooltip-page"}}export{ScbTooltip,TolltipPage as TooltipPage};