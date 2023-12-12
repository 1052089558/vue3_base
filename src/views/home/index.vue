<template>
    <div class="home">
  
    </div>
  </template>
  
  <script >
  import { reactive, toRefs } from "vue";
  
  export default {
    setup(props, context) {
      const state = reactive({
      
      });
      return {
        ...toRefs(state),
      };
    },
  };
  </script>
  
  <style lang="less" scoped>
  
  </style>