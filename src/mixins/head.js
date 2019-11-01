export default {
  methods: {
    headMeta: function(title, description = '') {
      return {
        title: title,
        meta: [
          {
            key: 'description',
            name: 'description',
            description: description
          },
          {
            key: 'og:title',
            name: 'og:title',
            description: title
          },
          {
            key: 'og:description',
            name: 'og:description',
            description: description
          },
          {
            key: 'twitter:title',
            name: 'twitter:title',
            description: title
          },
          {
            key: 'twitter:description',
            name: 'twitter:description',
            description: description
          }
        ]
      }
    }
  }
}