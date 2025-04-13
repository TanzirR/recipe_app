# Chef Claude Recipe App

Chef Claude is a React-based web application that helps users generate recipes based on the ingredients they have on hand. It uses the Hugging Face `@huggingface/inference` library to interact with the Mistral AI model for recipe generation.

## Features

- Add ingredients to your list.
- Generate recipes based on the ingredients you provide.
- Clean and responsive UI built with React and Vite.

## Project Structure

```
├── public/          # Static assets
├── src/             # Source code
│   ├── assets/      # Images and icons
│   ├── components/  # Reusable React components
│   ├── App.jsx      # Main application component
│   ├── Main.jsx     # Core logic for managing ingredients and recipes
│   ├── Header.jsx   # Header component
│   ├── App.css      # Styling for the app
├── .env             # Environment variables
├── ai.js            # AI integration with Hugging Face
├── index.html       # HTML entry point
├── vite.config.js   # Vite configuration
├── package.json     # Project dependencies and scripts
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/TanzirR/recipe_app
   cd recipe_app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

3. Add ingredients to the list and click "Get a recipe" to generate a recipe.

## Environment Variables

The app requires the following environment variable to function properly:

- `HF_ACCESS_TOKEN`: Your Hugging Face API token for accessing the Mistral model.

To set this up, create a `.env` file in the root directory and include your token like so:

```env
HF_ACCESS_TOKEN=your_hugging_face_api_token
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.

## Technologies Used

- **React**: Frontend library for building the UI.
- **Vite**: Fast development build tool.
- **Hugging Face Inference API**: For generating recipes using the Mistral AI model.
- **ESLint**: For maintaining code quality.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hugging Face for providing the Mistral AI model.
- Vite for the development environment.
- Google Fonts for the Inter font used in the app.
