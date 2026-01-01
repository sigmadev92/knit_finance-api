# Knit Finance Assignment Project

Deadline - 4 January 2026

## Table Of Content

0. Useful Links and sample data
1. Overview
2. Features
3. Tech Stack
4. Prerequisites
5. Start Commands
6. Folder Structure
7. Envrironment Variables
8. Cookie
9. Swagger Documentation
10. Troubleshooting

## Useful Links and sample data

```md
[Frontend github Link]
[Server Github Link](https://github.com/sigmadev92/knit_finance-api)
[Deployed Frontend Link]
[Deployed Server Link]

sample email: user1@test.com
sample password: user1@Pass
```

## Overview

This is an assignment Project provided by Knit Finance to test knowledge of REST API and CRUD Operations along with API documentation.

## Features

- JWT Authentication
- Role based access
- User can write, edit, delete a task
- User can send a completed task for Verification
- Admins can only verify a task

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
