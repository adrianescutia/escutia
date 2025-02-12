---
title: "Fixing 'npm install did not complete successfully' Docker"
description: "Fixing 'npm install did not complete successfully' error in Docker build"
draft: true
authors:
  - adrian
tags:
  - docker
  - npm
  - typescript
  - nodejs
  - javascript
keywords:
  - docker
  - npm
  - typescript
  - nodejs
  - javascript
  - npm install
  - docker build
  - dockerfile
  - fixing npm install
---

# Fixing 'npm install did not complete successfully' error in Docker build

My first thought was that it was a Node version issue, but it turned out to be a TypeScript configuration issue.

<!-- truncate -->

## Problem

When building a Docker image, you get the following error:

```bash
> [builder 6/6] RUN --mount=type=cache,target=/root/.npm npm install:                
4.675 npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.          
4.716 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
5.103 
5.103 > @agentico/mcp-github-sse@0.1.0 prepare
5.103 > npm run build
5.103 
5.243 
5.243 > @agentico/mcp-github-sse@0.1.0 build
5.243 > tsc && shx chmod +x dist/*.js
5.243 
8.040 chmod: File not found: /dist/*.js
8.063 npm error code 1
8.063 npm error path /
8.063 npm error command failed
8.063 npm error command sh -c npm run build
8.064 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-01-22T13_06_18_636Z-debug-0.log
------
Dockerfile:13
--------------------
  11 |     WORKDIR /app
  12 |     
  13 | >>> RUN --mount=type=cache,target=/root/.npm npm install
  14 |     
  15 |     FROM node:${NODE_VERSION}-alpine AS release
--------------------
ERROR: failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 1
```

## Solution

The issue is with the TypeScript configuration. The `chmod` command is trying to change the permissions of the files in the `dist` directory, but the files are not there because the TypeScript build failed.

Fix with:

Change your tsconfig.json to include `Node16` in the `module` field:
"module": "Node16"

