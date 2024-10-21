---
title: "Fixing VS Code/Code.exe: Exec format error in WSL"
description: How to fix the Exec format error when trying to open VS Code from WSL.
image: https://unsplash.com/photos/vKla95GgAwg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZXJyb3J8ZW58MHx8fHwxNzI5MzQ2NTQ3fDA&force=true&w=1920
authors:
  - adrian
tags:
  - vscode
  - wsl
  - linux
  - troubleshooting
keywords:
  - VS Code
  - WSL
  - Windows
  - Linux
  - Exec format error
  - Troubleshooting
categories:
  - troubleshooting
---

From time to time, we run into issues that seem trivial but can be quite frustrating, when VS Code doesn't open from WSL, it can be one of those issues and it happens after a Windows update or a VS Code update. Here's how to fix it.

I recently ran into an issue where I couldn't open Visual Studio Code from WSL. I would get the following error:

```bash
$ code .
/c/Users/adria/AppData/Local/Programs/Microsoft VS Code/bin/code: 61: /c/Users/adria/AppData/Local/Programs/Microsoft VS Code/Code.exe: Exec format error
```

Read on to learn how to fix this issue.

<!-- truncate -->

This error is due to the fact that the Windows executable is not compatible with the Linux environment. The solution is to create a symbolic link to the Windows executable from the Linux environment. The solution is simple, but it can be frustrating if you don't know what to do, eventually, you might end up reinstalling VS Code or even WSL; don't do that, I got you covered.

Here's how to fix it:

```bash
$  sudo sh -c 'echo :WSLInterop:M::MZ::/init:PF > /usr/lib/binfmt.d/WSLInterop.conf'
[sudo] password for $USER:
$  sudo systemctl unmask systemd-binfmt.service
$  sudo systemctl restart systemd-binfmt
$  sudo systemctl mask systemd-binfmt.service
Created symlink /etc/systemd/system/systemd-binfmt.service → /dev/null.
$ code .
```

That's it! You should now be able to open Visual Studio Code from WSL without any issues. If you still have issues, try restarting your WSL session.

I hope this helps you fix the issue. If you have any questions or comments, feel free to reach out, [send me a message here](https://go.rebelion.la/contact-us) or on [LinkedIn](https://https//www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=adrianescutia). I'm always happy to help. 😊

## References

* Stack Overflow: [Cannot run any WSL commands/Not able to make WSL work with VS Code (Exec Format Error)](https://stackoverflow.com/a/76975972/5078874).
* GitHub: [WSL2 (Preview) cannot run .exe files: exec format error: wsl.exe](https://github.com/microsoft/WSL/issues/8952#issuecomment-1568212651).
* Image source: [Shekai at Unsplash](https://unsplash.com/@shekai).