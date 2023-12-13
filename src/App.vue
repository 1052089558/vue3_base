<script  >
import { onMounted, reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
     
    });
  
    onMounted(()=>{
      
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


