---
title: Shared Foundations, Different Products
summary: Reusing an engine should not force every application to inherit the same business rules.
topic: Building and craftsmanship
maturity: Growing
created: 2026-11-02
updated: 2026-11-02
status: published
order: 3
relatedEssays: []
relatedPrinciples: [build-what-compounds]
relatedGarden: [trust-reduces-friction, interface-craft]
sources: []
---

I keep running into similar problems across the applications I build: private files, documents, bookings, payments, and a job that needs to recover after an interrupted reply.

[Fresh Infra](/work/fresh-infra/) is my attempt to reuse those foundations without tying every new idea to the application they came from.

A signing engine can understand a document, recipient, and request. The application should decide who is authorized, which business rule requires the agreement, and where its data lives.

## A boundary worth testing

A package working inside its own workspace is only part of the story. A separate consumer helps reveal accidental dependencies: a product-specific import, a server service in a browser bundle, or configuration that was never made explicit.

## An open question

At what point does a useful shared foundation become an abstraction that makes the next product harder to build?

I want the answer to come from actual consumers and their differences, rather than extracting everything that happens to look similar.
