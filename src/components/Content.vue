<template>
<div class="content_wrap">
  <h2>{{contentTitle}}</h2>
  <slot></slot>
</div>
</template>

<script>
// import --- from '@/components/---.vue'

export default {
  name: 'Content',
  props: {
    contentTitle: String,

  },
  data: function () {
    return {

    }
  },
  components: {

  },
}
</script>

<style lang="scss">

.content_wrap {
  display: block;
  padding: 80px 0 100px;
}

.img_wrap {
  margin: 0 auto 20px;
}

</style>
