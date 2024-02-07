---
title: "Getting Started with Kubernetes"
subtitle: "Check this simple guide to start using Kubernetes and understanding new concepts."
date: "2024-01-04"
color: '#7dd3fc'
---

# A container orchestration tool

- Manage applications that have thousands of containers in different deployment environments

## What is the need for a container orchestration tool?

- Go from Monolith to Microservices
- Increased usage of containers

## Pods
- Pod is the smallest unit of kubernetes. Is the abstraction of the container. You can run multiple containers inside one pod, but is usually 1 application per pod.
- Each pod gets an internal IP Address
- Pod components are ephemeral
- Each time a pod restarts the ip address changes
- Ingress is a component that does the fowarding of services of each pod.
- services are components that give a separated ip adress from the pod

### Config map
- Config map stores some information like database url in plain text
- Secret is like config map but for passwords and are encoded in based64
- You can use the data from config map or secret using env variables - K8s is not data persistent. Use Volumes to storage all data in a remote service - Service is also a load balancer
### Deployments
- Deployment: You create a blueprint and specify the number of replicas of a pod. A deployment is an abstraction on top of pods.
- Deployment for stateless apps

### StatefulSet
- StatefulSet for stateFUL apps or databases.
- It's not easy. It's a common practice to host the database outside of the k8 cluster.

# Kubernetes Architecture
## Worker Nodes

- cluster servers that do the work
- have 3 required processes: (kubelet, kube proxy and container runtime)
- A container have multiple nodes
- In worker nodes, you communicate using services and kube proxy

## Kubelet - Process of Kubernetes itself
- Interacts with container and node
- starts the pod with a container runtime inside (for example, docker)
- 

## Kube Proxy
- Inteligent fowarding logic, foward the requests

## Master Node
- Have an API server that validates every request and send to other processes
- one entrypoint into the cluster
- have a Scheduler that decides based on resources.
- the kubelet gets the request and execute it inside the node
- master node has a controller manager to detect state changes
- when pods die, controller manager detects and recover.

## etcd - cluster brain
- cluster changes get stored in the key value store
