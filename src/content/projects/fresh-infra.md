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

## The work beneath the application

Building one application exposes a lot of problems that the next application will have too: storing private files, signing documents, tracking a booking, handling a payment, or recovering a job after a process stops.

Fresh Infra is where I am turning that work into reusable foundations. It currently has twelve private packages, with a separate sample application that puts them together.

## A toolkit should leave room for different products

A document-signing engine can be shared. A rental company's rules, a product's branding, its authorization decisions, and its database belong to the application using it.

Each app owns its configuration, accounts, data, and migrations. The packages do not reach back into a product's checkout. I want to reuse the hard parts without making every new product behave like InflateMate.

## Packages and application boundaries

The toolkit includes authentication, organizations, UI, files, documents, a document builder, bookings, payments, billing, contacts, email, and a website foundation. Browser-safe contracts and server-only services have separate entry points.

Applications select their own storage, payment accounts, and policies. I test the packages in separate consumer apps to catch assumptions that only work inside the development workspace. I am also working on how jobs and requests recover after a process or connection stops.

## Where it is today

I test the toolkit on my Linux server. It is still in development and has not replaced InflateMate's production services.
