<template>
  <div v-if="fragments">
    <template v-for="(fragment, i) in fragments">
      <template v-if="fragment.type == 'html'">
        <div :key="'html-' + i" v-html="fragment.fragmentData.html"></div>
      </template>

      <template v-if="fragment.type == 'img' && fragment.fragmentData.image">
        <g-image :key="'img-' + i" :src="fragment.fragmentData.image" :alt="fragment.fragmentData.alt"/>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    fragments: {
      type: Array,
      required: true
    }
  },
}
</script>