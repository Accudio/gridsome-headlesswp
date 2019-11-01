<template>
  <div>
    <Header />
    <transition name="fade" appear>
      <div>
        <slot/>
      </div>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.fade-enter-active {
  transition: .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
