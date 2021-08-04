module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Aluminum Anodizing Specialists in Montreal', // Navigation and Site Title
  titleAlt: 'Aluproteck - Aluproteck.ca', // Title for JSONLD
  description:
    'Aluproteck offers fast, professional, and personalized anodizing services. Based in Boucherville, we work with developers, contractors, and manufacturers throughout Quebec.',
  headline: 'Aluminum Anodizing Specialists in Montreal.', // Headline for schema.org JSONLD
  url: 'https://aluproteck.ca', // Domain of your site. No trailing slash!
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en-CA', // Facebook Language

  // JSONLD / Manifest
  favicon: '/favicon.ico', // Used for manifest favicon generation
  shortName: 'HD', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Aluproteck', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  facebook: 'aluproteck', // Facebook Site Name
  googleAnalyticsID: 'UA-155216455-2',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
