<template>
  <div id="app">
    <tree-node :data="data"></tree-node>
  </div>
</template>

<script>
import treeNode from "./components/treeNode";

export default {
  name: 'app',
  data() {
    return {
      data: {
        title: "root",
        children: [
          {
            title: "child1",
          },
          {
            title: "child2",
            children: [
              {
                title: "grandchild"
              }
            ]
          }
        ]
      }

    }
  },
  components: {
    treeNode,
  }
}
</script>

<style>

</style>
