<template>
  <Layout>
    <h1 class="mb-5">Fixed</h1>
    <p class="lead">This is a custom, static page, independent of your WordPress content.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <g-image src="~/assets/images/sampleimage.jpg" alt class="img-fluid mb-3"/>
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  </Layout>
</template>

<script>
import head from '~/mixins/head.js'

export default {
  mixins: [
    head
  ],
  metaInfo () {
    return this.headMeta('Fixed Page', 'Description')
  }
}
</script>
