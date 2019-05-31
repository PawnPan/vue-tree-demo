<template>
  <li>
    {{data.title}}
    <ul v-if="data.children && data.children.length">
      <tree-node v-for="item in data.children" :data="item" :key="item.title"></tree-node>
    </ul>
  </li>
  
</template>

<script>
export default {
  name: "treeNode",
  props: [
    "data",
  ],
}

</script>

<style>

</style>
