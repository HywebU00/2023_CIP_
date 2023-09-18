import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const pageStting = defineStore('topNavInfo', {
  persist: true,
  state: () => ({
    //定義 state 初始值
    topNavPageTitle: ref(""),
    menuRail:ref(false)
  }),
  getters: {

  },
  actions: {
    //定義 actions
    setTopNavPageTiltle(tt) {
      this.topNavPageTitle = tt;
    },
    setMenuRail(tt){
      this.menuRail = tt
    },
    clickMenuRail(){
      this.menuRail =!this.menuRail
    }
  }
})


export const maskStore = defineStore("mstatus", {
  persist: true,
  state: () => ({
    //定義 state 初始值
    maskStatus: ref(false)
  }),
  getters: {
    //定義 getters
  },
  actions: {
    //定義 actions
    doMask(tt) {
      this.maskStatus = tt
    },
  },
});
