<template>
  <li @click.stop="toggleShowChild">
    <input type="checkbox" :checked="selected" @click.stop='changeSelected'/>
    {{data.title}}
    <ul v-if="data.children && data.children.length" v-show="showChild">
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
      showChild: false,
      selected: false,
    };
  },
  methods: {
    toggleShowChild() {
      this.showChild = !this.showChild;
    },
    changeSelected() {
      this.selected = !this.selected;
      this.$broadcast("changeSelected", this.selected);
      this.$dispatch("recalcSelected");
    },
  },
  mounted() {
    this.showChild = !!this.data.showChild;
    this.selected = !!this.data.selected;

    this.$on("changeSelected", selected => {
      this.selected = selected;
    });
    this.$on("recalcSelected", () => {
      let flag = true;
      if (this.$children && this.$children.length) {
        for (let i of this.$children) {
          flag = flag && i.selected;
        }
      }
      this.selected = flag;
    });
  },
}

</script>

<style>

</style>
