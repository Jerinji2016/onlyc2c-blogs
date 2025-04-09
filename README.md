# OnlyC2C Blogs

Hugo project for Blogs content managememt for onlyc2c

## Installation

Make sure hugo is setup before running

Use `brew install hugo` for mac devices.

***

## Environment Configuration

This project uses Hugo's environment-specific configuration:

- `config/_default/` - Base configuration
- `config/development/` - Development environment settings
- `config/staging/` - Staging environment settings
- `config/production/` - Production environment settings

## Run & Deployment

### Development Environment

- Run the development server with:

    ```bash
    hugo server --environment development
    ```

  This will use the development configuration with:
  - BaseURL: `http://localhost:1313/`
  - Draft, future, and expired content enabled
  - Verbose output for debugging

### Staging Environment

- Build for staging with:

    ```bash
    hugo --environment staging
    ```

  This will use the staging configuration with:
  - BaseURL: `https://staging.onlyc2c.com/`
  - Only published content (no drafts)
  - Debugging features enabled
  - Minification enabled with HTML comments preserved

### Production Environment

- Build for production with:

    ```bash
    hugo --environment production
    ```

  This will use the production configuration with:
  - BaseURL: `https://onlyc2c.com/`
  - Only published content (no drafts)
  - Minification enabled

> __NOTE:__
>
> Remember to clear the public folder before every build

***
