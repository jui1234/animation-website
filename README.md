# React SEO Website

A modern React application with comprehensive SEO optimization built from scratch.

## Features

- ⚛️ **React 18** with modern hooks and functional components
- 🔍 **SEO Optimized** with react-helmet-async for meta tags
- 🚀 **React Router** for client-side routing
- 📱 **Responsive Design** that works on all devices
- 🏗️ **Structured Data** for better search engine understanding
- 🎨 **Modern CSS** with clean, professional styling

## SEO Features

- Meta tags optimization (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Canonical URLs
- Mobile-responsive design
- Fast loading performance

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder with optimized SEO settings.

## Project Structure

```
src/
├── components/
│   ├── SEO.js          # SEO component with meta tags
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/
│   ├── Home.js         # Homepage with hero section
│   ├── About.js        # About page with company info
│   ├── Services.js     # Services page with offerings
│   └── Contact.js      # Contact page with form
├── App.js              # Main app component with routing
├── index.js            # React app entry point
└── index.css           # Global styles
```

## SEO Configuration

The SEO component (`src/components/SEO.js`) handles:

- Dynamic page titles
- Meta descriptions
- Keywords
- Open Graph tags
- Twitter Cards
- Structured data
- Canonical URLs

### Usage Example

```jsx
import SEO from '../components/SEO';

const MyPage = () => {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description for search engines"
        keywords="keyword1, keyword2, keyword3"
        url="/my-page"
        structuredData={myStructuredData}
      />
      {/* Your page content */}
    </>
  );
};
```

## Customization

1. **Update site information** in `src/components/SEO.js`
2. **Modify styling** in `src/index.css`
3. **Add new pages** in `src/pages/`
4. **Update navigation** in `src/components/Header.js`

## Performance Tips

- Images should be optimized for web
- Use lazy loading for images and components
- Implement code splitting for larger applications
- Monitor Core Web Vitals for SEO performance

## License

MIT License - feel free to use this project for your own websites.
