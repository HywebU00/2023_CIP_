<template>
  <!-- 手機版 start-->
  <template v-if="mobileHeader === true">
    <!-- 系統名稱(手機版本出現) start-->
    <div class="CIP_title">
      <img class="logo" src="~@/assets/logo.png" alt="" />
      <span> 單一簽入系統暨會內入口網</span>
    </div>
    <!-- 系統名稱(手機版本出現) end-->
    <div class="userLoginCard">
      <button
        class="userLoginCardBtn"
        @click="() => (userLoginCard = !userLoginCard)"
      >
        <span class="material-icons-round"> chevron_left </span>
        <span>本日代理</span>
      </button>
      <div :class="['card', { open: userLoginCard }]">
        <ul>
          <li><span>上班時間 : </span>0830</li>
          <li><span>今日代理 : </span>鄭安安/1330-1730</li>
        </ul>
      </div>
    </div>
    <div class="functionList">
      <!-- 搜尋欄 mobile start -->
      <div class="mobileSearchBtn">
        <v-menu
          v-model="searchMenu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <button>
              <span v-bind="props" class="material-icons-round icon">
                search
              </span>
            </button>
          </template>
          <v-card
            min-width="300px"
            class="infoBtnContainer mobileSearchBox d-flex"
          >
            <v-text-field
              density="compact"
              variant="solo"
              label="人員查詢"
              single-line
              hide-details
            >
              <template #append-inner>
                <v-btn
                  class="btn"
                  type="submit"
                  icon="mdi-magnify"
                  size="small"
                >
                </v-btn>
              </template>
            </v-text-field>
          </v-card>
        </v-menu>
      </div>
      <!-- 搜尋欄 mobile end-->
      <!-- 訊息通知按鈕 start -->
      <div class="infoBtn">
        <v-menu
          v-model="infoMenu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <button>
              <v-badge :content="2" color="light">
                <span v-bind="props" class="icon material-icons-round">
                  notifications_active
                </span>
              </v-badge>
            </button>
          </template>
          <v-card min-width="100" class="infoBtnContainer">
            <ul class="">
              <li>
                <a href="#">
                  <div>
                    <span class="title">本月薪資入帳，立即查看</span>
                    <span class="time">111/06/30</span>
                  </div>
                  <span class="arrow_icon">
                    <img src="~@/assets/info_arrow.png" alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span class="title"
                      >您有一則最新指派案件，立即查看與填報
                      您有一則最新指派案件，立即查看與填報</span
                    >
                    <span class="time">111/06/30</span>
                  </div>
                  <span class="arrow_icon">
                    <img src="~@/assets/info_arrow.png" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </v-card>
        </v-menu>
      </div>
      <!-- 訊息通知按鈕 end -->
    </div>
  </template>
  <!-- 手機版 end-->
  <!-- 桌機版 start-->
  <template v-else>
    <div class="title d-flex align-center">
      {{ ps.topNavPageTitle }}
      <!-- 單一遷入系統暨會內入口網 -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <button class="navBtn" v-bind="props">
            <span class="material-icons-round icon"> menu </span>
            <!-- <span class="material-icons-round icon"> launch </span> -->
          </button>
        </template>
        <v-list>
          <v-list-item title="1案件類別管理" variant="text" to="/my-index" />
          <v-list-item title="2案件類別管理" variant="text" to="/my-index" />
          <v-list-item title="2案件類別管理" variant="text" to="/my-index" />
        </v-list>
      </v-menu>
    </div>
    <div class="userLoginCard">
      <button
        class="userLoginCardBtn"
        @click="() => (userLoginCard = !userLoginCard)"
      >
        <span class="material-icons-round"> chevron_left </span>
        <span>本日代理</span>
      </button>
      <div :class="['card', { open: userLoginCard }]">
        <ul>
          <li><span>上班時間 : </span>0830</li>
          <li><span>今日代理 : </span>鄭安安/1330-1730</li>
        </ul>
      </div>
    </div>
    <div class="functionList">
      <!-- 搜尋欄 start -->
      <div class="webSearch rounded-pill">
        <v-text-field
          density="compact"
          variant="solo"
          label="搜尋結果"
          single-line
          hide-details
        >
          <template #append-inner>
            <v-btn
              class="searchBtn"
              type="submit"
              size="small"
              icon="mdi-magnify"
              variant="text"
            >
            </v-btn>
          </template>
        </v-text-field>
      </div>
      <!-- 搜尋欄 end -->
      <!-- 暗黑模式 start -->
      <div class="darkBtn">
        <button @click="toggleDarkTheme()">
          <span
            v-if="this.themeDark === true"
            class="material-icons-round icon"
          >
            dark_mode
          </span>
          <span v-else class="material-icons-round icon"> light_mode </span>
        </button>
      </div>
      <!-- 暗黑模式 end -->
      <!-- 改變字級按鈕 start -->
      <div class="fontBtn fontSize">
        <v-menu
          v-model="fontSizeMenu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <button v-bind="props">
              <span class="icon">{{ btnSize }}</span>
            </button>
          </template>
          <v-card class="fontBtnContainer" min-width="100">
            <ul class="d-flex">
              <li>
                <button
                  role="button"
                  @click="fontSizeChange('small')"
                  :class="[{ active: this.fontSize === 'small' }]"
                >
                  小
                </button>
              </li>
              <li>
                <button
                  role="button"
                  @click="fontSizeChange('medium')"
                  :class="[{ active: this.fontSize === 'medium' }]"
                >
                  中
                </button>
              </li>
              <li>
                <button
                  role="button"
                  @click="fontSizeChange('large')"
                  :class="[{ active: this.fontSize === 'large' }]"
                >
                  大
                </button>
              </li>
            </ul>
          </v-card>
        </v-menu>
      </div>
      <!-- 改變字級按鈕 end -->
      <!-- 改變顏色按鈕 start -->
      <div class="colorBtn">
        <v-menu
          v-model="colorMenu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <button v-bind="props" @click="changeThemeActive">
              <span class="material-icons-round icon"> palette </span>
            </button>
          </template>
          <v-card class="colorBtnContainer" ref="el" min-width="100">
            <ul class="d-flex">
              <li>
                <button
                  @click="changeTheme('default')"
                  :class="['default', { active: this.theme === 'default' }]"
                ></button>
              </li>
              <li>
                <button
                  @click="changeTheme('green')"
                  :class="['green', { active: this.theme === 'green' }]"
                ></button>
              </li>
              <li>
                <button
                  @click="changeTheme('red')"
                  :class="['red', { active: this.theme === 'red' }]"
                ></button>
              </li>
              <li>
                <button
                  color="primary"
                  @click="changeTheme('blue')"
                  :class="['blue', { active: this.theme === 'blue' }]"
                ></button>
              </li>
            </ul>
          </v-card>
        </v-menu>
      </div>
      <!-- 改變顏色按鈕 end -->
      <!-- 訊息通知按鈕 start -->
      <div class="infoBtn">
        <v-menu
          v-model="infoMenu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <button>
              <v-badge :content="2" color="light">
                <span v-bind="props" class="icon material-icons-round">
                  notifications_active
                </span>
              </v-badge>
            </button>
          </template>
          <v-card min-width="100" class="infoBtnContainer">
            <ul class="">
              <li>
                <a href="#">
                  <div>
                    <span class="title">本月薪資入帳，立即查看</span>
                    <span class="time">111/06/30</span>
                  </div>
                  <span class="arrow_icon">
                    <img src="~@/assets/info_arrow.png" alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span class="title"
                      >您有一則最新指派案件，立即查看與填報
                      您有一則最新指派案件，立即查看與填報</span
                    >
                    <span class="time">111/06/30</span>
                  </div>
                  <span class="arrow_icon">
                    <img src="~@/assets/info_arrow.png" alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span class="title"
                      >您有一則最新指派案件，立即查看與填報
                      您有一則最新指派案件，立即查看與填報</span
                    >
                    <span class="time">111/06/30</span>
                  </div>
                  <span class="arrow_icon">
                    <img src="~@/assets/info_arrow.png" alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span class="title"
                      >您有一則最新指派案件，立即查看與填報
                      您有一則最新指派案件，立即查看與填報</span
                    >
                    <span class="time">111/06/30</span>
                  </div>
                  <span class="arrow_icon">
                    <img src="~@/assets/info_arrow.png" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </v-card>
        </v-menu>
      </div>
      <!-- 訊息通知按鈕 end -->
    </div>
  </template>
  <!-- 桌機版 end-->
</template>

<script>
import { pageStting } from "@/stores/storage.js";
const ps = pageStting();

export default {
  data: () => ({
    ps,
    theme: "",
    themeDark: false,
    mobileHeader: false,
    userLoginCard: false,
    ////////////////////////
    fontSizeMenu: false,
    fontSize: "",
    colorMenu: false,
    infoMenu: false,
    searchMenu: false,
    /////////////////////////
    cookie: "",
    btnSize: "",
    colorCookie: "",
  }),
  methods: {
    toggleDarkTheme() {
      let th = this.$vuetify.theme.global;
      th.name === `dark` ? (th.name = `default`) : (th.name = `dark`);
      this.createCookie("Theme", `${th.name}`, 356);
      this.themeDark = !this.themeDark;
      if (this.themeDark === true) {
        this.theme = "default";
      }
    },
    changeTheme(color) {
      let th = this.$vuetify.theme.global;
      th.name = color;
      this.theme = color;
      this.themeDark = false;
      this.createCookie("Theme", `${color}`, 356);
    },
    fontSizeChange(targetSize) {
      this.createCookie("FontSize", `${targetSize}`, 356);
      this.changeFontSizeClass(targetSize);
    },
    createCookie(name, value, days) {
      let _expires;
      const _date = new Date();
      if (days) {
        _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
        _expires = "; expires=" + _date.toGMTString();
      } else {
        _expires = "";
      }
      document.cookie = name + "=" + value + _expires + "; path=/";
    },
    readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    changeFontSizeClass(targetName) {
      const body = document.querySelector("body");
      switch (targetName) {
        case "small":
          body.classList.remove("largeSize", "mediumSize");
          body.classList.add("smallSize");
          this.fontSize = "small";
          break;
        case "medium":
          body.classList.remove("smallSize", "largeSize");
          body.classList.add("mediumSize");
          this.fontSize = "medium";
          break;
        case "large":
          body.classList.remove("smallSize", "mediumSize");
          body.classList.add("largeSize");
          this.fontSize = "large";
          break;
      }
      this.getFontSizeText(targetName);
    },
    getFontSizeText(textSize) {
      switch (textSize) {
        case "small":
          this.btnSize = "小";
          break;
        case "medium":
          this.btnSize = "中";
          break;
        case "large":
          this.btnSize = "大";
          break;
      }
    },
    fontSizeInit() {
      const body = document.querySelector("body");
      this.cookie = this.readCookie("FontSize") || null;
      if (this.cookie == null) {
        this.cookie = "medium";
      }
      this.fontSize = this.cookie;
      body.classList.add(`${this.cookie}Size`);
      this.getFontSizeText(this.cookie);
    },
    themeInit() {
      this.theme = this.readCookie("Theme") || null;
      if (this.theme == null) {
        this.theme = "default";
        this.themeDark = false;
      }
      if (this.theme == "dark") {
        this.themeDark = true;
      }
      this.changeTheme(this.theme);
    },
    //桌機與手機版本header 切換
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991
        ? (this.mobileHeader = true)
        : (this.mobileHeader = false);
      this.isSmallScreen = window.innerWidth < 991;
    },
  },
  mounted() {
    this.fontSizeInit();
    this.handleResize();
    this.themeInit();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
