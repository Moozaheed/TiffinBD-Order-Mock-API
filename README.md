# TiffinBD Order Mock API

A mock API server for TiffinBD built with Node.js and Express. It provides mock data for branches and includes a simple proxy utility.

## Features

- **Mock Data**: Serves branch data from local JSON files.
- **Proxy Endpoint**: A `/proxy` endpoint to bypass CORS or forward requests to other services.
- **Static Hosting**: Serves files from the `public/` directory.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone git@github-personal:Moozaheed/TiffinBD-Order-Mock-API.git
   cd TiffinBD-Order-Mock-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Start the server
```bash
npm start
```
The server will run at `http://localhost:3005`.

### API Endpoints

- **GET `/`**: Simple health check.
- **GET `/api/branches`**: Returns a list of available branches.
- **POST `/proxy`**: Proxies a request to a target URL.
  - **Body**: `{ "url": "...", "headers": {}, "body": {} }`

## Project Structure

- `index.js`: Main entry point and server configuration.
- `routes/`: Express route definitions.
- `data/`: JSON/JS data files for mock responses.
- `public/`: Static assets.

## License

ISC
