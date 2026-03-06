# Contributing to ITL Website

Thank you for your interest in contributing to the ITL Website! We appreciate your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

Be respectful and professional in all interactions. We are committed to providing a welcoming and inclusive environment for all contributors.

## Getting Started

### Prerequisites

- Node.js 16+ or higher
- npm 8+ or yarn 1.22+
- Git installed on your system
- GitHub account

### Fork and Clone

1. Fork the repository to your GitHub account
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ITL-WEBSITE.git
   cd ITL-Website
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/SohamB4746Y/ITL-WEBSITE.git
   ```

## Development Workflow

### Creating a Feature Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `performance/description` - Performance improvements
- `test/description` - Test additions/updates

### Making Changes

1. Make your changes in the feature branch
2. Test your changes locally:
   ```bash
   npm run dev
   npm run lint
   npm run build
   ```

3. Keep commits atomic and logical

## Commit Guidelines

### Conventional Commits Format

Use clear, descriptive commit messages following the Conventional Commits specification:

```
type(scope): subject

body

footer
```

### Types

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes that don't affect code logic (formatting, semicolons, etc.)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Code change that improves performance
- `test` - Adding missing tests or correcting existing tests
- `ci` - Changes to CI configuration files and scripts
- `chore` - Changes to the build process, dependencies, or tools

### Examples

```bash
# Good commit message
git commit -m "feat(navbar): Add mobile menu toggle functionality"

# Good commit with body
git commit -m "fix(hero-section): Fix image loading on slow connections

- Added lazy loading to hero image
- Implemented alternative text fallback
- Improved performance metrics by 15%"

# Documentation commit
git commit -m "docs: Update deployment instructions for Vercel"

# Style commit
git commit -m "style(components): Format code according to ESLint rules"
```

## Pull Request Process

### Before Submitting a PR

1. Ensure your branch is up to date:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Run tests and linting:
   ```bash
   npm run lint
   npm run build
   ```

3. Test functionality in development:
   ```bash
   npm run dev
   ```

### Submitting a PR

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Go to GitHub and create a Pull Request
3. Fill in the PR template with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots for UI changes
   - Testing instructions

### PR Review Process

- At least one review required before merging
- All checks must pass (linting, building)
- Address feedback promptly
- Keep conversation professional and constructive

## Coding Standards

### JavaScript/React Guidelines

```javascript
// ✅ Good: Functional components with hooks
const MyComponent = ({ title, onClick }) => {
  const [state, setState] = useState(false);

  return (
    <div className="my-component">
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// ❌ Avoid: Class components unless necessary
class MyComponent extends React.Component {
  // ...
}
```

### Naming Conventions

```javascript
// Components: PascalCase
const UserProfile = () => {};

// Functions and variables: camelCase
const getUserData = () => {};
const isActive = true;

// Constants: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_URL = 'https://api.example.com';

// CSS classes: kebab-case
<div className="user-profile-card"></div>
```

### Component Structure

```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 2. Component definition
const MyComponent = ({ title, onClose, children }) => {
  // 3. State
  const [data, setData] = useState(null);

  // 4. Effects
  useEffect(() => {
    // Component logic
  }, []);

  // 5. Handlers
  const handleClick = () => {
    // Handle click
  };

  // 6. Render
  return (
    <div className="my-component">
      {/* JSX */}
    </div>
  );
};

// 7. PropTypes
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

// 8. Default exports
export default MyComponent;
```

### CSS/Tailwind Guidelines

```jsx
// ✅ Good: Using Tailwind utility classes
<div className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
  <h2 className="text-lg font-semibold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
    Action
  </button>
</div>

// ❌ Avoid: Inline styles over Tailwind
<div style={{ display: 'flex', padding: '16px' }}>
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests

- Write tests for new features
- Aim for meaningful test coverage
- Test user interactions, not implementation details
- Use descriptive test names

```javascript
describe('MyComponent', () => {
  it('should render with the provided title', () => {
    // Test code
  });

  it('should call onClick handler when button is clicked', () => {
    // Test code
  });
});
```

## Documentation

### README Updates

- Update README.md when adding new features
- Include setup instructions for new tools or dependencies
- Add examples for complex features

### Code Comments

```javascript
// Use comments for complex logic
// ✅ Good: Explains the "why"
const calculateDiscount = (price, userType) => {
  // Premium users get 20% discount, regular users get 10%
  const discount = userType === 'premium' ? 0.2 : 0.1;
  return price * (1 - discount);
};

// ❌ Avoid: Comments that just restate the code
const calculateDiscount = (price, userType) => {
  // Check if user is premium
  if (userType === 'premium') {
    // Apply 20% discount
    return price * 0.8;
  }
  // Apply 10% discount
  return price * 0.9;
};
```

### Commit Documentation

Include information about:
- What changed and why
- Any breaking changes
- Dependencies added/removed
- Migration instructions (if applicable)

## Performance Considerations

### Code Splitting

```javascript
// ✅ Good: Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Use with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>
```

### Memoization

```javascript
// ✅ Good: Memoize expensive components
const ExpensiveComponent = memo(({ data }) => {
  return /* render */;
});

// ✅ Good: Memoize callbacks
const MyComponent = () => {
  const handleClick = useCallback(() => {
    // handler
  }, []);

  return <button onClick={handleClick}>Click</button>;
};
```

## Deployment Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] ESLint shows no errors
- [ ] Build succeeds without warnings
- [ ] Tested in multiple browsers
- [ ] Mobile responsiveness verified
- [ ] Accessibility tested (keyboard navigation, screen reader)
- [ ] Performance metrics acceptable
- [ ] Environment variables properly configured
- [ ] No console errors or warnings

## Getting Help

- Check existing issues and discussions
- Review the main README.md
- Look at similar implementations in the codebase
- Ask in GitHub discussions
- Contact the maintainers

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- Project CONTRIBUTORS.md file
- Release notes

Thank you for contributing to ITL Website! 🎉

---

**Questions?** Open an issue or start a discussion on GitHub.
