<template>
  <li @click.stop="toggleShowChild">
    {{data.title}}
    <ul v-if="data.children && data.children.length" v-show="$data._showChild">
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
  data() {
    return {
      _showChild: false,
    };
  },
  methods: {
    toggleShowChild() {
      this.$data._showChild = !this.$data._showChild;
    },
  },
  mounted() {
    this.$data._showChild = !!this.data.showChild;
  }
}

</script>

<style>

</style>
