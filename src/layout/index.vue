<template>
  <div class="layout">
  
    <el-container>
      <el-header > <navigate /></el-header>
    
        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
       </el-container>
   
     
    </el-container>
 
  </div>
</template>

<script >
import { reactive, toRefs } from 'vue'
import navigate from "./components/navigate.vue"
export default {
    components:{
        navigate
    },
setup(props, context) {
const state = reactive({

 });
 
 return {
 ...toRefs(state),
 };
},
};
</script>
<style lang='less' scoped>

    .layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.el-header {
  position: relative;
  height: 400px;
  width: 100%;
  padding: 0;
}
.el-aside {
  width: 250px;
  height: 100%;
}
// .el-main {
//   text-align: center;
// }


</style>