<template>
  <Layout>
    <h1 class="mb-5">{{$page.page.title}}</h1>
    <template v-if="$page.page.acf.acfImage">
      <g-image :src="$page.page.acf.acfImage.src" :alt="$page.page.acf.acfImage.alt" />
    </template>
    <div class="page-content" v-html="$page.page.content"/>
  </Layout>
</template>

<page-query>
query {
  page: wordPressPage(path: "/pages/home") {
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
}
</page-query>

<script>
import head from '~/mixins/head.js'
import Post from "~/components/Post.vue"

export default {
  mixins: [
    head
  ],
  metaInfo () {
    return this.headMeta(this.$page.page.yoastMeta.yoastWpseoTitle, this.$page.page.yoastMeta.yoastWpseoMetadesc)
  }
}
</script>
