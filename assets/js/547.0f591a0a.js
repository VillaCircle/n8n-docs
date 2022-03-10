(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1668:function(t,e,o){"use strict";o.r(e);var r=o(26),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"hubspot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hubspot"}},[t._v("#")]),t._v(" HubSpot")]),t._v(" "),o("p",[t._v("You can use these credentials to authenticate the following nodes with HubSpot.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/HubSpot/"}},[t._v("HubSpot")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/HubSpotTrigger/"}},[t._v("HubSpot Trigger")])],1)]),t._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),o("p",[t._v("Create a "),o("a",{attrs:{href:"https://www.hubspot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HubSpot"),o("OutboundLink")],1),t._v(" account.")]),t._v(" "),o("h2",{attrs:{id:"using-oauth"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[t._v("#")]),t._v(" Using OAuth")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("⛅️ Note for n8n.cloud users")]),t._v(" "),o("p",[t._v("You'll only need to enter the Credentials Name and click on the circle button in the OAuth section to connect your HubSpot account to n8n.")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠ HubSpot old accounts")]),t._v(" "),o("p",[t._v("Some HubSpot accounts don't have access to all the scopes. HubSpot is migrating accounts gradually. If you can't' find all the scopes in your current HubSpot developer account, try creating a fresh developer account.")])]),t._v(" "),o("ol",[o("li",[t._v("Access your "),o("a",{attrs:{href:"https://developers.hubspot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HubSpot Developer Home"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Click on the "),o("strong",[t._v("Manage apps")]),t._v(" button.")]),t._v(" "),o("li",[t._v("Click on the "),o("strong",[t._v("Create app")]),t._v(" button in the top right.")]),t._v(" "),o("li",[t._v("Specify an app name in the "),o("strong",[t._v("Public app name")]),t._v(" field.")]),t._v(" "),o("li",[t._v("Click on the 'Auth' tab.")]),t._v(" "),o("li",[t._v("Use the provided "),o("strong",[t._v("Client ID")]),t._v(" and the "),o("strong",[t._v("Client secret")]),t._v(" with your HubSpot OAuth2 API credentials in n8n.")]),t._v(" "),o("li",[t._v("If you are using the "),o("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/HubSpotTrigger/"}},[t._v("HubSpot Trigger")]),t._v(" node, copy the "),o("strong",[t._v("App ID")]),t._v(" along with the information in the previous step.")],1),t._v(" "),o("li",[t._v("Copy your OAuth Callback URL from the 'Create New Credentials' screen in n8n and paste in the "),o("strong",[t._v("Redirect URL")]),t._v(" section.")]),t._v(" "),o("li",[t._v("In the Scopes section, select the following scopes in the "),o("strong",[t._v("Find a scope")]),t._v(" search box:\n"),o("ul",[o("li",[t._v("Trigger node:\n"),o("ul",[o("li",[t._v("oauth")]),t._v(" "),o("li",[t._v("crm.objects.contacts (read),")]),t._v(" "),o("li",[t._v("crm.schemas.contacts (read),")]),t._v(" "),o("li",[t._v("crm.objects.companies (read),")]),t._v(" "),o("li",[t._v("crm.schemas.companies (read),")]),t._v(" "),o("li",[t._v("crm.objects.deals (read),")]),t._v(" "),o("li",[t._v("crm.schemas.deals (read),")])])]),t._v(" "),o("li",[t._v("Regular node:\n"),o("ul",[o("li",[t._v("oauth")]),t._v(" "),o("li",[t._v("crm.schemas.deals (read),")]),t._v(" "),o("li",[t._v("crm.objects.owners (read),")]),t._v(" "),o("li",[t._v("crm.objects.contacts (write),")]),t._v(" "),o("li",[t._v("crm.objects.companies (write),")]),t._v(" "),o("li",[t._v("crm.objects.companies (read),")]),t._v(" "),o("li",[t._v("crm.objects.deals (read),")]),t._v(" "),o("li",[t._v("crm.schemas.contacts (read),")]),t._v(" "),o("li",[t._v("crm.objects.deals (write),")]),t._v(" "),o("li",[t._v("crm.objects.contacts (read),")]),t._v(" "),o("li",[t._v("crm.schemas.companies (read),")]),t._v(" "),o("li",[t._v("forms,")]),t._v(" "),o("li",[t._v("tickets,")])])])])]),t._v(" "),o("li",[t._v("Click on the "),o("strong",[t._v("Save")]),t._v(" button to save your settings in HubSpot.")]),t._v(" "),o("li",[t._v("Back in n8n, click on the circle button in the OAuth section to connect your HubSpot account to n8n.")]),t._v(" "),o("li",[t._v("Click the "),o("strong",[t._v("Save")]),t._v(" button to save your credentials.")])]),t._v(" "),o("h2",{attrs:{id:"using-api-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-api-key"}},[t._v("#")]),t._v(" Using API key")]),t._v(" "),o("ol",[o("li",[t._v("Access your HubSpot dashboard.")]),t._v(" "),o("li",[t._v("Click on the gear icon on the top right.")]),t._v(" "),o("li",[t._v("Click on "),o("strong",[t._v("Integrations")]),t._v(" and then "),o("strong",[t._v("API key")]),t._v(".")]),t._v(" "),o("li",[t._v("Click on the "),o("strong",[t._v("Create key")]),t._v(" button.")]),t._v(" "),o("li",[t._v("Use the key with HubSpot node credentials in n8n.")])]),t._v(" "),o("h2",{attrs:{id:"using-developer-api-key-for-hubspot-trigger-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-developer-api-key-for-hubspot-trigger-node"}},[t._v("#")]),t._v(" Using Developer API Key (for HubSpot Trigger node)")]),t._v(" "),o("ol",[o("li",[t._v("Access your "),o("a",{attrs:{href:"https://developers.hubspot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HubSpot Developer Home"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Click on "),o("strong",[t._v("Apps")]),t._v(" in the top bar.")]),t._v(" "),o("li",[t._v("Click on the "),o("strong",[t._v("Get HubSpot API key")]),t._v(" button.")]),t._v(" "),o("li",[t._v("Click on the "),o("strong",[t._v("Show key")]),t._v(" button.")]),t._v(" "),o("li",[t._v("Use the displayed Developer API key with your HubSpot Trigger node credentials in n8n.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);