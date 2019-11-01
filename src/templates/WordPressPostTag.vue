<template>
  <Layout>
    <h1>Tag: {{ $page.tag.title }} </h1>
    <Post :post="node" v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id"/>
    <Pagination :info="$page.tag.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query Tag($path: String, $page: Int) {
  tag: wordPressPostTag(path: $path) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            date
            id
            title
            path
            content
            excerpt
            categories {
              id
              title
              path
            }
            author {
              name
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import head from '~/mixins/head.js'
import Post from '~/components/Post.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    Post,
    Pagination
  },
  mixins: [
    head
  ],
  metaInfo () {
    return this.headMeta('Tag: ' + this.$page.tag.title + ' – Headless Wordpress')
  }
}
</script>
