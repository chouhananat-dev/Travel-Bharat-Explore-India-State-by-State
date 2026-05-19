# Travel Bharat

## Project Overview

Travel Bharat is a full-stack travel information portal built with a Node.js/Express backend and a React + Vite frontend. The platform provides state-wise travel destinations, top places, and an admin dashboard for authenticated content management.

## Key Features

- Public browsing of travel destinations and state-level details
- Top places listing with destination details
- State search and category filtering support
- Admin login and JWT-protected dashboard routes
- Admin functionality for creating, updating, and deleting places
- MongoDB-powered data persistence

## Architecture

- `Backend/` — Express server with MongoDB models and API routes
- `Frontend/travel-bharat/` — React application built with Vite
- `Backend/Data/` — JSON seed data for states, places, and top places

## Backend Structure

### Main server
- `Backend/server.js` — Express app configuration and route mounting

### API routes
- `Backend/routes/login.js` — Admin authentication using JWT tokens
- `Backend/routes/placeRoutes.js` — Place CRUD, filtering, and admin-only protected endpoints
- `Backend/routes/stateRoutes.js` — Fetch all states list
- `Backend/routes/topPlacesRoutes.js` — Fetch top places list
- `Backend/routes/delete.js` — Delete place route (mounted through `/api`)

### Data models
- `Backend/models/Admin.js` — admin credentials schema
- `Backend/models/Place.js` — place schema with nested nearby attractions and metadata
- `Backend/models/State.js` — state schema with type, image, and tagline
- `Backend/models/Top_Places.js` — top places schema

### Middleware
- `Backend/Middlewares/tokenVerifier.js` — JWT protection for admin routes

### Seed data
- `Backend/seed.js` — loads `Backend/Data/states.json`, `places.json`, and `topplaces.json` into MongoDB

## Frontend Structure

### Main application
- `Frontend/travel-bharat/src/App.jsx` — React Router routes and AOS initialization

### Pages
- `Frontend/travel-bharat/src/pages/Home.jsx` — landing page for visitors
- `Frontend/travel-bharat/src/pages/StateSearch.jsx` — state search and results display
- `Frontend/travel-bharat/src/pages/Login.jsx` — admin login form
- `Frontend/travel-bharat/src/pages/AdminDashboard.jsx` — protected admin home
- `Frontend/travel-bharat/src/pages/ViewPlacesByAdmin.jsx` — admin place management view
- `Frontend/travel-bharat/src/pages/AdminUpdate.jsx` — admin place update form

### Components
- `Frontend/travel-bharat/src/components/Navbar.jsx` — navigation bar
- `Frontend/travel-bharat/src/components/Card.jsx` — UI card for places or states
- `Frontend/travel-bharat/src/components/Description.jsx` — place description page
- `Frontend/travel-bharat/src/components/ProtectedRoutes.jsx` — guard for admin-only routes
- `Frontend/travel-bharat/src/components/Topplaces.jsx` — top places showcase
- `Frontend/travel-bharat/src/components/Footer.jsx` — common footer

## Installation

### Backend

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd "d:\Travel Bharat\Backend"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with these variables:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```bash
   node server.js
   ```

> Note: There is no `start` script defined in `Backend/package.json`, so use `node server.js` directly.

### Database seeding

To populate MongoDB with the provided JSON data:

```bash
cd "d:\Travel Bharat\Backend"
node seed.js
```

### Frontend

1. Open a terminal and navigate to the frontend app:
   ```bash
   cd "d:\Travel Bharat\Frontend\travel-bharat"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```

## Environment Variables

Backend requires these environment variables in `Backend/.env`:

- `MONGO_URI` — MongoDB connection URI
- `JWT_SECRET` — secret key used to sign admin JWT tokens

## Running the App

- Backend API server: `http://localhost:5000`
- Frontend dev site: Vite will provide a local host URL, typically `http://localhost:5173`

## API Endpoints

### Public endpoints
- `GET /api/statesList` — fetch all states
- `GET /api/topPlaces` — fetch top places
- `GET /api/getStatesInfo` — fetch places with optional query `statename` and `category`
- `GET /api/states/:statename` — fetch places by state
- `GET /api/topPlacesInfo?real_name=<>&state=<>` — fetch top place details

### Admin-protected endpoints
- `POST /api/login` — admin login
- `GET /api/getStatesInfoByAdmin` — fetch place data with admin access
- `POST /api/savedata` — create a new place
- `GET /api/adminUpdate/:objectId` — fetch place by ID for editing
- `PUT /api/makeUpdate/:objectId` — update place
- `POST /api/deletePlace` — delete place by ID

> Admin-protected routes require `Authorization: Bearer <token>` header.

## Admin User Setup

The project does not include an automated admin creation endpoint. To use the admin dashboard:

1. Create an admin document in the `Admin` collection with fields:
   - `username`
   - `password` (bcrypt hashed)
2. Or extend the backend by adding a registration/seed route for admin credentials.

## Notes

- The backend uses Mongoose models with explicit schemas for `places`, `states`, and `top_places`.
- The frontend uses React Router v7 and AOS for page animation.
- Admin routes are protected by JWT tokens checked in `Backend/Middlewares/tokenVerifier.js`.

## Future Improvements

- Add a backend `npm start` script for convenience
- Add an admin registration or seed script for default admin creation
- Add automated tests for backend routes and frontend components
- Add detailed frontend usage instructions and screenshots

---

Made for the Travel Bharat project on Windows. If you want, I can also add a short `CONTRIBUTING.md` or API reference section next.