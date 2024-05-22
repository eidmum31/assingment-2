# TypeScript Node Mongo Express Mongoose Backend

This is a simple backend application built with TypeScript, Node.js, Express, MongoDB, and Mongoose.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (>=14.x) and npm (>=6.x).
- You have a running instance of MongoDB. You can use a local MongoDB server or a cloud-based MongoDB instance like MongoDB Atlas.

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/eidmum31/assingment-2.git
   cd assingment-2
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory of the project and add the following:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/your-db-name
   ```

   Replace `mongodb://localhost:27017/your-db-name` with your actual MongoDB connection string.

## Running the Application

1. **Build the project**

   ```sh
   npm run build
   ```

2. **Start the application**

   ```sh
   npm run strat:dev
   ```

   The server will start on the port specified in the `.env` file (default is 3000).

## Scripts

- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm run start:prod`: Runs the compiled JavaScript code.
- `npm run start:dev`: Runs the application in development mode using `ts-node-dev`.
- `npm run lint`: Identify the linting errors.
- `npm run lint:fix`: Fixing the linting errors.
