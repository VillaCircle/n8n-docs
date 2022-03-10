(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1006:function(e,t,o){e.exports=o.p+"assets/img/workflow.b09298bf.png"},1007:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.0822c4ce.png"},1008:function(e,t,o){e.exports=o.p+"assets/img/OpenWeatherMap_node.5ce31962.png"},1009:function(e,t,o){e.exports=o.p+"assets/img/Gotify_node.c5bd44ff.png"},1943:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"gotify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gotify"}},[e._v("#")]),e._v(" Gotify")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://gotify.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gotify"),r("OutboundLink")],1),e._v(" is a server for sending and receiving messages.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Gotify/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.gotify"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to send daily weather updates via a message using the Gotify node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/774",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Gotify")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1006),alt:"A workflow with the Gotify node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-cron-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),r("p",[e._v("The Cron node will trigger the workflow daily at 9 AM.")]),e._v(" "),r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),r("li",[e._v("Set hours to 9 in the "),r("em",[r("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 9 AM.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1007),alt:"Using the Cron node to trigger the workflow daily at 9 am"}})]),e._v(" "),r("h3",{attrs:{id:"_2-openweathermap-node-current-weather"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node-current-weather"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node (Current Weather)")]),e._v(" "),r("p",[e._v("This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the OpenWeatherMap node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("berlin")]),e._v(" in the "),r("em",[r("strong",[e._v("City")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns data about the current weather in Berlin.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1008),alt:"Using the OpenWeatherMap node to get weather updates for Berlin"}})]),e._v(" "),r("h3",{attrs:{id:"_3-gotify-node-create-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-gotify-node-create-message"}},[e._v("#")]),e._v(" 3. Gotify node (create: message)")]),e._v(" "),r("p",[e._v("This node will send a message with the weather update.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Gotify node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Gotify/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Message")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"3"}},[r("li",[e._v("Enter the following message in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field: "),r("code",[e._v('Hey! The temperature outside is {{$node["OpenWeatherMap"].json["main"]["temp"]}}°C.')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Title' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Today's Weather Update")]),e._v(" in the "),r("em",[r("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends a message with the weather update.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1009),alt:"Using the Gotify node to send weather updates via a message"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);