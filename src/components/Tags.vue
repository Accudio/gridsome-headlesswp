<template>
  <ul>
    <li v-for="{ node } in $static.allWordPressPostTag.edges" :key="node.slug">
      <g-link :to="node.path">{{ node.title }} ({{ node.count }})</g-link>
    </li>
  </ul>
</template>

<static-query>
query {
  allWordPressPostTag(sortBy: "slug", limit: 100, order: ASC) {
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
