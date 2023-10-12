<template>
  <v-app id="inspire" :class="['layout', { isSmallScreen: isSmallScreen }]">
    <!-- :rail="ps.menuRail " -->
    <v-navigation-drawer
      :class="['navDrawer', { hidden: ps.menuRail }]"
      v-model="drawer"
      :rail="ps.menuRail"
      permanent
      :rail-width="railWidth"
      :width="252"
      @click="ps.setMenuRail(false)"
    >
      <div class="logoImg" @click.stop="goHome()">
        <img class="logo" src="~@/assets/logo.png" alt="" />
        <img src="~@/assets/logo_font.png" alt="" />
      </div>
      <v-list
        density="compact"
        nav
        class="text-navText"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <v-list-group
          v-for="(item, index) in camFunAry"
          :value="item.name"
          :key="item.name"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="item.icon"
              :title="item.name"
            >
            </v-list-item>
          </template>
          <v-list v-for="(itemChild, index) in item.child" :key="index">
            <v-list-group :value="itemChild.name">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :title="itemChild.name"
                ></v-list-item>
              </template>
              <v-list-item
                v-for="(itemChild2, index) in itemChild.child"
                :key="index"
                :title="itemChild2.name"
                :to="itemChild2.job"
                :value="itemChild2.id"
              ></v-list-item>
            </v-list-group>
          </v-list>
        </v-list-group>
        <!-- 案件管理 start -->
        <v-list-group value="我的首頁">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="我的首頁"
              prepend-icon="mdi-account-group"
            >
              <!-- <img src="~@/assets/icon/icon_01.svg" /> -->
            </v-list-item>
          </template>
          <v-list>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="派車管理"> </v-list-item>
            </template>
            <v-list-item title="特殊派車" value="特殊派車"> </v-list-item>
            <v-list-item title="派車回報" value="派車回報"> </v-list-item>
            <v-list-item title="車輛基本資料" value="車輛基本資料">
            </v-list-item>
          </v-list>
        </v-list-group>
        <!-- 案件管理 end -->
      </v-list>
      <div class="userInfo">
        <v-avatar image="~@/assets/account.jpg" size="50"></v-avatar>
        <ul>
          <li>Elle Wang</li>
          <li>企劃處</li>
        </ul>
        <button><span class="material-symbols-rounded"> logout </span></button>
      </div>
      <button class="rounded-circle drawerBtn" @click.stop="ps.clickMenuRail()">
        <span class="material-icons-round">arrow_right</span>
      </button>
    </v-navigation-drawer>
    <div class="content">
      <header :class="['navTitle', 'header', { hide: ps.menuRail }]">
        <div class="">
          <button
            class="drawerBtn mobileDrawerBtn"
            @click.stop="[ps.clickMenuRail(), (overlay = !overlay)]"
          >
            <span class="material-icons-round"> menu </span>
          </button>
          <topNavigation />
        </div>
      </header>
      <main :class="['main', { hide: ps.menuRail }]">
        <router-view />
      </main>
    </div>
  </v-app>
</template>

<script>
// import { useTheme } from "vuetify";
// const theme = useTheme();
import axios from "axios";
import { ref, reactive } from "vue";
import { router } from "@/router/index.js";
import topNavigation from "./topNavigation.vue";
import { pageStting } from "@/stores/storage.js";
const ps = pageStting();

export default {
  data: () => ({
    ps,
    camFunAry: ref([]),
    tab: null,
    drawer: true,
    value: 0,
    windowWidth: "",
    railWidth: "1",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    navList: {},
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  created() {
    axios.post("/api/cam/cam-menu.json").then((res) => {
      this.camFunAry = res.data;
      console.log(this.camFunAry);
    });
  },
  components: {
    topNavigation,
  },
  methods: {
    goHome() {
      router.push({ name: "my-index" });
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991 ? (this.railWidth = 1) : (this.railWidth = 70);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      // this.opened = newOpened;
      // console.log(this.opened);
      this.opened = newOpened.slice(-1);
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
