# Users API Backend

This project is a Node.js backend server for managing users using Firebase Realtime Database. It leverages [Express](https://expressjs.com/) for server routing, [CORS](https://www.npmjs.com/package/cors) to handle cross-origin requests, and [Axios](https://axios-http.com/) for making HTTP requests to Firebase.

## Features

- **Create User:** Add a new user to the Firebase database.
- **Get User:** Retrieve user details by `userId`.
- **Update User:** Update an existing user's information.
- **Delete User:** Remove a user from the database.

> **Note:** Update the `FIREBASE_URL` in `server.js` with your Firebase Realtime Database URL.

## Installation

### 1. Clone the Repository

Clone the repository and navigate to the project directory:

```bash
1) git clone https://github.com/07asn/Front-Back-NodeJS.git
2) cd your-repo
3) npm install express
4) npm install cors
5) npm install axios
