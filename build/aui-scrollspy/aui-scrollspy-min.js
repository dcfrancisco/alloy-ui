YUI.add("aui-scrollspy",function(e,t){var n=e.getClassName,r=e.Lang,i="activate";e.Scrollspy=e.Base.create("scrollspy",e.Base,[],{activeLink:null,cachedLinks:null,initializer:function(){var t=this.get("scrollNode");this.publish(i,{defaultFn:this._defActivateEventFn}),t.on("scroll",e.bind(this._onScroll,this)),this.refresh()},clearCachedLinks:function(){this.cachedLinks=null},refresh:function(){var e=this._findLinkBestMatch();if(e===this.activeLink||!e&&!this.activeLink)return;this.fire(i,{newVal:e,prevVal:this.activeLink})},_defActivateEventFn:function(e){this._uiSetLink(e.newVal,e.prevVal)},_findLinkBestMatch:function(){var t=this._getValidLinks();return t.filter(e.bind(this._isLinkInViewport,this)).pop()},_getValidLinks:function(){return this.cachedLinks||(this.cachedLinks=this.get("target").all("a")),this.cachedLinks=this.cachedLinks.filter(function(e){return e.hash&&e.hash.length>1}),this.cachedLinks},_isLinkInViewport:function(t){var n=this.get("offset"),r=this.get("scrollNode"),i,s=e.one(t.hash);return r.compareTo(e.config.win)||r.compareTo(e.config.doc)?i=r.get("scrollTop"):i=r.getY(),s&&i>=s.getY()-n},_onScroll:function(){this.refresh()},_uiSetLink:function(t,n){var r=this.get("activeGroup"),i=this.get("activeClass");n||this._getValidLinks().filter(function(t){return e.one(t).ancestors(r).removeClass(i)}),n&&(n.ancestors(r).removeClass(i),this.activeLink=null),t&&(t.ancestors(r).addClass(i),this.activeLink=t)}},{ATTRS:{activeGroup:{validator:r.isString,value:"li, .dropdown"},activeClass:{validator:r.isString,value:n("active")},offset:{validator:r.isNumber,value:10},scrollNode:{setter:e.one,value:e.config.win,writeOnce:"initOnly"},target:{setter:e.one,writeOnce:"initOnly"}}})},"3.0.3-deprecated.36",{requires:["base-build","node-screen","aui-classnamemanager"]});
