(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1447:function(t,e,o){t.exports=o.p+"assets/img/workflow.9d7f2d50.png"},1448:function(t,e,o){t.exports=o.p+"assets/img/MauticTrigger_node.53617833.png"},1449:function(t,e,o){t.exports=o.p+"assets/img/Twilio_node.bffa808d.png"},2134:function(t,e,o){"use strict";o.r(e);var i=o(26),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"mautic-trigger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mautic-trigger"}},[t._v("#")]),t._v(" Mautic Trigger")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://www.mautic.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mautic"),i("OutboundLink")],1),t._v(" is an open-source marketing automation software that helps online businesses automate their repetitive marketing tasks such as lead generation, contact scoring, contact segmentation, and marketing campaigns.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),i("p",[t._v("You can find authentication information for this node "),i("RouterLink",{attrs:{to:"/nodes/credentials/Mautic/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"example-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),i("p",[t._v("This workflow allows you to receive updates when a form is submitted in Mautic using the Mautic Trigger node and send an SMS confirmation to the submitter. You can also find the "),i("a",{attrs:{href:"https://n8n.io/workflows/721",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),i("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following node.")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:""}},[t._v("Mautic Trigger")])]),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[t._v("Twilio")])],1)]),t._v(" "),i("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),i("p",[i("img",{attrs:{src:o(1447),alt:"A workflow with the Mautic Trigger node"}})]),t._v(" "),i("h3",{attrs:{id:"_1-mautic-trigger-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-mautic-trigger-node"}},[t._v("#")]),t._v(" 1. Mautic Trigger node")]),t._v(" "),i("p",[t._v("The Mautic Trigger node will trigger the workflow when a Mautic form is submitted.")]),t._v(" "),i("ol",[i("li",[t._v("First of all, you'll have to enter credentials for the Mautic Trigger node. You can find out how to do that "),i("RouterLink",{attrs:{to:"/nodes/credentials/Mautic/"}},[t._v("here")]),t._v(".")],1),t._v(" "),i("li",[t._v("Select 'Form Submit Event' from the "),i("em",[i("strong",[t._v("Events")])]),t._v(" dropdown list.")]),t._v(" "),i("li",[t._v("Click on "),i("em",[i("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),i("p",[t._v("In the screenshot below, you will notice that the node returns the data that was submitted to the Mautic form. This output is passed on to the next nodes in the workflow.")]),t._v(" "),i("p",[i("img",{attrs:{src:o(1448),alt:"Using the Mautic Trigger node to trigger the workflow"}})]),t._v(" "),i("h3",{attrs:{id:"_2-twilio-node-send-sms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-twilio-node-send-sms"}},[t._v("#")]),t._v(" 2. Twilio node (send: sms)")]),t._v(" "),i("p",[t._v("This node sends a registration confirmation SMS to the users who filled out the Mautic form. We get the phone number of the submitter from the previous node.")]),t._v(" "),i("ol",[i("li",[t._v("First of all, you'll have to enter credentials for the Twilio node. You can find out how to do that "),i("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),i("div",{pre:!0},[i("ol",{pre:!0,attrs:{start:"3"}},[i("li",[t._v("Enter the Twilio phone number in the "),i("em",[i("strong",[t._v("From")])]),t._v(" field.")]),t._v(" "),i("li",[t._v("Click on the gears icon next to the "),i("em",[i("strong",[t._v("To")])]),t._v(" field and click on "),i("em",[i("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),i("li",[t._v("Select the following in the "),i("em",[i("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Mautic Trigger > Output Data > JSON > mautic.form_on_submit > [item: 0] > submission > results > phone_number. You can also add the following expression: "),i("code",[t._v('{{$node["Mautic Trigger"].json["mautic.form_on_submit"][0]["submission"]["results"]["phone_number"]}}')]),t._v(".")]),t._v(" "),i("li",[t._v("Click on the gears icon next to the "),i("em",[i("strong",[t._v("Message")])]),t._v(" field and click on "),i("em",[i("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),i("li",[t._v("Enter the following message in the "),i("em",[i("strong",[t._v("Expression")])]),t._v(" field.")])]),t._v(" "),i("div",{pre:!0,attrs:{class:"language- extra-class"}},[i("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[i("code",[t._v('Hey, {{$node["Mautic Trigger"].json["mautic.form_on_submit"][0]["submission"]["results"]["first_name"]}} 👋\nThank you for signing up for the Webinar - Getting Started with n8n. The webinar will start at 1800 CEST on 31st October 2020.\nSee you there!\n')])])]),i("ol",{pre:!0,attrs:{start:"8"}},[i("li",[t._v("Click on "),i("em",[i("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),i("p",[t._v("In the screenshot below, you will notice that the node sends an SMS to the submitter whose name and phone number are returned by the Mautic Trigger node.")]),t._v(" "),i("p",[i("img",{attrs:{src:o(1449),alt:"Using the Twilio node to send an SMS"}})]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("💡 Activate workflow for production")]),t._v(" "),i("p",[t._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Mautic Trigger node.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);