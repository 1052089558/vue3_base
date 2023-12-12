<script  >
import { onMounted, reactive, toRefs } from "vue";
import {useGloabStore}  from "./store";
export default {
  setup() {
    const state = reactive({
      locale: null,
    });
  
    onMounted(()=>{
        const gloab = useGloabStore();
      state.locale = gloab.language
    })
    return {
      ...toRefs(state),
    };
  },
};
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view> </router-view>
  </el-config-provider>
</template>


