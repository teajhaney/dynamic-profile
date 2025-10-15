# Dynamic Profile API Backend 🐈

## Overview
This API provides dynamic user profile information, including a random cat fact, built with TypeScript, Express.js, and Node.js. It features robust error handling, rate limiting, and secure configurations.

## Features
- **TypeScript**: Ensures type safety and improves code maintainability.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Axios**: Promise-based HTTP client for fetching external data from the Cat Facts API.
- **Winston**: A versatile logging library for application logging.
- **Helmet**: Helps secure Express apps by setting various HTTP headers.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Express Rate Limit**: Basic rate-limiting middleware for Express.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Modular Structure**: Organized codebase with clear separation of concerns (controllers, routes, middleware, utilities).

## Getting Started
To get this project up and running locally, follow these steps.

### Installation
✅ **Clone the Repository:**
```bash
git clone https://github.com/teajhaney/dynamic-profile.git
cd dynamic-profile
```

📋 **Install Dependencies:**
```bash
npm install
```

### Dependencies

Below is the list of core dependencies required for this project, along with installation instructions.

#### Production Dependencies
| Package | Description |
|----------|-------------|
| express | Fast, minimalist web framework for Node.js |
| axios | Promise-based HTTP client for making API requests |
| cors | Middleware for enabling CORS |
| helmet | Security middleware for setting HTTP headers |
| express-rate-limit | Rate-limiting middleware for Express apps |
| dotenv | Loads environment variables from `.env` files |
| winston | Logging library for Node.js |

Install all production dependencies with:
```bash
npm install express axios cors helmet express-rate-limit dotenv winston
```

#### Development Dependencies
| Package | Description |
|----------|-------------|
| typescript | TypeScript compiler |
| ts-node | Runs TypeScript files directly |
| nodemon | Automatically restarts the server when files change |
| @types/node | Type definitions for Node.js |
| @types/express | Type definitions for Express |

Install all development dependencies with:
```bash
npm install --save-dev typescript ts-node nodemon @types/node @types/express
```

🚀 **Set Up Environment Variables:**
Create a `.env` file in the root directory and populate it with the required environment variables. See the "Environment Variables" section for details.

✨ **Run the Application:**

**Development Mode (with hot-reloading):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

**Build for Production:**
```bash
npm run build
```

### Environment Variables
All required environment variables should be defined in a `.env` file in the project root.

-   **`MY_EMAIL`**: Your personal email address.
    _Example_: `MY_EMAIL="john.doe@example.com"`
-   **`MY_NAME`**: Your full name.
    _Example_: `MY_NAME="John Doe"`
-   **`MY_STACK`**: Your primary technology stack or role.
    _Example_: `MY_STACK="Fullstack Developer | Node.js, React, TypeScript"`
-   **`CAT_FACT_API_URL`**: The URL for the external Cat Facts API.
    _Example_: `CAT_FACT_API_URL="https://catfact.ninja/fact"`
-   **`CAT_FACT_TIMEOUT`**: Timeout in milliseconds for the Cat Facts API request.
    _Example_: `CAT_FACT_TIMEOUT="5000"`
-   **`NODE_ENV`**: The current environment (e.g., `development`, `production`).
    _Example_: `NODE_ENV="development"`
-   **`PORT`**: The port number on which the server will listen.
    _Example_: `PORT="3000"`

## API Documentation
### Base URL
`http://localhost:[PORT]` (where `[PORT]` is the value from your `.env` file, default is `3000`)

### Endpoints
#### GET /me
Retrieves dynamic profile information including a static user profile, a current timestamp, and a random cat fact from an external API.

**Request**:
No request body is required.

**Response**:
A JSON object containing the user's profile, a timestamp, and a cat fact.
```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Name",
    "stack": "Your Tech Stack"
  },
  "timestamp": "2023-10-27T10:00:00.000Z",
  "fact": "Cats sleep 70% of their lives."
}
```

**Errors**:
-   **429 Too Many Requests**: The rate limit for the endpoint has been exceeded.
    ```json
    {
      "success": false,
      "message": "Too many requests"
    }
    ```
-   **500 Internal Server Error**: A generic server-side error occurred, potentially due to an issue with the external Cat Facts API or an unhandled exception.
    ```json
    {
      "success": false,
      "message": "Internal server error: Failed to fetch a cat fact due to an external API error."
    }
    ```
    or
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## Usage
Once the server is running (e.g., on `http://localhost:3000`), you can access the profile information by navigating to or sending an HTTP GET request to:

`http://localhost:3000/me`

You can use a web browser, Postman, curl, or any other API client to interact with the endpoint. For example, using `curl`:

```bash
curl http://localhost:3000/me
```

This will return a JSON response similar to the example provided in the API Documentation section.

## Technologies Used

| Technology         | Description                                                          |
| :----------------- | :------------------------------------------------------------------- |
| **TypeScript**     | Strongly typed programming language that builds on JavaScript        |
| **Node.js**        | JavaScript runtime built on Chrome's V8 JavaScript engine            |
| **Express.js**     | Fast, unopinionated, minimalist web framework for Node.js            |
| **Axios**          | Promise-based HTTP client for the browser and Node.js                |
| **Winston**        | A multi-transport asynchronous logging library for Node.js           |
| **Helmet**         | Security middleware for Express.js                                   |
| **CORS**           | Middleware for enabling Cross-Origin Resource Sharing                |
| **Dotenv**         | Loads environment variables from a `.env` file                       |
| **express-rate-limit** | Basic rate-limiting middleware for Express applications              |
| **nodemon**        | Utility that monitors for any changes in your source and automatically restarts your server (dev only) |
| **ts-node**        | TypeScript execution and REPL for Node.js (dev only)                 |



## Author Info
- **Name**: Your Name
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/yusuf-tijani-605b04167/)
- **Twitter**: [Your Twitter Handle](https://twitter.com/seobinim)


---

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
