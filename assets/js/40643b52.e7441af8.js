"use strict";(self.webpackChunkescutia_website=self.webpackChunkescutia_website||[]).push([[2955],{6066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var n=o(8465),i=o(4848),s=o(8453);const r={title:"Fixing VS Code/Code.exe: Exec format error in WSL",description:"How to fix the Exec format error when trying to open VS Code from WSL.",image:"https://unsplash.com/photos/vKla95GgAwg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZXJyb3J8ZW58MHx8fHwxNzI5MzQ2NTQ3fDA&force=true&w=1920",authors:["adrian"],tags:["vscode","wsl","linux","troubleshooting"],keywords:["VS Code","WSL","Windows","Linux","Exec format error","Troubleshooting"],categories:["troubleshooting"]},a=void 0,c={authorsImageUrls:[void 0]},d=[{value:"References",id:"references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"From time to time, we run into issues that seem trivial but can be quite frustrating, when VS Code doesn't open from WSL, it can be one of those issues and it happens after a Windows update or a VS Code update. Here's how to fix it."}),"\n",(0,i.jsx)(t.p,{children:"I recently ran into an issue where I couldn't open Visual Studio Code from WSL. I would get the following error:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ code .\n/c/Users/adria/AppData/Local/Programs/Microsoft VS Code/bin/code: 61: /c/Users/adria/AppData/Local/Programs/Microsoft VS Code/Code.exe: Exec format error\n"})}),"\n",(0,i.jsx)(t.p,{children:"Read on to learn how to fix this issue."}),"\n",(0,i.jsx)(t.p,{children:"This error is due to the fact that the Windows executable is not compatible with the Linux environment. The solution is to create a symbolic link to the Windows executable from the Linux environment. The solution is simple, but it can be frustrating if you don't know what to do, eventually, you might end up reinstalling VS Code or even WSL; don't do that, I got you covered."}),"\n",(0,i.jsx)(t.p,{children:"Here's how to fix it:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$  sudo sh -c 'echo :WSLInterop:M::MZ::/init:PF > /usr/lib/binfmt.d/WSLInterop.conf'\n[sudo] password for $USER:\n$  sudo systemctl unmask systemd-binfmt.service\n$  sudo systemctl restart systemd-binfmt\n$  sudo systemctl mask systemd-binfmt.service\nCreated symlink /etc/systemd/system/systemd-binfmt.service \u2192 /dev/null.\n$ code .\n"})}),"\n",(0,i.jsx)(t.p,{children:"That's it! You should now be able to open Visual Studio Code from WSL without any issues. If you still have issues, try restarting your WSL session."}),"\n",(0,i.jsxs)(t.p,{children:["I hope this helps you fix the issue. If you have any questions or comments, feel free to reach out, ",(0,i.jsx)(t.a,{href:"https://go.rebelion.la/contact-us",children:"send me a message here"})," or on ",(0,i.jsx)(t.a,{href:"https://https//www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=adrianescutia",children:"LinkedIn"}),". I'm always happy to help. \ud83d\ude0a"]}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Stack Overflow: ",(0,i.jsx)(t.a,{href:"https://stackoverflow.com/a/76975972/5078874",children:"Cannot run any WSL commands/Not able to make WSL work with VS Code (Exec Format Error)"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["GitHub: ",(0,i.jsx)(t.a,{href:"https://github.com/microsoft/WSL/issues/8952#issuecomment-1568212651",children:"WSL2 (Preview) cannot run .exe files: exec format error: wsl.exe"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Image source: ",(0,i.jsx)(t.a,{href:"https://unsplash.com/@shekai",children:"Shekai at Unsplash"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},8465:e=>{e.exports=JSON.parse('{"permalink":"/adrian/fixing-vscode-code.exe--exec-format-error-in-wsl","source":"@site/adrian/fixing-vscode-code.exe--exec-format-error-in-wsl.md","title":"Fixing VS Code/Code.exe: Exec format error in WSL","description":"How to fix the Exec format error when trying to open VS Code from WSL.","date":"2024-10-19T15:16:46.000Z","tags":[{"inline":false,"label":"Visual Studio Code","permalink":"/adrian/tags/vscode","description":"Visual Studio Code topics"},{"inline":false,"label":"Windows Subsystem for Linux","permalink":"/adrian/tags/wsl","description":"Windows Subsystem for Linux"},{"inline":false,"label":"Visual Studio Code","permalink":"/adrian/tags/linux","description":"Linux tag description"},{"inline":false,"label":"Troubleshooting","permalink":"/adrian/tags/troubleshooting","description":"How to troubleshoot common issues"}],"readingTime":1.525,"hasTruncateMarker":true,"authors":[{"name":"Adrian Escutia","title":"A Rebel with a Cause, Innovating the Future","url":"https://www.linkedin.com/in/adrianescutia/","imageURL":"data:image/jpeg;base64,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","key":"adrian","page":null}],"frontMatter":{"title":"Fixing VS Code/Code.exe: Exec format error in WSL","description":"How to fix the Exec format error when trying to open VS Code from WSL.","image":"https://unsplash.com/photos/vKla95GgAwg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZXJyb3J8ZW58MHx8fHwxNzI5MzQ2NTQ3fDA&force=true&w=1920","authors":["adrian"],"tags":["vscode","wsl","linux","troubleshooting"],"keywords":["VS Code","WSL","Windows","Linux","Exec format error","Troubleshooting"],"categories":["troubleshooting"]},"unlisted":false,"prevItem":{"title":"Kubernetes in Airgap Environments: Climbing to the Top Spot!","permalink":"/adrian/kubernetes-in-airgap-environments-search"},"nextItem":{"title":"A slight pivot in the Airgap Bundler","permalink":"/adrian/update-about-airgap-tool"}}')}}]);