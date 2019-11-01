<template>
  <Layout>
    <h1 class="mb-5">{{$page.page.title}}</h1>
    <template v-if="$page.page.acf.acfImage">
      <g-image :src="$page.page.acf.acfImage.src" :alt="$page.page.acf.acfImage.alt" />
    </template>
    <Fragments :fragments="$page.page.postFragments"/>
  </Layout>
</template>

<page-query>
query($path: String) {
  page: wordPressPage(path: $path) {
    title
    postFragments {
      type
      order
      fragmentData {
        html
        image
        alt
      }
    }
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
import Fragments from '~/components/Fragments.vue'

export default {
  components: {
    Fragments
  },
  mixins: [
    head
  ],
  metaInfo () {
    return this.headMeta(this.$page.page.yoastMeta.yoastWpseoTitle, this.$page.page.yoastMeta.yoastWpseoMetadesc)
  }
}
</script>
