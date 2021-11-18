module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "leagueOfschool",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckv71vihc4yxy01xveqb90d3g/master",
    },
  },
],
  
};
