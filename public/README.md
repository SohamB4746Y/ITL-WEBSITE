# Public Folder Documentation

## Purpose
The `public` folder stores static files served directly at the web root without bundling.

## Current Files
- `vite.svg`: Public static icon file.

## Usage Guidance
- Place files here when they must be referenced by URL path (for example `/logo.svg`).
- Do not place source-imported assets here; those belong in `src/assets`.
- Keep this folder lean to avoid shipping unused static files.
