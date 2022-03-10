(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{1820:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" Function")]),t._v(" "),e("p",[t._v("The Function node is used to add custom snippets to JavaScript code to transform data from the other nodes or if you want to implement some custom functionality that n8n doesn’t support yet.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),e("p",[t._v("Please note that the Function node is different from the "),e("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/FunctionItem/"}},[t._v("Function Item")]),t._v(" node. Check out "),e("RouterLink",{attrs:{to:"/getting-started/key-concepts/#function"}},[t._v("this")]),t._v(" page to learn about the difference between the two.")],1)]),t._v(" "),e("p",[t._v("If you want to use the Function node to transform input data, check out how n8n's "),e("RouterLink",{attrs:{to:"/getting-started/key-concepts/#data-structure"}},[t._v("data structure")]),t._v(" looks like. The Function node also supports promises. So instead of returning the items directly, it is also possible to return a promise which resolves accordingly.")],1),t._v(" "),e("p",[t._v("The Function node also provides the ability to write to your browser console using "),e("code",[t._v("console.log")]),t._v(", useful for debugging and troubleshooting your workflows.")]),t._v(" "),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("This workflow allows you to get today's date and day using the Function node. You can also find the "),e("a",{attrs:{href:"https://n8n.io/workflows/524",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),e("OutboundLink")],1),t._v(" on the website. This example usage workflow would use the following two nodes.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),e("li",[e("a",{attrs:{href:""}},[t._v("Function")])])]),t._v(" "),e("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(674),alt:"A workflow with the Function node"}})]),t._v(" "),e("h3",{attrs:{id:"_1-start-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),e("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),e("h3",{attrs:{id:"_2-function-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-node"}},[t._v("#")]),t._v(" 2. Function node")]),t._v(" "),e("ol",[e("li",[t._v("Paste the following JavaScript code snippet in the "),e("em",[t._v("Function")]),t._v(" field.")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toISOString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" day "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDay")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" weekday "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sunday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Monday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tuesday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wednesday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Thursday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Friday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Saturday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nitems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date_today "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nitems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day_today "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weekday"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Click on "),e("em",[t._v("Execute Node")]),t._v(" to run the workflow.")])]),t._v(" "),e("h2",{attrs:{id:"node-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),e("p",[t._v("You can also use the methods and variables mentioned in the "),e("RouterLink",{attrs:{to:"/nodes/expressions.html"}},[t._v("Expressions")]),t._v(" page in the Function node.")],1),t._v(" "),e("h3",{attrs:{id:"variable-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variable-items"}},[t._v("#")]),t._v(" Variable: items")]),t._v(" "),e("p",[t._v("It contains all the items that the node has received as an input.")]),t._v(" "),e("p",[t._v("Information about how the data is structured can be found on "),e("RouterLink",{attrs:{to:"/getting-started/key-concepts/#data-structure"}},[t._v("this")]),t._v(" page about data structures.")],1),t._v(" "),e("p",[t._v("The data can be accessed and manipulated like this:")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Sets the JSON data property "myFileName" of the first item to the name of the')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// file which is set in the binary property "image" of the same item.')]),t._v("\nitems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myFileName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("binary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This example creates 10 dummy items with the ids 0 to 9:")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newItems "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  newItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"method-item-index-number-runindex-number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-item-index-number-runindex-number"}},[t._v("#")]),t._v(" Method: $item(index: number, runIndex?: number)")]),t._v(" "),e("p",[t._v("With "),e("code",[t._v("$item")]),t._v(" it is possible to access the data of parent nodes. That can be the item data but also\nthe parameters. It expects as input an index of the item the data should be returned for. This is\nneeded because for each item the data returned can be different. This is probably straightforward for the\nitem data itself but maybe less for data like parameters. The reason why it is also needed, is\nthat they may contain an expression. Expressions get always executed of the context for an item.\nIf that would not be the case, for example, the Email Send node not would be able to send multiple\nemails at once to different people. Instead, the same person would receive multiple emails.")]),t._v(" "),e("p",[t._v("The index is 0 based. So "),e("code",[t._v("$item(0)")]),t._v(" will return the first item, "),e("code",[t._v("$item(1)")]),t._v(" the second one, and so on.")]),t._v(" "),e("p",[t._v("By default the item of the last run of the node  will be returned. So if the referenced node ran\n3x (its last runIndex is 2) and the current node runs the first time (its runIndex is 0) the\ndata of runIndex 2 of the referenced node will be returned.")]),t._v(" "),e("p",[t._v("For more information about what data can be accessed via "),e("code",[t._v("$node")]),t._v(", check out the "),e("code",[t._v("Variable: $node")]),t._v(" "),e("RouterLink",{attrs:{to:"/nodes/expressions.html#variable-node"}},[t._v("section")]),t._v(".")],1),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the value of the JSON data property "myNumber" of Node "Set" (first item)')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Set"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Like above but data of the 6th item")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Set"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the value of the parameter "channel" of Node "Slack".')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If it contains an expression the value will be resolved with the")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data of the first item.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" channel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Slack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Like above but resolved with the value of the 10th item.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" channel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Slack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"method-getworkflowstaticdata-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-getworkflowstaticdata-type"}},[t._v("#")]),t._v(" Method: getWorkflowStaticData(type)")]),t._v(" "),e("p",[t._v("This gives access to the static workflow data.\nIt is possible to save data directly with the workflow. This data should, however, be very small.\nA common use case is to for example to save a timestamp of the last item that got processed from\nan RSS-Feed or database. It will always return an object. Properties can then read, delete or\nset on that object. When the workflow execution succeeds, n8n will check automatically if the data\nhas changed and will save it, if necessary.")]),t._v(" "),e("p",[t._v('There are two types of static data. The "global" and the "node" one. Global static data is the\nsame in the whole workflow. And every node in the workflow can access it. The node static data\n, however, is different for every node and only the node which set it can retrieve it again.')]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the global workflow static data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" staticData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWorkflowStaticData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the static data of the node")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" staticData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWorkflowStaticData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Access its data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lastExecution "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" staticData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastExecution"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update its data")]),t._v("\nstaticData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastExecution "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Delete data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" staticData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastExecution"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("It is important to know that the static data can not be read and written when testing via the UI.\nThe data there will always be empty and the changes will not persist. Only when a workflow\nis active and it gets called by a Trigger or Webhook, the static data will be saved.")]),t._v(" "),e("h2",{attrs:{id:"external-libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-libraries"}},[t._v("#")]),t._v(" External libraries")]),t._v(" "),e("p",[t._v("You can import and use built-in and external npm modules in the Function node. To learn how to enable external moduels, refer the "),e("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html#use-built-in-and-external-modules-in-function-nodes"}},[t._v("Configuration")]),t._v(" guide.")],1),t._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),e("FurtherReadingBlog")],1)}),[],!1,null,null,null);a.default=n.exports},674:function(t,a,s){t.exports=s.p+"assets/img/workflow.e4608bd0.png"}}]);