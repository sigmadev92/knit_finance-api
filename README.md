# Knit Finance Assignment Project

Deadline - 4 January 2026

## Table Of Content

0. Useful Links and sample data
1. Overview
2. Working
3. Features
4. Tech Stack
5. Prerequisites
6. Start Commands
7. Folder Structure
8. Envrironment Variables
9. Cookie
10. Swagger Documentation
11. Troubleshooting

## Useful Links and sample data

```md
[Frontend github Link](https://github.com/sigmadev92/knit_finance_client)
[Server Github Link](https://github.com/sigmadev92/knit_finance-api)
[Deployed Frontend Link]
[Deployed Server Link]

sample email: user1@test.com
sample password: user1@Pass
```

## Overview

This is an assignment Project provided by Knit Finance to test knowledge of REST API and CRUD Operations along with API documentation.

## Working

The Assignment gave no instructions on how many admins can be created. We assume only 1 admin can be created.

- So a user can create task by providing title and description.
- A task has a default status of Not Started
- When the user starts working on it : In Progress
- Once it is in progress, the status can't be truned "Not Started"
- When the user Completes the task : Completed
- When the user sends it for testing : Testing
- If admin verifies and found any errors : Failed
- IF admin approves it : Approved

- Once the task is in testing or approved by Admin, it can not be edited or deleted.
- Once user completes it, the attempts increases.
- A user can request for working on the task for 5 times.

## Features

- Role based access
- User can write, edit, delete a task
- User can send a completed task for Verification
- Admins can only verify a task
- Secure JWT token handling
- Input sanitization & validation
- Rate Limiting using Redis
- Scalable project structure for new modules

## Tech Stack

Following libraries and packages are used in the project

- express
- dotenv
- mongoose
- cookie-parser
- cors
- bcrypt
- joi
- validator
- jsonwebtoken
- swagger-jsdoc
- swagger-ui-express

```json
 "dependencies": {
    "bcrypt": "^6.0.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "joi": "^18.0.2",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.1.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1",
    "validator": "^13.15.26"
  }

```

## Prerequisites

Use LTS verion of Nodejs

## Start Commands

```bash
npm install
node server.js
```

## Folder Structure

```text
├───node_modules
└───src
|   ├───config
|   ├───docs
|   │   └───swagger
|   │       ├───route_docs
|   │       │   ├───0_user
|   │       │   ├───1_admin
|   │       │   └───2_tasks
|   │       └───schemas
|   ├───features
|   │   ├───task
|   │   ├───testing
|   │   └───user
|   ├───middlewares
|   │   ├───routes
|   │   └───validators
|   │       └───user
|   ├───pages
|   └───utilities
|---package.json
|---package-lock.json
|---README.md
|---app.js
|---server.js
```

## Environment Variable

Following are the environment variables used in the project

```js
NODE_ENV;
PORT;
MONGO_URI;
JWT_SECRET;
CLIENT_URL;
```

## Cookie

When the user logs In, we create a token and send in the cookies of browser client.

```text
knit_finance
```

## Swagger Documentation

```md
[Swagger Documentation](/api-docs)
```

## Troubleshooting

No new errors were encountered during the development.
