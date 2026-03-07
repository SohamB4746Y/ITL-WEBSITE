# Source Folder Documentation

## Purpose
The `src` folder contains all application source code for the ITL website frontend.

## File Overview
- `main.jsx`: Application bootstrap file that mounts React into the DOM.
- `App.jsx`: Root layout that composes all top-level website sections.
- `index.css`: Global styling, Tailwind layers, custom utilities, and shared animations.

## Subfolders
- `components/`: Reusable and section-level UI components.
- `assets/`: Static assets imported by source files (images, icons, vectors).

## Architecture Notes
- The app follows a section-composition pattern from `App.jsx`.
- Components are primarily presentational and organized by page section.
- Styling is utility-first via Tailwind with a small set of custom CSS utilities.
