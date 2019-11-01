import DefaultLayout from '~/layouts/Default.vue'

//global stylesheet
import '~/assets/style/styles.scss'

export default function (Vue, { router, head }) {
  const baseUrl = process.env.URL || process.env.GRIDSOME_URL

  Vue.component('Layout', DefaultLayout)
  
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: encodeURI('https://fonts.googleapis.com/css?family=Muli:400,400i,700|Corben:700&display=swap')
  // })
  head.meta.push({
    name: 'og:image',
    content: baseUrl + '/open-graph.jpg'
  })
  head.meta.push({
    name: 'twitter:image',
    content: baseUrl + '/open-graph.jpg'
  })
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })
  head.meta.push({
    key: 'og:type',
    name: 'og:type',
    content: 'website'
  })

  router.beforeEach((to, _from, next) => {
    const pageUrl = baseUrl + to.path
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: pageUrl,
    })
    head.meta.push({
      key: 'canonical',
      name: 'canonical',
      content: pageUrl,
    })
    next()
  })
}
