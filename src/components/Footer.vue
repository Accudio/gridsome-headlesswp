<template>
  <footer>
    {{ $static.options.acf.footer }}
  </footer>
</template>

<static-query>
query {
  options: wordPressOption(id: "1") {
    acf {
      footer
    }
  }
}
</static-query>