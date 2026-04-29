# pa05-yard-frontend
# Yard API Management System (PA05)

## Project Description
This is a full-stack React application designed to manage Yard infrastructure records. It serves as the frontend for the PA04 Spring Boot API, allowing users to create, view, update, and delete yard data through a responsive, modern interface.

## Technologies Used
### Frontend
- **ReactJS:** Library for building the user interface and reusable components.
- **Bootstrap 5:** Framework used for responsive grid layout, tables, and buttons.
- **React Router:** Handles single-page navigation without browser refreshes.
- **React Context:** Manages global application state (App Title).
- **Custom CSS:** Located in `src/styles/custom.css` for FAMU-inspired branding and layout improvements.

### Backend
- **Java / Spring Boot:** REST API framework.
- **Spring Data JPA:** For database interaction.
- **H2/MySQL Database:** Persistent storage for Yard records.

## Instructions
### Running the Backend (PA04)
1. Navigate to your PA04 Spring Boot project folder.
2. Run the application using `./mvnw spring-boot:run` or through your IDE.
3. Ensure the API is accessible at `http://localhost:8080/api/yards`.

### Running the Frontend (PA05)
1. Open this project in GitHub Codespaces or your local terminal.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.
4. Open the provided local URL in your browser.

## Application Structure
- **Home:** Welcome dashboard with navigation shortcuts.
- **Yard List:** View all records in a styled Bootstrap table with action buttons.
- **Yard Details:** Detailed view of a specific yard by ID.
- **Add Yard:** Form for creating new records using controlled components.
- **About:** Overview of the system and API integration details.

## API Endpoints Used
- `GET /api/yards` - Retrieve all yards.
- `GET /api/yards/{id}` - Retrieve a single yard.
- `POST /api/yards` - Create a new yard record.
- `PUT /api/yards/{id}` - Update an existing record.
- `DELETE /api/yards/{id}` - Remove a yard record.

## Design Choices (Custom CSS)
The application uses a custom stylesheet to move beyond default Bootstrap styling. Key choices include:
- **FAMU Branding:** Integration of green and orange accents to align with university identity.
- **Hero Section:** A custom-styled banner on the homepage for better visual hierarchy.
- **Hover Effects:** Enhanced focus and hover states for table rows and action buttons.

## Project Links
- **Demo Video:** [Link to your video here]
- **AI Usage Log:** [Link to your AI log here]
