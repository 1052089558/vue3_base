<template>
    <div class="name">
  
    </div>
  </template>
  
  <script >
  import { reactive, toRefs } from "vue";
  
  export default {
    setup(props, context) {
      let state = reactive({
      
      });
      return {
        ...toRefs(state),
      };
    },
  };
  </script>
  
  <style lang="less" scoped>
  
  </style>