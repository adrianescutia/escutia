---
title: "A journey to create a Serverless Kubernetes Cluster"
description: "La Rebelion, a journey to create a Serverless Kubernetes Cluster"
draft: true
---

# La Rebelion, a journey to create a Serverless Kubernetes Cluster

"La Rebelion" started as a side project, to share knowledge and help others to create a Vanilla Kubernetes clusters in airgap environments, but it has grown into a full-fledged project with a lot of potential and different use cases. The project is a collection of tools and resources that can be used to support the operation of a Kubernetes cluster, and it is designed to be used by anyone, regardless of their experience with Kubernetes.

<!-- truncate -->

## Background

My professional experience and core competencies include: 
- Over 20+ years of experience in Telecommunications, OSS specialized in Service Provisioning, and Activation.
- Mainly, developing and maintaining back-end services and APIs.
-	15+ years of experience as back-end developer.
- 18+ years of experience as Systems Architect and Technical Lead.
- 4 years of practical experience working with cloud technologies, private cloud, and Kubernetes/OpenShift.
- My profeesional experience on front-end development is limited compared to back-end development; in my side projects I have used React, Angular, and other front-end technologies. I dropped Angular in favor of React because of its local-first approach and its simplicity.

Why am I saying this? Because, I have a breath and depth of experience in back-end development, and I am confident that I am going to be able to create something amazing with the help of the resources based on these competencies. I am going to use state-of-the-art resources to learn and apply the knowledge to create a solution that is going to be useful for the community.

"La Rebelion" borned because of the repetitive need in my team to create Kubernetes clusters for testing purposes, the challenge was to create these in restricted environments, or air-gapped environments. Eventhougth I documented the process, the team was not able to create the clusters without my help. Yes, Kubernetes is boring technology, but only after you gain experience with tears, sweat, and blood. I wanted to create a tool that can be used by anyone to create a Kubernetes cluster in restricted environments, and that is how "La Rebelion" was borned.

Today we have alternatives like K3s, Kind, K0s, microk8s, and others, but back in the day, there were nothing like that. 

Another problem that I have observed is the lack of simplicity in the Kubernetes ecosystem, and the lack of tools for newcommers to learn AND use Kubernetes. Many developers don't have (and didn't need) the knowledge required to manage a Kubernetes cluster, and the learning curve is steeper for them. 

In my quest to create a **Serverless Kubernetes Cluster** (K1s), that users can work with without the need to create a cluster, either on-premises or in the cloud, I faced the challenge to bring an interface that is simple to use, and that can be used by anyone. With React I was able to prototype the interface, **K1s-Terminal**, a web-terminal that can be used to interact with multiple Kubernetes clusters. Why a web-terminal? To access the Kubernetes cluster in restricted environments, you need to use a bastion host, and a solution that I found was to use a local web-terminal to access the bastion host, and from there access the Kubernetes cluster.

This prototype, being web App based, can be used by anyone with a browser, and I included a feature to integrate a bot that can be used to assist the user in the process regarless of the experience of the user with Kubernetes. QBot require access to public LLMs, of course, but because of the nature of the projects, enterprises are concerned about the security of the data, and the solution use local LLMs to interact with the data.

APICove

I have to recognize, front-end development is quite a challenge for back-end developers, but thanks to the resources available in the React community, it is much easier to create a web app. My last resource is Refine, a React framework that facilitates the creation of CRUD interfaces, with amazing features like hooks, and a simple way to create a GraphQL API.

The new UX approach is chat with agents.