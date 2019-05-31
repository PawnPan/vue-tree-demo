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
        showChild: true,
        children: [
          {
            title: "child1",
            showChild: true,
            children: [
              {
                title: "grandchild1",
              }
            ]
          },
          {
            title: "child2",
            children: [
              {
                title: "grandchild2",
                selected: true,
              },
              {
                title: "grandchild3",
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
