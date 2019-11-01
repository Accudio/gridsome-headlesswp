<template>
  <Layout>
    <h1 class="text-break" v-html="$page.post.title"/>
    <template v-if="$page.post.tags.length">
      <h2>Tags:</h2>
      <ul>
        <li v-for="tag in $page.post.tags" :key="tag.id" >
          <g-link :to="tag.path">
            {{ tag.title }} ({{ tag.count }})
          </g-link>
        </li>
      </ul>
    </template>
    <template v-if="$page.post.featuredMediaImage">
      <g-image :src="$page.post.featuredMediaImage" />
    </template>
    <Fragments :fragments="$page.post.postFragments"/>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: wordPressPost(path: $path) {
    title
    date
    featuredMediaImage
    postFragments {
      type
      order
      fragmentData {
        html
        image
        alt
      }
    }
    tags {
      id
      title
      path
      count
    }
    yoastMeta {
      yoastWpseoTitle
      yoastWpseoMetadesc
    }
  }
}
</page-query>

<script>
import head from '~/mixins/head.js'
import Post from "~/components/Post.vue"
import Fragments from '~/components/Fragments.vue'

export default {
  components: {
    Post,
    Fragments
  },
  mixins: [
    head
  ],
  metaInfo () {
    let head = this.headMeta(this.$page.post.yoastMeta.yoastWpseoTitle, this.$page.post.yoastMeta.yoastWpseoMetadesc)
    head.meta.push({
      key: 'og:type',
      name: 'og:type',
      content: 'article'
    })
    return head
  }
}
</script>
