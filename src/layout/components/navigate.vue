<template>
  <div class="nav">
    111
  </div>
</template>

<script >
import { reactive, toRefs } from 'vue'
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
<style lang='less' scoped>
.nav{
width: 100%;
height: 80px;
background-color: #273458;

}
</style>