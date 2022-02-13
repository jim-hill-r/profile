module.exports = {
    siteMetadata: {
      title: `Jim Hill`,
      description: `Solving big problems!`,
      author: `jim.hill.r@gmail.com`,
    },
    plugins: [
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content/`,
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Bitter','roboto']
          }
        }
      },
      {
        resolve: 'gatsby-plugin-pdf',
        options: {
          paths: ['/resume/us', '/resume/eu', '/resume/aops/us'],
          outputPath: '/public/downloads',
          pdfOptions: {
            printBackground: true,
            width: '8.5in',
            height: '11in'
          }
        },
      },
    ]
}