---
title: "Understanding IAAC with Ansible"
subtitle: "A brief introduction to Ansible, an open-source automation tool for managing infraestructure."
date: "2024-01-04"
color: '#7dd3fc'
---

# What is IAAC?

Infrastructure as a Code (IaaC) is a practice in software engineering that involves managing and provisioning computing infrastructure through definition files. With IaaC, infrastructure configurations, including servers, networks, databases, and other resources, are defined in code files using a descriptive language, such as YAML or JSON.

## What is Ansible?

Ansible is an open-source automation tool for managing infraestructure and performing repetitive tasks, such as provisioning, config management and deployment of applications.

It operates over SSH and uses a language called YAML to define tasks and playbooks.

## What can you do with Ansible?

- Execute tasks from your own machine
- config;install;deploy steps in a single YAML file
- re-use same file multiple times in multiple environments

### Ansible characteristics
- Supports all operating systems because is agentless.
- SSH to manage servers remotely
- No upgrade needed

### Ansible Architecture and definitions
- Ansible has Modules.
    - One Module does one specific task.
- It has many different modules for every IT task.
- Uses YAML
- Play: Sequence of tasks (modules) to be executed. 
- Hosts: Where should the tasks execute
- Remote_user: Which user should the tasks execute
- You can define variables with vars command
- Playbook: One or more plays
- The hosts are located in an Ansible inventory list