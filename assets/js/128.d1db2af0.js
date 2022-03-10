(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1300:function(e,t,a){e.exports=a.p+"assets/img/workflow.ef975062.png"},1301:function(e,t,a){e.exports=a.p+"assets/img/Taiga_node.06c2da2b.png"},1302:function(e,t,a){e.exports=a.p+"assets/img/Taiga1_node.d455f06c.png"},1303:function(e,t,a){e.exports=a.p+"assets/img/Taiga2_node.7b9a18b0.png"},2057:function(e,t,a){"use strict";a.r(t);var o=a(26),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"taiga"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taiga"}},[e._v("#")]),e._v(" Taiga")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.taiga.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Taiga"),o("OutboundLink")],1),e._v(" is a free and open-source project management platform for startups, agile developers, and designers.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Taiga/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Issue")]),e._v(" "),o("ul",[o("li",[e._v("Create an issue")]),e._v(" "),o("li",[e._v("Delete an issue")]),e._v(" "),o("li",[e._v("Get an issue")]),e._v(" "),o("li",[e._v("Get all issues")]),e._v(" "),o("li",[e._v("Update an issue")])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create, update, and get an issue on Taiga. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/685",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Taiga")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1300),alt:"A workflow with the Taiga node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-taiga-node-create-issue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-taiga-node-create-issue"}},[e._v("#")]),e._v(" 2. Taiga node (create: issue)")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Taiga node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Taiga/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select the project ID from the "),o("em",[o("strong",[e._v("Project ID")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter the subject of the issue in the "),o("em",[o("strong",[e._v("Subject")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(1301),alt:"Using the Taiga node to create an issue"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_3-taiga1-node-update-issue"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-taiga1-node-update-issue"}},[e._v("#")]),e._v(" 3. Taiga1 node (update: issue)")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Update' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Project ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Taiga > Output Data > JSON > project. You can also add the following expression: "),o("code",[e._v('{{$node["Taiga"].json["project"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Issue ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Taiga > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["Taiga"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" button and select 'Description' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter the description of the issue in the "),o("em",[o("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[o("img",{attrs:{src:a(1302),alt:"Using the Taiga node to update an issue"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_4-taiga2-node-get-issue"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-taiga2-node-get-issue"}},[e._v("#")]),e._v(" 4. Taiga2 node (get: issue)")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Get' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Issue ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Taiga > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["Taiga"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[o("img",{attrs:{src:a(1303),alt:"Using the Taiga node to get an issue"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);