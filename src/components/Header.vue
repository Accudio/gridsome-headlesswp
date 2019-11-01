<template>
  <header>
    <div>{{ this.$static.options.name }}</div>
    <div v-if="this.$static.options.description">{{ this.$static.options.description }}</div>
    <ul>
      <li v-for="menuItem in menu">
        <g-link :to="menuItem.url">{{ menuItem.title }}</g-link>
      </li>
    </ul>
  </header>
</template>

<static-query>
query {
  menuArr: allWordPressMenu(filter: { location: { eq: "main-menu"}}) {
    edges {
      node {
        items {
          title
          url
        }
      }
    }
  }
  options: wordPressOption(id: "1") {
    name
    description
  }
}
</static-query>

<script>
export default {
  computed: {
    menu() {
      return this.$static.menuArr.edges[0].node.items
    }
  }
}
</script>