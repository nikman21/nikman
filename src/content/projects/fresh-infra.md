---
title: Fresh Infra
eyebrow: Shared foundations
description: A private toolkit for the parts my apps keep needing, from documents and file storage to bookings, payments, and recovery.
audience: My applications and the people who depend on them
role: Engineering and platform design
kind: project
started: 2026
parent: fresh-industries
topics: [Infrastructure, Systems, Reuse]
status: active
stage: In development
order: 2
featured: true
public: true
stack: [TypeScript, React, PostgreSQL, Node.js, Linux]
question: What should be shared, and what should each app own?
---

## Reusing work across apps

My apps keep needing some of the same things: private file storage, document signing, bookings, payments, and jobs that can recover after a process stops.

I’m turning that work into Fresh Infra. It has twelve private packages and a separate sample application that uses them together.

## What each app owns

A document-signing engine can be shared. A rental company's rules, a product's branding, its authorization decisions, and its database belong to the application using it.

Each app owns its configuration, accounts, data, and migrations. The packages don’t import code from a product’s checkout. Reusing a signing engine shouldn’t mean inheriting InflateMate’s rental rules.

## Packages and application boundaries

The toolkit includes authentication, organizations, UI, files, documents, a document builder, bookings, payments, billing, contacts, email, and a website foundation. Browser-safe contracts and server-only services have separate entry points.

Applications select their own storage, payment accounts, and policies. I test the packages in separate apps to catch assumptions that only work inside the development workspace. I’m also working on recovery when a process or connection stops during a job or request.

## Where it is today

I test the toolkit on my Linux server. It is still in development and has not replaced InflateMate's production services.
