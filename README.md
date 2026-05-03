# React + Vite

Features
Lifting State Logic: The application's "source of truth" resides in App.jsx, ensuring that the Header, Form, and List components stay perfectly synchronized.

Live Search Filtering: Users can instantly narrow down projects by title or description using the real-time search bar.

Dynamic Project Entry: A functional sidebar form allows for the immediate addition of new projects to the showcase without requiring a page reload.

Responsive Grid System: Developed with a mobile-first approach using CSS Grid, the layout seamlessly transitions from a single-column stack on mobile to a multi-column gallery on desktop.

Polished UI: Includes interactive hover states and clean card-based components for a modern user experience.

  Setup & Installation
Prerequisites
Node.js (v16.0 or higher recommended)

npm (Node Package Manager)

Step-by-Step Setup
Initialize the project:
If you haven't already, create your React environment using Vite:

Bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
The application will be accessible at http://localhost:5173.

📂 Usage Instructions
Registering a Project: Fill out the Title, Description, and Link fields in the sidebar form. Click "Add Project" to push the data to the main showcase list.

Using Search: Enter any keyword into the search bar at the top. The project list will update instantly to show only matching items.

Viewing Projects: Each card displays the project details; clicking the link provided will direct users to the specific project URL.

⚠️ Known Limitations
Temporary Storage: This application does not currently use a backend database. All added projects will be cleared upon refreshing the browser.

Media Support: The current version is text-oriented and does not yet support image uploads or thumbnails for project cards.

Basic Validation: While the form prevents empty submissions, it does not currently verify the validity of external URLs or character counts.

Search Scope: The filtering logic is strictly string-based; it does not currently support advanced tag-based or category-based filtering.


 Tech Stack
Frontend: React 18 (Functional Components & useState)

Build Tool: Vite

Styling: Vanilla CSS (Flexbox & CSS Grid)