"use strict";(self.webpackChunkescutia_website=self.webpackChunkescutia_website||[]).push([[8209],{9158:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(6540);var a=s(4164),r=s(1312);const n=()=>(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(1213),i=s(7559),c=s(6531),o=s(6133),d=s(1107);const g={tag:"tag_Nnez"};var h=s(4848);function u(e){let{letterEntry:t}=e;return(0,h.jsxs)("article",{children:[(0,h.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,h.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,h.jsx)("li",{className:g.tag,children:(0,h.jsx)(o.A,{...e})},e.permalink)))}),(0,h.jsx)("hr",{})]})}function x(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,h.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,h.jsx)(u,{letterEntry:e},e.letter)))})}var m=s(1463);function j(e){let{tags:t,sidebar:s}=e;const r=n();return(0,h.jsxs)(l.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagsListPage),children:[(0,h.jsx)(l.be,{title:r}),(0,h.jsx)(m.A,{tag:"blog_tags_list"}),(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsx)(d.A,{as:"h1",children:r}),(0,h.jsx)(x,{tags:t})]})]})}},6133:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var a=s(4164),r=s(8774);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(4848);function i(e){let{permalink:t,label:s,count:i,description:c}=e;return(0,l.jsxs)(r.A,{href:t,title:c,className:(0,a.A)(n.tag,i?n.tagWithCount:n.tagRegular),children:[s,i&&(0,l.jsx)("span",{children:i})]})}},6531:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(6540),r=s(2195),n=s(4164),l=s(5596),i=s(9274),c=s(1397),o=s(8126),d=s(3308),g=s(8088),h=s(6720),u=s(4848);function x(e){let{divider:t=!0}=e;return a.useEffect((()=>{const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"21339207",formId:"93a8a63d-4948-43c7-a3d9-4062684a303e",target:"#hubspotForm"})}))}),[]),(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)(c.A,{inset:"none",orientation:"horizontal",sx:{my:2}}),(0,u.jsx)(o.A,{sx:{display:"flex",gap:1,my:2,alignSelf:"stretch",flexBasis:"80%",flexDirection:"column"},children:(0,u.jsxs)(d.A,{spacing:1,children:[(0,u.jsx)("div",{id:"hubspotForm",style:{margin:"auto"}}),(0,u.jsxs)(g.Ay,{fontSize:"xs",textColor:"text.secondary",children:["By continuing you agree to our"," ",(0,u.jsx)(h.A,{color:"neutral",children:(0,u.jsx)("b",{children:"Privacy Policy"})})]})]})})]})}function m(e){const{sidebar:t,toc:s,children:a,...c}=e,o=t&&t.items.length>0,d=(0,r.zy)();return(0,u.jsx)(l.A,{...c,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(i.A,{sidebar:t}),(0,u.jsxs)("main",{className:(0,n.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:[a,"/"!==d.pathname&&(0,u.jsx)(x,{})]}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}}}]);