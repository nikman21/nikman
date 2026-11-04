---
title: Bara
eyebrow: Creative tools
description: A local creative studio where people and agents work through the same editing engine, with originals and changes kept intact.
audience: People making artwork, stories, and animation with their own tools
role: Builder and creative direction
kind: product
started: 2026
parent: fresh-industries
topics: [Creative tools, Native software, Agents]
status: active
stage: In development
order: 3
featured: true
public: true
stack: [Rust, React, Tauri, CLI, Local files]
question: How can a person and an agent edit the same document without losing work?
image: /images/projects/bara-editor.webp
imageAlt: Bara's native editor with an editable poster, layer list, and drawing tools
imageCaption: The native editor with demonstration artwork. Interface and content are from the project.
demo: animation
---

## I want to make things with the tools I build

I have been getting into animation with AI. But I want more control than asking a model for a finished clip and hoping the next result matches the last one.

Bara is a local creative workspace for making and editing the underlying work: artwork, scenes, storyboards, and motion. It connects my interest in building software with the things I want to create with it.

## One engine for a person and an agent

The interface and command-line tools work through the same editing core. A change should mean the same thing whether it begins with a mouse, a keyboard, or an agent command.

That makes originals, document versions, and recovery important. If an agent changes saved work while I have an unfinished edit, I need to understand both versions and choose what to keep.

## Small animation, real output

The simple character above is exported fixture artwork from the native animation work. The video is an actual MP4 export: 48 frames at 24 frames per second. The saved sequence and the agent-edited frame are separate outputs. The viewer lets you compare them without running the entire native editor in this page.

## How it works

A Rust core handles the shared document and editing behavior. The workspace includes command-line, desktop, media, and native host crates. The newer desktop shell uses React and Tauri over that existing engine.

The project also explores reversible editing, local rendering and export, portable creative documents, and synchronization that preserves conflicting work instead of silently choosing a winner.

## Still figuring out

Bara is in development. Different native features and platform builds have different verification boundaries. I am continuing to work on the everyday editing experience, recovery, and how people and agents share a workspace comfortably.
