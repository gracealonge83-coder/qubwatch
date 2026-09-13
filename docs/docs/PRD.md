# QubWatch Product Requirements Document (PRD)

## 1. Product Overview

### 1.1 Product Name

**QubWatch**

### 1.2 Product Description

QubWatch is an AI-powered business monitoring and investigation platform designed to help business owners monitor business activities, identify unusual patterns, detect potential operational losses and investigate activities that require attention.

QubWatch combines business data, monitoring rules, alerts, investigation tools and an AI assistant to provide business owners with greater visibility into what is happening within their businesses.

### 1.3 Product Vision

To give business owners an intelligent digital "watch" over their business operations, helping them see unusual activity, understand what may have happened and investigate issues before they become major losses.

### 1.4 Problem Statement

Business owners may not always be physically present to supervise daily operations. They often depend on employees and business records to know what is happening.

This creates a visibility problem.

A business may experience unusual discounts, refunds, transaction patterns, inventory discrepancies, unauthorized activities, or other operational irregularities without the owner immediately noticing.

QubWatch is designed to reduce this visibility gap by monitoring available business information and bringing potentially unusual activities to the attention of authorized users.

### 1.5 Product Goal

QubWatch should enable an authorized business user to:

1. Set up a business profile.
2. Record and manage products.
3. Record and review transactions.
4. Monitor important business activities.
5. Detect potentially unusual activity.
6. Receive alerts.
7. Investigate alerts and related transactions.
8. Ask questions about business information using an AI assistant.
9. Make better-informed decisions based on available information.

### 1.6 Important Product Principle

QubWatch identifies activities that may require attention. It does not automatically determine that an employee has committed theft, fraud or another wrongdoing.

An alert is an indication that an activity may be unusual and should be reviewed.

Final conclusions and decisions remain with the authorized business user.


## 2. Users and Roles

### 2.1 Primary User

The primary user is the **Business Owner**.

The business owner should be able to:

* Create and configure a business.
* Add products.
* Review transactions.
* View the dashboard.
* Receive and review alerts.
* Start and manage investigations.
* Use the AI assistant.
* Manage authorized users.

### 2.2 Authorized Manager

A business owner may give selected managers access to QubWatch.

An authorized manager may be permitted to:

* View business information.
* Monitor transactions.
* Review alerts.
* Participate in investigations.
* Add investigation notes.

The exact permissions will be controlled by the application's role and permission system.

### 2.3 Staff User

Staff users may eventually be given limited access to perform specific operational activities, such as recording transactions.

Staff users should not automatically have access to sensitive investigation information.

### 2.4 Administrator

An administrator role may be introduced for system-level management.

Administrators may manage:

* User accounts.
* System configuration.
* Platform settings.
* Technical support functions.

Administrative privileges should be separated from business-owner privileges.

### 2.5 Role-Based Access

QubWatch should use role-based access control so that users can only access information and functions appropriate to their assigned role.

Permissions should follow the principle of **least privilege**: users should receive only the access required to perform their responsibilities.
