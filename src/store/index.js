import { defineStore } from 'pinia'
export const useUserStore = defineStore({
id: 'user', 
persist: {
    enabled: true, // 开启存储
    
  },


state: () => {

return {
  id: "citylist", // id必填，且需要唯一
  persist: {
    enabled: true, // 开启存储
  },

}
},
actions: {


},
getters: {
  

}


})