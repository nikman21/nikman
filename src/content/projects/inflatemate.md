---
title: InflateMate
eyebrow: Party-rental software
description: Software for party-rental businesses, bringing bookings, inventory, payments, and waivers into one place.
audience: Inflatable and event-rental business owners
role: Founder, design, and engineering
kind: product
started: 2024
parent: fresh-industries
topics:
  - Software
  - Systems
  - Business
status: active
order: 1
featured: true
public: true
externalUrl: https://inflatemate.co
stage: Active product
stack: [TypeScript, Next.js, PostgreSQL, Prisma, Stripe]
question: How do you change a price without changing the agreement someone already made?
image: /images/projects/inflatemate-rental-week.webp
imageHeight: 844
imageAlt: A sample InflateMate rental week with confirmed bookings, a deposit, and a signed waiver
imageCaption: A public product preview using sample data, showing a rental week and the details that belong to a booking.
---

## Why I started

After college, I couldn’t get a job in technology. I started InflateMate for party-rental businesses that needed better tools for their everyday work. It now has paying customers.

## Changing rental prices

Take additional-day rental pricing. Charging $100 for the first day and half that for the second sounds simple. But that price has to agree across the quote, invoice, booking form, checkout, and saved booking.

An old booking still needs to keep the terms it was made under. Changing a setting shouldn’t rewrite an existing agreement.

## Customer feedback

I know what each button does because I made it. A rental operator is trying to get through their work. If they get confused, I need to look at how I’ve arranged the screen.

I wrote about one of those moments in [This App Is Messy](/essays/this-app-is-messy/). It changed how I thought about separating actions, reviewing an invoice before sending it, and giving people clearer control.

## Booking and payment services

The application is a TypeScript monorepo with separate customer sites, an operator dashboard, and shared booking and payment services. PostgreSQL stores the business records. Pricing calculations and saved terms are shared across the places that display and collect money.

Recent work has included additional-day pricing, checkout retries, and support setup.
