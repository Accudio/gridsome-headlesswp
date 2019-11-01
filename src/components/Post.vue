<template>
  <article>
    <g-link :to="post.path">
      <h2 v-html="post.title" />
      <div v-html="post.excerpt" />
      <span>Read More</span>
    </g-link>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
