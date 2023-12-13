<template>
  <div class="context">
    <!-- 主导航 -->
    <div class="nav">
      <div class="nav-left">abc12</div>

      <div class="nav-right">
        <div>
          <el-icon><CirclePlus /></el-icon>
          {{ t("home.postad") }}
        </div>
        <div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ t("home.languages") }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item  command="en">English</el-dropdown-item>
                <el-dropdown-item  command="zh-cn">Chinese</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div>
         <i><el-icon><Location /></el-icon></i> 
           {{ t("home.country") }}
        </div>
        <div>
        <i><el-icon><User /></el-icon></i>  
          {{ t("home.account") }}
        </div>
        <div>
          <el-icon><Notebook /></el-icon>
          {{ t("home.feedback") }}
        </div>
      </div>
    </div>
    <!-- 大图 -->
    <img src="../../assets/images/2.png" alt="" class="imgClass" />
    <!-- 模块分类 -->


  </div>
</template>

<script  >
import { onMounted, reactive, toRefs,computed } from "vue";
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const state = reactive({
 
    });
    const {t,locale} =useI18n()
   
    onMounted(()=>{
   
    })
    //设置语言
    const handleCommand=(lang)=>{
      locale.value = lang=="en"?"en":"zh-cn"
        
     
          
    }

    return {
      t,
      locale,
      ...toRefs(state),
      handleCommand,
    };
  },
};
</script>
<style lang="less" scoped>
.context {
  width: 100%;
  height: 100%;
  .nav {
    display: flex;
    // justify-content: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #273458;
    &-left {
      font-size: 40px;
      color: #ffffff;
      margin-left: 200px;
    }
    &-right {
      display: flex;
      align-items: center;
      margin-right: 200px;
      color: #ffffff;
      div {
        height: 80px;
        line-height: 80px;
        font-size: 25px;
        padding-left: 20px;
        .el-icon{
          top: 6px;
          font-size: 30px;
        }
        span {
          color: #ffffff;
          .el-icon--right{
            top:8px
          }
        }
      }
    }
  }
  .imgClass {
    display: block;
    height: 320px;
    width: 100%;
    z-index: -9999;
  }
}
</style>
