if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-tpl-snippets-textarea-deprecated/aui-tpl-snippets-textarea-deprecated.js']) {
   __coverage__['build/aui-tpl-snippets-textarea-deprecated/aui-tpl-snippets-textarea-deprecated.js'] = {"path":"build/aui-tpl-snippets-textarea-deprecated/aui-tpl-snippets-textarea-deprecated.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":67}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":13,"column":78}},"2":{"start":{"line":3,"column":0},"end":{"line":10,"column":2}}},"branchMap":{},"code":["(function () { YUI.add('aui-tpl-snippets-textarea-deprecated', function (A, NAME) {","","A.Template.register(","    'textarea', [","  '<tpl if=\"values.label !== undefined\">',","   '<label class=\"{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}\" for=\"{id}\" id=\"{labelId}\" name=\"{labelName}\" style=\"{labelStyle}\">{label}</label>',","  '</tpl>',","  '<textarea class=\"{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}\" <tpl if=\"values.disabled\">disabled=\"disabled\"</tpl> id=\"{id}\" name=\"{name}\" placeholder=\"{placeholder}\" value=\"{valueAttr}\" style=\"{style}\">{value}</textarea>'"," ]",");","","","}, '3.0.3-deprecated.36', {\"requires\": [\"aui-tpl-snippets-base-deprecated\"]});","","}());"]};
}
var __cov_ai1yFH2Iuu4bMSAW9n0Okw = __coverage__['build/aui-tpl-snippets-textarea-deprecated/aui-tpl-snippets-textarea-deprecated.js'];
__cov_ai1yFH2Iuu4bMSAW9n0Okw.s['1']++;YUI.add('aui-tpl-snippets-textarea-deprecated',function(A,NAME){__cov_ai1yFH2Iuu4bMSAW9n0Okw.f['1']++;__cov_ai1yFH2Iuu4bMSAW9n0Okw.s['2']++;A.Template.register('textarea',['<tpl if="values.label !== undefined">','<label class="{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}" for="{id}" id="{labelId}" name="{labelName}" style="{labelStyle}">{label}</label>','</tpl>','<textarea class="{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}" <tpl if="values.disabled">disabled="disabled"</tpl> id="{id}" name="{name}" placeholder="{placeholder}" value="{valueAttr}" style="{style}">{value}</textarea>']);},'3.0.3-deprecated.36',{'requires':['aui-tpl-snippets-base-deprecated']});
