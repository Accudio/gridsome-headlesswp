<template>
  <Layout>
    <h1>{{ $page.page.title }}</h1>
    <template v-if="$page.page.content">
      <div class="content" v-html="$page.page.content"/>
    </template>
    <Post :post="node" v-for="{ node } in $page.posts.edges" :key="node.id"/>
    <Pagination :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<page-query>
query Blog($page: Int) {
  page: wordPressPage(path: "/pages/blog") {
    title
    content
    acf {
      pageLayout
      acfImage {
        src
        alt
      }
    }
    yoastMeta {
      yoastWpseoTitle
      yoastWpseoMetadesc
    }
  }
  posts: allWordPressPost(page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
    return this.headMeta(this.$page.page.yoastMeta.yoastWpseoTitle, this.$page.page.yoastMeta.yoastWpseoMetadesc)
  }
}
</script>
