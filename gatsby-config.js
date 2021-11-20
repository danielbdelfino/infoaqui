module.exports = {
  plugins: ['gatsby-theme-material-ui', 'gatsby-plugin-use-query-params',
  {
    resolve: `gatsby-plugin-google-adsense`,
    options: {
      publisherId: `ca-pub-3197953936610029`
    },
  }],
  siteMetadata: {
    title: "Infoaqui",
    titleTemplate: "%s · Informção com qualidade",
    description:
      "InfoAqui - Conteúdo em um só lugar!",
    url: "http://www.infoaqui.net.br", // No trailing slash allowed!
    image: "/images/infoaqui.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@danielbdelfino",
    icon: 'src/images/touchwifi_small.png'
  },
};
