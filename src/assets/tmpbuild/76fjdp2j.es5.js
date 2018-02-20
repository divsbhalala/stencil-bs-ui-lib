/*! Built with http://stenciljs.com */
index.loadComponents(function(t,e,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function t(){this.text="",this.tagType=void 0,this.classes=void 0,this.link=void 0,this.imgLink=void 0,this.closable=!1,this.removeOnClose=!0,this.onCloseData=void 0,this.rounded=!1,this.limitTo=25}return t.prototype.close=function(t){this.link&&t.preventDefault(),this.tagCloseEvent.emit({eventType:"EVENT_TAG_CLOSE",tagText:this.text,customData:this.onCloseData}),this.removeOnClose&&this.element.parentElement.removeChild(this.element)},t.prototype.textWatchHandler=function(t){this.text=t},t.prototype.watchHandler=function(t){this.tagType=t},t.prototype.limit=function(t,e){return t.length>e-3&&(t=t.slice(0,t.length-3),t+="..."),t},t.prototype.getClassList=function(){var t="";return this.tagType?(console.log("+tagType: ",this.tagType),t=" badge-"+this.tagType):(console.log("-tagType: ",this.tagType),t=" badge-primary"),this.classes&&(t+=" "+this.classes+" "),this.rounded&&(t+=" badge-pill"),this.closable&&(t+=" closable"),this.imgLink&&(t+=" tag-with-image"),t},t.prototype.render=function(){var t=this;return this.link?e("a",{class:"badge "+this.getClassList(),href:this.link,title:this.link},t.imgLink&&e("img",{src:t.imgLink,class:"rounded-circle"}),e("span",{class:"badge-text"},this.limit(this.text,this.limitTo)),t.closable&&e("span",{"aria-hidden":"true",class:"btn-close ",onClick:function(e){return t.close(e)},title:"Close"},"×")):e("span",{class:"badge "+this.getClassList(),title:this.text},t.imgLink&&e("img",{src:t.imgLink,class:"rounded-circle"}),e("span",{class:"badge-text"},this.limit(this.text,this.limitTo)),t.closable&&e("span",{"aria-hidden":"true",class:"btn-close ",onClick:function(){return t.close()},title:"Close"},"×"))},Object.defineProperty(t,"is",{get:function(){return"cwc-tag"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{classes:{type:String,attr:"classes"},closable:{type:Boolean,attr:"closable"},close:{method:!0},element:{elementRef:!0},imgLink:{type:String,attr:"img-link"},limitTo:{type:Number,attr:"limit-to"},link:{type:String,attr:"link"},onCloseData:{type:"Any",attr:"on-close-data"},removeOnClose:{type:Boolean,attr:"remove-on-close"},rounded:{type:Boolean,attr:"rounded"},tagType:{type:"Any",watchCallbacks:["watchHandler"]},text:{type:String,attr:"text",watchCallbacks:["textWatchHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"tagCloseEvent",method:"tagCloseEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".badge-pill.tag-with-image{padding-left:3px}.btn-close:hover{color:#fff;cursor:pointer}img.rounded-circle{max-width:20px;max-height:20px;padding:1px 1px;margin-right:4px}span.btn-close{margin:7px 2px 3px 6px;vertical-align:middle}span.badge-text{vertical-align:middle;margin-right:3px}"},enumerable:!0,configurable:!0}),t}();t.CwcTag=s},"76fjdp2j");