import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$dispatch = function(eventName, args) {
  this.$emit(eventName, args);
  if (this.$parent) {
    this.$parent.$dispatch(eventName, args);
  }
};

Vue.prototype.$broadcast = function(eventName, args) {
  this.$emit(eventName, args);
  if (this.$children && this.$children.length) {
    for (let i of this.$children) {
      i.$broadcast(eventName, args);
    }
  }
};

window.app = new Vue({
  render: h => h(App),
}).$mount('#app')
