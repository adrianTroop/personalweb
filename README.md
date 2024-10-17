# Personal Portfolio Website

## Project Description

This project is a modern, responsive personal portfolio website built using React. It showcases a professional's background, projects, and contact information in an elegant, user-friendly interface. The website features a sleek design with a dark theme, highlighting various professional ventures across different industries.

## Key Features

- Responsive design that works on desktop and mobile devices
- Dynamic content switching between different project categories
- Gradient background with a semi-transparent, frosted-glass effect for the main content area
- Integration with environment variables for sensitive information (like email)
- Use of modern React practices including hooks (useState)
- Iconography from the 'lucide-react' library

## Tech Stack

- React.js
- Tailwind CSS for styling
- lucide-react for icons

## Project Structure

The main component of this project is `PersonalWebpage.js`, which contains all the logic and layout for the portfolio. It's structured with:

- A left sidebar for personal information
- A right main area for displaying projects
- Tab-based navigation to switch between different project categories

## How It Was Built

1. The project was initialized using Create React App, providing a solid foundation and development environment.
2. Tailwind CSS was integrated for rapid, utility-first styling.
3. The `PersonalWebpage` component was created as the main content of the site.
4. State management is handled using React's `useState` hook for the active project tab.
5. Project data is organized in a nested object structure for easy management and display.
6. Environment variables are used to store sensitive information like email addresses.
7. The lucide-react library is used for adding iconography to enhance the user interface.

## Running the Project

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add any necessary environment variables (e.g., `REACT_APP_EMAIL=your-email@example.com`)
4. Run `npm start` to start the development server
5. Open `http://localhost:3000` in your browser

## Customization

To customize this portfolio:

1. Update the project data in the `projects` object within `PersonalWebpage.js`
2. Modify the personal information section as needed
3. Adjust the color scheme and styling by editing the Tailwind classes

## Deployment

This project can be easily deployed to platforms like GitHub Pages, Netlify, or Vercel for public access.

---

This project serves as a template for creating a professional, modern portfolio website. It's designed to be easily customizable and extendable to suit individual needs.
