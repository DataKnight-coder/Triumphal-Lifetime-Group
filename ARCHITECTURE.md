# Architecture Specification

## Overview
The Triumphal Lifetime Group Master Website is a high-performance, international corporate ecosystem platform operating across Nigeria, the UAE, and Canada. 

## Technology Stack
- **Framework:** Next.js (App Router)
- **Language:** Strict TypeScript
- **UI/Styling:** React, Tailwind CSS, accessible component primitives
- **Hosting/Deployment:** Cloudflare Workers via OpenNext adapter, Workers Static Assets
- **Storage:** Cloudflare R2 (for secure document uploads and media)
- **Security:** Cloudflare Turnstile (form protection)
- **Version Control:** Git & GitHub

## Data & Content Model
The platform uses a headless CMS architecture pattern, initially implemented via a local content adapter to allow for easy replacement with a true headless CMS later.

**Core Entities:**
- `SiteSettings`
- `Country` (Configuration for NG, AE, CA)
- `Company` & `Service`
- `TeamMember` & `Partner`
- `Testimonial` & `CaseStudy`
- `Property`, `Product`, `Course`
- `Insight`, `FAQ`, `LeadMagnet`
- `FoundationProgramme`, `ImpactReport`
- `LegalPage`

## Integration Adapters
To prevent hard-coding third-party logic into UI components, the system uses abstract interfaces:
- **CRM Adapter:** Provider-independent lead routing service capturing comprehensive lead data (source, campaign, service, countries, consent, etc.).
- **Booking Adapter:** Provider-independent scheduling layer managing availability, timezone, and consultation types.
- **Commerce Adapter:** For digital products and learning, independent interfaces for payments, authentication, and transactional email.

## Security & Compliance
- **Forms:** Cloudflare Turnstile validation on the server, rate limiting, sanitization, and spam controls. Explicit separation of service consent and marketing consent.
- **Uploads:** Cloudflare R2 with short-lived authorization, file type/size restrictions, randomized keys, and configurable retention.
