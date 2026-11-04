---
title: Osef
eyebrow: Capture and return
description: Local capture for voice, images, and links, with optional sync and agent access you control.
audience: People with thoughts to keep and an agent they already use
role: Design and engineering
kind: experiment
started: 2026
parent: fresh-industries
topics: [Local-first, Mobile, Agents]
status: active
stage: Prototype
order: 4
featured: true
public: true
stack: [Expo, React Native, TypeScript, PostgreSQL, MCP]
question: Can saving an idea stay simple when everything around it gets smarter?
image: /images/projects/osef-home.webp
imageWidth: 393
imageHeight: 852
imageAlt: Osef's warm, minimal capture screen with one microphone action and Image and Link options
imageCaption: Capture screen from the mobile prototype
---

## Saving a thought

I wanted a place to keep a thought without first deciding what to call it or where it belongs. I ran into the same problem with [my personal encyclopedia](/essays/why-i-built-a-personal-encyclopedia/).

Osef lets me save voice, images, and links. I can keep the original without asking an agent to analyze it.

## Local capture, optional sync

The original saves on the device before optional private sync and processing, so a service outage doesn’t cost me a recording.

You can save locally, choose whether to sync, and decide whether an agent can read it.

## Keep the source and the interpretation separate

Agent notes appear beneath the source and show who added them. Adding a note requires a separate permission, and the original stays available.

## Device storage and MCP

The application uses Expo and React Native, local device storage, and an Express API with PostgreSQL for optional private sync. Account-authorized MCP tools let a connected agent search and retrieve synced material. Ownership, permissions, and revocation are checked by the service.

## Where it is today

Osef is a working prototype. I’m still working on device behavior, distribution, and production hosting.
