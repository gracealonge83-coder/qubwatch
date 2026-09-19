# QubWatch

**AI-Powered Business Monitoring and Investigation Platform**

QubWatch is a business monitoring and investigation platform designed to help business owners detect unusual transactions, identify potential losses, monitor operational activities and investigate suspicious patterns.

The platform gives business owners greater visibility and control over what happens in their businesses — especially when they are away, traveling, sick, or unable to personally supervise daily operations.

> **Core Principle:** QubWatch identifies activities that *may require attention*. It does not automatically accuse staff of theft or wrongdoing. An alert means "review this" — final decisions remain with the authorized business user.

## The Problem

Many owners rely heavily on employees to manage sales, inventory, cash, products and daily transactions. When the owner is absent, losses can occur through:

- Unrecorded sales
- Unauthorized discounts
- Suspicious refunds or reversals
- Inventory discrepancies
- Unusual transaction patterns
- Manipulation of business records
- Unauthorized staff activities

Traditional records show *what happened* without highlighting *what deserves attention*. QubWatch continuously analyzes business activities and brings unusual patterns to the owner's attention.

## The Goal

QubWatch helps business owners to:

1. Monitor business activities
2. Detect unusual or suspicious patterns
3. Receive alerts about activities requiring attention
4. Investigate suspicious transactions and events
5. Understand possible causes of losses
6. Use AI to analyze available business information
7. Make better-informed business decisions

## Core Product Areas

| Area | Description |
|------|-------------|
| **Login** | Secure authentication for authorized users |
| **Business Setup** | Create and configure business profile, products and users |
| **Dashboard** | Overview of transactions, revenue, products, inventory, alerts and investigations |
| **Products** | Create and manage products/services (name, category, price, quantity, stock, status) |
| **Transactions** | Record and review transactions (date, product, quantity, amount, staff, payment method, status) |
| **Alerts** | Flag unusual activity — large amounts, repeated refunds, excessive discounts, abnormal frequency, inventory changes |
| **Investigation** | Structured workspace to examine alerts, related transactions, notes, findings and resolution |
| **AI Assistant** | Natural-language interface to ask questions like "Why was this flagged?" or "Show unusual transactions this week" using authorized business data |

**User Flow:** `Login → Business Setup → Dashboard → Products → Transactions → Alerts → Investigation → AI Assistant`

**Alert Severity:** Low / Medium / High / Critical  
**Investigation Status:** Open → Under Investigation → Resolved → Closed  
**AI Principle:** *AI assists the investigation; humans make the final decision.*

## Target Users

- Small and medium business owners, entrepreneurs
- Business / operations managers
- Finance and accounting personnel
- Authorized investigators / administrators

Initial version focuses on business owners and authorized managers with role-based access control (least privilege).

## Tech Stack

This initial version is scaffolded with Vite + React:

- **React** 19.2.8
- **React DOM** 19.2.8
- **Vite** 8.3.0 with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) (Oxc)
- **ESLint** 10.10.0 with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

## Getting Started

Prerequisites: Node.js (LTS recommended)

```bash
# install dependencies
npm install

# start dev server (HMR)
npm run dev

# build for production
npm run build

# preview production build
npm run preview

# lint
npm run lint
```

## Project Structure

```
qubwatch/
├── docs/
│   ├── PROJECT-OVERVIEW.md   # Business vision and product overview
│   └── docs/PRD.md           # Full Product Requirements Document
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx               # Dashboard shell (topbar, summary, alerts, quick actions)
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

Current `src/App.jsx` implements the initial dashboard shell with business overview, summary cards (Transactions, Alerts, Products, Investigations), recent alerts empty state, and quick actions.

## Documentation

- `docs/PROJECT-OVERVIEW.md` — High-level vision, problem, goals, MVP and future direction
- `docs/docs/PRD.md` — Detailed Product Requirements (users, functional/data requirements, alert & detection logic, investigation, AI assistant, security)
- `docs/docs/PRD.md2` — Working draft

## MVP Scope (v1)

- Authentication & Login
- Business Setup
- Product Management
- Transaction Recording
- Basic Dashboard
- Rule-based Alerts
- Alert Details & Basic Investigation Workflow
- Initial AI Assistant

Future: advanced anomaly detection, inventory monitoring, automated reports, POS/financial integrations, notifications, mobile app, audit trails, advanced AI.

## Vision

QubWatch aims to become an intelligent business monitoring system that helps business owners see what is happening in their businesses, identify what deserves attention, and investigate unusual activity before small problems become major losses.

## License

Private — All rights reserved.
