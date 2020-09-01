module.exports = {
  siteMetadata: {
    title: "Compro Oro e Argento - Lascari (Palermo)",
    author: "1000 Sunny",
    description: "Compro Oro Lascari (Palermo) è specializzata nella compravendita di oro, argento e oggetti preziosi. Da oltre 60 anni, riusciamo sempre a fornire la migliore quotazione relativa a tutti i metalli preziosi come oro od argento, aggiornata in tempo reale con il fixing di Londra"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5SCHWCR",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
