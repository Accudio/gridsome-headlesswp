<template>
  <Pager :info="info" linkClass="active" />
</template>

<script>
import { Pager } from 'gridsome'

export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: {
    Pager
  }
}
</script>
