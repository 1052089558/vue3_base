import { defineStore } from 'pinia'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
export const useGloabStore = defineStore({
id: 'useGloabStore', 
persist: {
    enabled: true, // 开启存储
    
  },
state: () => {
return {
  persist: {
    enabled: true, // 开启存储
  },
  language:en
}
},

actions: {
  
  toggle(){
  return  state.language==zhCn?en:zhCn
  }
},
getters: {
  setLanguage(){
    return   state.language==zhCn?en:zhCn
   }

}


})