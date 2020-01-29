module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '<kayak />',
        short_name: 'kayak.rocks',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        icon: './static/favicon.png'
      }
    }
  ]
}
