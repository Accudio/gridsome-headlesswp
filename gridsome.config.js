const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/*.scss'),
      ],
    })
}

const baseUrl = process.env.URL || process.env.GRIDSOME_URL
module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',
  siteUrl: baseUrl,
  titleTemplate: '%s',
  plugins: [
    {
      use: '~/src/plugins/wp-source/',
      options: {
        baseUrl: 'http://headless-wp.local', // required - Replace me with your Wordpress URL
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/blog/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        },
        createPages: {
          approach: 'exclude', // include or exclude, default is include
          list: ['site-structure'] //an array of page slugs to include or exclude, ex. ['about', 'our-team'], default is an empty array
        },
        splitPostsIntoFragments: true,
        downloadRemoteImagesFromPosts: true,
        downloadRemoteFeaturedImages: true,
        downloadACFImages: true
      }
    },
    { use: '@gridsome/plugin-sitemap' }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
