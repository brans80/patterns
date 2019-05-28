<template>
<Content contentTitle='Бинарное дерево' v-slot:default>
  <slot>
    <p><i>Двои́чное де́рево — иерархическая структура данных, в которой каждый узел имеет не более двух потомков (детей). Как правило, первый называется родительским узлом, а дети называются левым и правым наследниками. Значение левого потомка меньше значения родителя, а значение правого потомка больше значения родителя для каждого узла дерева. То есть, данные в бинарном дереве поиска хранятся в отсортированном виде. При каждой операции вставки нового или удаления существующего узла отсортированный порядок дерева сохраняется. При поиске элемента сравнивается искомое значение с корнем. Если искомое больше корня, то поиск продолжается в правом потомке корня, если меньше, то в левом, если равно, то значение найдено и поиск прекращается.</i>

    </p>
    <div class="img_wrap text-center"><img src="../assets/img/binary-tree.png" alt="img" class="img-thumbnail"></div>
    <a class="btn btn-primary" href="/scripts/algorithms/binary-tree.js" target='_blank'>Посмотреть код</a>

  </slot>
</Content>
</template>

<script>
import Content from '@/components/Content.vue'

import BinaryTree from '@/scripts/algorithms/binary-tree.js'

export default {
  name: 'BinaryTree',
  props: {

  },
  data: function () {
    return {
      treeArr: [],
    }
  },
  components: {
    Content
  },
  created() {
  
  }
}
</script>

<style lang="scss">

</style>
