<template>
  <div class="patterns">
    <h1>Algorithms</h1>
    <router-link to="/algorithms/binary-tree">Binary tree</router-link>
     <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import BinaryTree from '@/components/BinaryTree.vue'

export default {
  name: 'Algorithms',
  // components: {
  //   HelloWorld
  // }
}
</script>
