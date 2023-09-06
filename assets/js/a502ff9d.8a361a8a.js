"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[73064],{11015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(51163),o=(n(59496),n(49613));const i={description:"Develop and test Mailchimp webhooks from localhost"},r="Mailchimp Webhooks",l={unversionedId:"integrations/mailchimp/webhooks",id:"integrations/mailchimp/webhooks",title:"Mailchimp Webhooks",description:"Develop and test Mailchimp webhooks from localhost",source:"@site/docs/integrations/mailchimp/webhooks.md",sourceDirName:"integrations/mailchimp",slug:"/integrations/mailchimp/webhooks",permalink:"/docs/integrations/mailchimp/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/mailchimp/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Mailchimp webhooks from localhost"},sidebar:"docs",previous:{title:"Mailchimp",permalink:"/docs/integrations/mailchimp/"},next:{title:"Mailgun",permalink:"/docs/integrations/mailgun/"}},p={},s=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Mailchimp",id:"setup-webhook",level:2},{value:"Run Webhooks with Mailchimp and ngrok",id:"run-webhooks-with-mailchimp-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3}],h={toc:s},c="wrapper";function k(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mailchimp-webhooks"},"Mailchimp Webhooks"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"TL;DR",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To integrate Mailchimp webhooks with ngrok:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Mailchimp webhooks with your ngrok URL.")))),(0,o.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Mailchimp by using Webhooks.\nMailchimp webhooks can be used to notify an external application whenever specific events occur in your Mailchimp account."),(0,o.kt)("p",null,"By integrating ngrok with Mailchimp, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Develop and test Mailchimp webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Mailchimp")," in real-time via the inspection UI and API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify and Replay Mailchimp Webhook requests")," with a single click and without spending time reproducing events manually in your Mailchimp account.")),(0,o.kt)("h2",{id:"start-your-app"},(0,o.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,o.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,o.kt)("p",null,"This will get the project installed locally."),(0,o.kt)("p",null,"Now you can launch the app by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"The app runs by default on port 3000."),(0,o.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,o.kt)("h2",{id:"start-ngrok"},(0,o.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,o.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Mailchimp).\n",(0,o.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,o.kt)("h2",{id:"setup-webhook"},(0,o.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Mailchimp"),(0,o.kt)("p",null,"To register a webhook on your Mailchimp account follow the instructions below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access ",(0,o.kt)("a",{parentName:"p",href:"https://https://mailchimp.com/"},"Mailchimp")," and sign in using your Mailchimp account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Mailchimp ",(0,o.kt)("strong",{parentName:"p"},"Home")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Audience")," on the left menu and then click ",(0,o.kt)("strong",{parentName:"p"},"Audience dashboard"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Audience")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Manage Audience")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Settings"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Create New Webhook"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Create new webhook")," page, enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,o.kt)("strong",{parentName:"p"},"Callback URL")," field (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),") and then click ",(0,o.kt)("strong",{parentName:"p"},"Save"),".\n",(0,o.kt)("img",{alt:"URL to Publish",src:n(95667).Z,width:"1078",height:"626"})),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives a GET request and logs both headers and body in the terminal."))),(0,o.kt)("h3",{id:"run-webhooks-with-mailchimp-and-ngrok"},"Run Webhooks with Mailchimp and ngrok"),(0,o.kt)("p",null,"Mailchimp sends different request body contents depending on the audience you register your webhook, as well as depending on the event taking place.\nYou can trigger new calls from Mailchimp to your application by following the instructions below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Mailchimp ",(0,o.kt)("strong",{parentName:"p"},"Home")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Audience")," on the left menu and then click ",(0,o.kt)("strong",{parentName:"p"},"All Contacts"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Audience")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add contacts")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Add a subscriber"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Add subscriber")," page, enter a valid email address in the ",(0,o.kt)("strong",{parentName:"p"},"Email Address")," field, click the ",(0,o.kt)("strong",{parentName:"p"},"This person gave me permission to email them")," checkbox, and then click ",(0,o.kt)("strong",{parentName:"p"},"Subscribe"),".\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": If you don't have the email address on your contact list, you need to import this contact."),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives the create-project event notification and logs both headers and body in the terminal."))),(0,o.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,o.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,o.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,o.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,o.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,o.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,o.kt)("p",null,"To inspect Mailchimp's webhooks call, launch the ngrok web interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),") and then click one of the requests sent by Mailchimp."),(0,o.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ngrok Request Inspector",src:n(44504).Z,width:"1184",height:"583"})),(0,o.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,o.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Mailchimp. To replay a request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Mailchimp.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you choose to ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,o.kt)("strong",{parentName:"p"},"data email")," field inside the body of the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."))}k.isMDXComponent=!0},44504:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_introspection_mailchimp_webhooks-4e689d02b9d498c851792b115d425f13.png"},95667:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_url_configuration_mailchimp-51519ce65622367e493199cd0b02ce3f.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);