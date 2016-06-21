YUI.add("aui-tabview",function(e,t){var n=e.Lang,r=n.isBoolean,i=e.getClassName;e.TabviewBase._classNames={selectedPanel:i("active"),selectedTab:i("active"),tab:i("tab"),tabLabel:i("tab","label"),tabPanel:i("tab","pane"),tabview:i("tabbable"),tabviewList:i("nav"),tabviewListStacked:i("nav","stacked"),tabviewPanel:i("tab","content")},e.TabviewBase._queries={selectedPanel:"> div ."+e.TabviewBase._classNames.selectedPanel,selectedTab:"> ul > ."+e.TabviewBase._classNames.selectedTab,tab:"> ul > li:not(.nav-header)",tabLabel:"> ul > li:not(.nav-header) > a",tabPanel:"> div > div",tabview:"."+e.TabviewBase._classNames.tabview,tabviewList:"> ul",tabviewPanel:"> div"},e.Tab.CSS_PREFIX=i("tab"),e.Tab.NAME="tab",e.Tab=e.Component.create({NAME:"tab",ATTRS:{disabled:{validator:r,valueFn:"_valueDisabled"}},CSS_PREFIX:i("tab"),EXTENDS:e.Tab,prototype:{initializer:function(){var t=this;t.on("selectedChange",t._onTabSelectedChange),e.after(t._afterUiSetDisabled,t,"_uiSetDisabled")},_afterUiSetDisabled:function(e){var t=this;t.get("boundingBox").toggleClass(i("disabled"),e)},_onTabSelectedChange:function(e){var t=this;t.get("disabled")&&e.halt()},_renderPanel:function(){var e=this,t=e.get("panelNode"),n=e.get("parent").get("panelNode");n.contains(t)||n.appendChild(t)},_valueDisabled:function(){var e=this;return e.get("boundingBox").hasClass("disabled")}}}),e.TabView.NAME="tabbable",e.TabView.CSS_PREFIX=i("tabbable"),e.TabView=e.Component.create({NAME:"tabbable",CSS_PREFIX:i("tabbable"),TYPE_TABS:"tabs",TYPE_LIST:"list",TYPE_PILLS:"pills",ATTRS:{stacked:{validator:r,value:!1},type:{validator:function(t){return t===e.TabView.TYPE_LIST||t===e.TabView.TYPE_TABS||t===e.TabView.TYPE_PILLS},value:"tabs"}},UI_ATTRS:["stacked","type"],EXTENDS:e.TabView,AUGMENTS:[e.WidgetCssClass],prototype:{initializer:function(){var e=this;e.after(e._afterSyncUI,e,"syncUI"),e.after("typeChange",e._afterTypeChange)},disableTab:function(e){var t=this;t.item(e).set("disabled",!0)},enableTab:function(e){var t=this;t.item(e).set("disabled",!1)},getActiveTab:function(){var t=this,n=e.TabviewBase._queries;return t.get("contentBox").one(n.selectedTab)},getTabs:function(){var t=this,n=e.TabviewBase._queries;return t.get("contentBox").all(n.tab)},_afterSelectionChange:function(t){var n=t.newVal,r=t.prevVal,i=e.TabviewBase._classNames.selectedTab;e.TabView.superclass._afterSelectionChange.apply(this,arguments),n&&(n.get("boundingBox").addClass(i),n.get("panelNode").addClass(i)),r&&(r.get("boundingBox").removeClass(i),r.get("panelNode").removeClass(i))},_afterTypeChange:function(e){var t=this,n=t.get("listNode");e.prevVal&&n.removeClass(i("nav",e.prevVal))},_renderChildren:function(){var e=this,t=e._childrenContainer||e.get("contentBox");e._childrenContainer=t,e.each(function(e){e.get("boundingBox").inDoc()&&(t=null),e.render(t)})},_uiSetType:function(t){var n=this,r=n.get("listNode");(t!==e.TabView.TYPE_TABS||!this.get("stacked"))&&r.addClass(i("nav",t))},_uiSetStacked:function(t){var n=this,r=n.get("listNode");r.toggleClass(e.TabviewBase._classNames.tabviewListStacked,t),this.get("type")===e.TabView.TYPE_TABS&&r.toggleClass(i("nav",e.TabView.TYPE_TABS),!t)}}})},"3.0.3-deprecated.36",{requires:["selector-css3","tabview","aui-component","aui-widget-css"],skinnable:!0});
