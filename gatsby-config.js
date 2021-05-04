module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/components/ui/logo/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `welcome-page`,
        path: `${__dirname}/src/components/frontend/home-pages/welcome-page/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `welcome-page`,
        path: `${__dirname}/src/components/frontend/home-pages/welcome-page`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato sans-serif`,
          `100,100i,300,300i,400,400i,700,700i,900,900i|Reenie+Beanie`,
          'Poppins sans-serif',
          '100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
        ],
        display: 'swap',
      },
    },
  ],
};
