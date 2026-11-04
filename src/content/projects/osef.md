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

## An idea should not need a filing system

I wanted a place to keep a thought without first deciding what to call it, where it belongs, or what I should do with it. That is the same frustration behind [my personal encyclopedia](/essays/why-i-built-a-personal-encyclopedia/).

Osef starts with capture: voice, an image, or a link. Saving does not ask an agent to analyze anything. The original is useful on its own.

## Local capture, optional sync

The original saves locally before optional private sync and processing. An unavailable service should not turn a passing thought into a lost recording.

Saving an original, syncing a copy, and allowing an agent to read it are separate decisions. Capturing something should not require agreeing to all three.

## Keep the source and the interpretation separate

An agent's summary is not the original thought. Osef keeps attributed agent notes beneath the source, with a separate permission for adding them. The original remains available to return to.

## Device storage and MCP

The application uses Expo and React Native, local device storage, and an Express API with PostgreSQL for optional private sync. Account-authorized MCP tools let a connected agent search and retrieve synced material. Ownership, permissions, and revocation are checked by the service.

## Where it is today

Osef is a working prototype. I am still working on device behavior, distribution, and production hosting.
