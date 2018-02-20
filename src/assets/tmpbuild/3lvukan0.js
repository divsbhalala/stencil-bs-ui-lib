/*! Built with http://stenciljs.com */
const{h,Context}=window.index;var isarray=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},pathToRegexp_1=pathToRegexp,parse_1=parse,compile_1=compile,tokensToFunction_1=tokensToFunction,tokensToRegExp_1=tokensToRegExp,PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function parse(t,e){for(var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(n=PATH_REGEXP.exec(t));){var c=n[0],u=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,u)a+=u[1];else{var h=t[i],l=n[2],f=n[3],d=n[4],v=n[5],g=n[6],m=n[7];a&&(r.push(a),a="");var y=null!=l&&null!=h&&h!==l,R="+"===g||"*"===g,w="?"===g||"*"===g,x=n[2]||s,b=d||v;r.push({name:f||o++,prefix:l||"",delimiter:x,optional:w,repeat:R,partial:y,asterisk:!!m,pattern:b?escapeGroup(b):m?".*":"[^"+escapeString(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function compile(t,e){return tokensToFunction(parse(t,e))}function encodeURIComponentPretty(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function encodeAsterisk(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function tokensToFunction(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=(r||{}).pretty?encodeURIComponentPretty:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var u,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(isarray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(u=a(p[h]),!e[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===h?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeAsterisk(p):a(p),!e[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function escapeString(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function escapeGroup(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(t,e){return t.keys=e,t}function flags(t){return t.sensitive?"":"i"}function regexpToRegexp(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(t,e)}function arrayToRegexp(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(pathToRegexp(t[o],e,n).source);return attachKeys(new RegExp("(?:"+r.join("|")+")",flags(n)),e)}function stringToRegexp(t,e,n){return tokensToRegExp(parse(t,n),e,n)}function tokensToRegExp(t,e,n){isarray(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=escapeString(s);else{var c=escapeString(s.prefix),u="(?:"+s.pattern+")";e.push(s),s.repeat&&(u+="(?:"+c+u+")*"),i+=u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var p=escapeString(n.delimiter||"/"),h=i.slice(-p.length)===p;return r||(i=(h?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&h?"":"(?="+p+"|$)",attachKeys(new RegExp("^"+i,flags(n)),e)}function pathToRegexp(t,e,n){return isarray(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?regexpToRegexp(t,e):isarray(t)?arrayToRegexp(t,e,n):stringToRegexp(t,e,n)}pathToRegexp_1.parse=parse_1,pathToRegexp_1.compile=compile_1,pathToRegexp_1.tokensToFunction=tokensToFunction_1,pathToRegexp_1.tokensToRegExp=tokensToRegExp_1;var patternCache={},cacheLimit=1e4,cacheCount=0;function compilePath(t,e){var n=""+e.end+e.strict,r=patternCache[n]||(patternCache[n]={});if(r[t])return r[t];var o=[],i={re:pathToRegexp_1(t,o,e),keys:o};return cacheCount<cacheLimit&&(r[t]=i,cacheCount+=1),i}function matchPath(t,e){void 0===e&&(e={}),"string"==typeof e&&(e={path:e});var n=e.path,r=void 0===n?"/":n,o=e.exact,i=void 0!==o&&o,a=e.strict,s=compilePath(r,{end:i,strict:void 0!==a&&a}),c=s.re,u=s.keys,p=c.exec(t);if(!p)return null;var h=p[0],l=p.slice(1),f=t===h;return i&&!f?null:{path:r,url:"/"===r&&""===h?"/":h,isExact:f,params:u.reduce(function(t,e,n){return t[e.name]=l[n],t},{})}}var __assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Route=function(){function t(){this.unsubscribe=function(){},this.componentProps={},this.exact=!1,this.routeRender=null,this.match=null}return t.prototype.computeMatch=function(t){if(!t){var e=this.activeRouter.get("location");if(!e)return null;t=e.pathname}return matchPath(t,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentWillUnmount=function(){this.unsubscribe()},t.prototype.render=function(){if(!this.activeRouter||!this.match)return h("span",null);var t=__assign({},this.componentProps,{history:this.activeRouter.get("history"),match:this.match});if(this.routeRender)return this.routeRender(__assign({},t,{component:this.component}));if(this.component){var e=this.component;return h(e,{p:t})}},t}();Route.is="stencil-route",Route.properties={activeRouter:{context:"activeRouter"},component:{type:"Any",attr:"component"},componentProps:{type:"Any",attr:"component-props"},exact:{type:Boolean,attr:"exact"},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},url:{type:"Any",attr:"url"}};var RouteLink=function(){function t(){this.unsubscribe=function(){},this.exact=!1,this.custom=!1,this.activeClass="link-active",this.match=null}return t.prototype.computeMatch=function(t){if(!t){var e=this.activeRouter.get("location");if(!e)return null;t=e.pathname}return matchPath(t,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentWillUnmount=function(){this.unsubscribe()},t.prototype.handleClick=function(t){if(t.preventDefault(),this.activeRouter)return this.activeRouter.get("history").push(this.url,{});console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')},t.prototype.render=function(){var t,e=((t={})[this.activeClass]=null!==this.match,t);return this.custom?h("span",{class:e,onclick:this.handleClick.bind(this)},h("slot",null)):h("a",{class:e,onclick:this.handleClick.bind(this),href:this.url},h("slot",null))},t}();function hasBasename(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function stripBasename(t,e){return hasBasename(t,e)?t.substr(e.length):t}function stripTrailingSlash(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t}function parsePath(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}function createPath(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function parseQueryString(t){return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce(function(t,e){var n=e.split("="),r=n[0],o=n[1];return t[r]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{}}RouteLink.is="stencil-route-link",RouteLink.properties={activeClass:{type:"Any",attr:"active-class"},activeRouter:{context:"activeRouter"},custom:{type:Boolean,attr:"custom"},exact:{type:Boolean,attr:"exact"},match:{state:!0},url:{type:"Any",attr:"url"}};var __assign$1=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function resolvePathname(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&isAbsolute(t),a=e&&isAbsolute(e),s=i||a;if(t&&isAbsolute(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var c=o[o.length-1];n="."===c||".."===c||""===c}else n=!1;for(var u=0,p=o.length;p>=0;p--){var h=o[p];"."===h?spliceOne(o,p):".."===h?(spliceOne(o,p),u++):u&&(spliceOne(o,p),u--)}if(!s)for(;u--;u)o.unshift("..");!s||""===o[0]||o[0]&&isAbsolute(o[0])||o.unshift("");var l=o.join("/");return n&&"/"!==l.substr(-1)&&(l+="/"),l}function createLocation(t,e,n,r){var o;"string"==typeof t?(o=parsePath(t)).state=e:(void 0===(o=__assign$1({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=resolvePathname(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o.query=parseQueryString(o.search),o}function invariant(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function warning(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}var createTransitionManager=function(){var t=null,e=[];return{setPrompt:function(e){return warning(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):(warning(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0,r=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n&&t.apply(void 0,e)};return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},getConfirmation=function(t,e){return e(window.confirm(t))},supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")},PopStateEvent="popstate",HashChangeEvent="hashchange",getHistoryState=function(){try{return window.history.state||{}}catch(t){return{}}},createBrowserHistory=function(t){void 0===t&&(t={}),invariant(canUseDOM,"Browser history needs a DOM");var e=window.history,n=supportsHistory(),r=!supportsPopStateOnHashChange(),o=t.forceRefresh,i=void 0!==o&&o,a=t.getUserConfirmation,s=void 0===a?getConfirmation:a,c=t.keyLength,u=void 0===c?6:c,p=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"",h=function(t){var e=(t=t||{}).key,n=t.state,r=window.location,o=r.pathname+r.search+r.hash;return warning(!p||hasBasename(o,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+o+'" to begin with "'+p+'".'),p&&(o=stripBasename(o,p)),createLocation(o,n,e)},l=function(){return Math.random().toString(36).substr(2,u)},f=createTransitionManager(),d=function(t){Object.assign(A,t),A.length=e.length,f.notifyListeners(A.location,A.action)},v=function(t){isExtraneousPopstateEvent(t)||y(h(t.state))},g=function(){y(h(getHistoryState()))},m=!1,y=function(t){if(m)m=!1,d();else{f.confirmTransitionTo(t,"POP",s,function(e){e?d({action:"POP",location:t}):R(t)})}},R=function(t){var e=A.location,n=x.indexOf(e.key);-1===n&&(n=0);var r=x.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(m=!0,E(o))},w=h(getHistoryState()),x=[w.key],b=function(t){return p+createPath(t)},E=function(t){e.go(t)},k=0,T=function(t){1===(k+=t)?(addEventListener(window,PopStateEvent,v),r&&addEventListener(window,HashChangeEvent,g)):0===k&&(removeEventListener(window,PopStateEvent,v),r&&removeEventListener(window,HashChangeEvent,g))},P=!1,A={length:e.length,action:"POP",location:w,createHref:b,push:function(t,r){warning(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var o=createLocation(t,r,l(),A.location);f.confirmTransitionTo(o,"PUSH",s,function(t){if(t){var r=b(o),a=o.key,s=o.state;if(n)if(e.pushState({key:a,state:s},null,r),i)window.location.href=r;else{var c=x.indexOf(A.location.key),u=x.slice(0,-1===c?0:c+1);u.push(o.key),x=u,d({action:"PUSH",location:o})}else warning(void 0===s,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,r){warning(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var o=createLocation(t,r,l(),A.location);f.confirmTransitionTo(o,"REPLACE",s,function(t){if(t){var r=b(o),a=o.key,s=o.state;if(n)if(e.replaceState({key:a,state:s},null,r),i)window.location.replace(r);else{var c=x.indexOf(A.location.key);-1!==c&&(x[c]=o.key),d({action:"REPLACE",location:o})}else warning(void 0===s,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:E,goBack:function(){return E(-1)},goForward:function(){return E(1)},block:function(t){void 0===t&&(t="");var e=f.setPrompt(t);return P||(T(1),P=!0),function(){return P&&(P=!1,T(-1)),e()}},listen:function(t){var e=f.appendListener(t);return T(1),function(){T(-1),e()}}};return A},Router=function(){function t(){this.root="/",this.match=null,this.unsubscribe=function(){}}return t.prototype.computeMatch=function(t){return{path:this.root,url:this.root,isExact:t===this.root,params:{}}},t.prototype.componentWillLoad=function(){var t=this,e=createBrowserHistory();e.listen(function(e){t.activeRouter.set({location:e})}),this.activeRouter.set({location:e.location,history:e}),this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentWillUnmount=function(){this.unsubscribe()},t.prototype.render=function(){return h("slot",null)},t}();Router.is="stencil-router",Router.properties={activeRouter:{context:"activeRouter"},match:{state:!0},root:{type:"Any",attr:"root"}};var Redirect=function(){function t(){}return t.prototype.componentWillLoad=function(){var t=this.activeRouter.get("history");if(t)return t.replace(this.url,{})},t}();Redirect.is="stencil-router-redirect",Redirect.properties={activeRouter:{context:"activeRouter"},url:{type:"Any",attr:"url"}};export{Route as StencilRoute,RouteLink as StencilRouteLink,Router as StencilRouter,Redirect as StencilRouterRedirect};