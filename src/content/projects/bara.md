---
title: Bara
eyebrow: Creative tools
description: A local creative studio where people and agents work through the same editing engine, with originals and changes kept intact.
audience: People making artwork, stories, and animation with their own tools
role: Engineering and creative direction
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
imageCaption: Native editor with demonstration artwork
demo: animation
---

## The tools behind the artwork

I’ve been getting into animation with AI. Asking for a finished clip leaves me hoping the next result will match the last one. I want to be able to edit it myself.

Bara gives me access to the artwork, scenes, storyboards, and motion so I can work on those pieces directly. I’m making the tools I want to use for my own projects.

## One engine for a person and an agent

The interface and command-line tools work through the same editing core. A change should mean the same thing whether it begins with a mouse, a keyboard, or an agent command.

If an agent changes saved work while I have an unfinished edit, I need to see both versions and choose what to keep. That means keeping the originals and making recovery part of the editor.

## The animation above

The character is test artwork exported from the native app. The MP4 has 48 frames at 24 frames per second. The viewer shows the saved sequence alongside a separate agent-edited frame; it doesn’t run the editor.

## Rust core, desktop shell

A Rust core handles the shared document and editing behavior. The workspace includes command-line, desktop, media, and native host crates. The newer desktop shell uses React and Tauri over that existing engine.

I’m also working on reversible edits, local rendering and export, and documents you can move between workspaces. When synced versions conflict, both need to stay available.

## Current work

Bara is in development. I’m working on the everyday editing experience, recovery, and how people and agents share a document.
