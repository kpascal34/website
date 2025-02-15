# Fortis Secured Website

A professional website for Fortis Secured, offering security services including door supervision, manned security, event security, and risk assessment services in Yorkshire and Greater Manchester.

## SEO Improvements

The website has been optimized for search engines with the following features:

### Meta Tags and Structured Data
- Comprehensive meta tags for each page
- Open Graph and Twitter Card tags for social media sharing
- JSON-LD structured data for local business and services
- Canonical URLs to prevent duplicate content

### Semantic HTML
- Proper heading hierarchy
- Semantic elements (`main`, `article`, `section`)
- ARIA labels and roles for accessibility
- Breadcrumb navigation

### Technical SEO
- Dynamic sitemap generation
- Automatic sitemap submission to search engines
- Optimized robots.txt
- Mobile-friendly responsive design
- Progressive enhancement with no-JavaScript fallback

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
```bash
# Install dependencies
npm install
```

### Available Scripts
- `npm start` - Runs the development server
- `npm run build` - Builds the production version and generates sitemap
- `npm run generate-sitemap` - Generates sitemap.xml
- `npm run submit-sitemap` - Submits sitemap to search engines
- `npm run deploy` - Builds and deploys with sitemap submission

### Deployment Process
1. Run the build command:
   ```bash
   npm run build
   ```
2. The build process will:
   - Generate a fresh sitemap.xml
   - Create optimized production build
   - Include all meta tags and structured data

3. Deploy the site:
   ```bash
   npm run deploy
   ```
4. The deploy process will:
   - Build the project
   - Submit the sitemap to search engines
   - Deploy to production server

## SEO Monitoring
- Regular sitemap updates
- Search engine submission tracking
- Performance monitoring
- Mobile responsiveness checks

## Contributing
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License
All rights reserved © Fortis Secured 