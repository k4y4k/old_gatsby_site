module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        class: 'font-sans',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: process.env.NODE_ENV === 'development',
        tailwind: true,
        verbose: true,
        whitelist: ['font-mono', 'font-sans'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '<kayak />',
        short_name: 'kayak.rocks',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        icon: './static/favicon.png',
      },
    },
  ],
};
