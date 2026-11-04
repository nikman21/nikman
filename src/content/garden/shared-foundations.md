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

## Testing from a separate app

A package can work in its own workspace and still fail in another app. Testing a separate consumer helps me find product-specific imports, server code in a browser bundle, and configuration I forgot to make explicit.

## An open question

At what point does a useful shared foundation become an abstraction that makes the next product harder to build?

I need to see how different apps use the packages before deciding what else to share.
