<template>
  <ul>
    <li v-for="{ node } in $static.allWordPressCategory.edges" :key="node.slug">
      <g-link :to="node.path">{{ node.title }} ({{ node.count }})</g-link>
    </li>
  </ul>
</template>

<static-query>
query {
  allWordPressCategory(sortBy: "count", limit: 100) {
    edges {
      node {
        title
        slug
        count
        path
      }
    }
  }
}
</static-query>
