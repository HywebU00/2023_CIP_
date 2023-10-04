<script>
import { maskStore, pageStting } from "@/stores/storage.js";
const ps = pageStting();
export default {
  data: () => ({
    mk: maskStore(),
    ps: pageStting(),
    tab: null,
    toggle: null,
    functionGroupToggle: null,
    page: 1,
    panel: 1,
    //table data
    items: [
      {
        id: 1,
        imageUrl: "",
        title: "我的領物單",
      },
      {
        id: 2,
        imageUrl: "",
        title: "我的派車單單",
      },
      {
        id: 3,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Yahoo%21_%282019%29.svg/800px-Yahoo%21_%282019%29.svg.png?20190923130707",
        title: "",
      },

      // 添加更多项目
    ],
    //table serve
  }),
  created() {
    ps.setTopNavPageTiltle("單一簽入系統暨會內入口網");
  },
  mounted() {
    this.handleIndexBg();
  },
  methods: {
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    open() {
      this.panel = 1;
    },
    handleIndexBg() {
      document.querySelector(".content").classList.add("mpImg");
    },
  },
  components: {},
};
</script>

<template>
  <div class="page mpPage">
    <h2 class="title">系統首頁</h2>
    <!-- <div class="d-flex pageLinkBtn">
      <v-card>
        <v-tabs show-arrows>
          <v-tab :ripple="false" key="1案件類別管理" value="1案件類別管理">
            帳號管理
          </v-tab>
          <v-tab :ripple="false" key="2案件管理" value="2案件管理">
            部門管理
          </v-tab>
          <v-tab :ripple="false" key="3案件填報" value="3案件填報">
            專案群組管理
          </v-tab>
          <v-tab :ripple="false" key="3案件填報" value="3案件填報">
            角色級職管理
          </v-tab>
          <v-tab :ripple="false" v-for="i in 12" :key="i" :value="'tab-' + i">
            案件管理{{ i }}
          </v-tab>
        </v-tabs>
      </v-card>
    </div> -->
    <div class="pageContent">
      <!-- <h3>交辦案件管理－交辦清單</h3> -->
      <v-card class="scrollContent">
        <div class="">
          <!-- 常用功能 start -->
          <v-row>
            <v-col>
              <v-card class="commonToolCard d-flex">
                <h3 class="title">
                  <span class="icon"></span>
                  常用功能
                </h3>
                <v-list class="d-flex">
                  <v-list-item v-for="item in items" :key="item.id">
                    <a href="#">
                      <v-img
                        v-if="item.imageUrl != ''"
                        :min-width="60"
                        :max-height="40"
                        cover
                        aspect-ratio="16/9"
                        :src="item.imageUrl"
                      ></v-img>
                      <p v-if="item.title != ''" href="#">{{ item.title }}</p>
                    </a>
                    <!-- 列表项的文本内容 -->
                  </v-list-item>
                </v-list>
                <v-btn class="moreBtn ml-auto" variant="text">
                  <span class="pb-1">more</span>
                  <span class="material-icons-round icon"> fast_forward </span>
                </v-btn>
                <!-- <v-btn variant="text" append-icon="mdi-plus-circle"
                  >新增
                </v-btn> -->
              </v-card>
            </v-col>
          </v-row>
          <!-- 常用功能 end -->
          <!-- 每日族語 start -->
          <v-row>
            <v-col>
              <v-card class="languageCard">
                <h3 class="title">
                  <span class="icon"></span>
                  每日族語
                </h3>
                <v-list class="d-flex">
                  <v-list-item>
                    <v-list-item-content>
                      <!-- 列表项的文本内容 -->
                      <v-list-item-title
                        >Ikor no pafilongan,o mamianip to ko
                        malingday.</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >年假過後，農人準備插秧了。</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-chip variant="elevated"> 阿美族 </v-chip>
              </v-card>
            </v-col>
          </v-row>
          <!-- 每日族語 end -->
          <!-- 經費填報系統 start -->
          <v-row>
            <v-col v-for="item in 3" :key="item">
              <v-card class="systemCard">
                <h3 class="title">
                  <span class="icon"></span>
                  經費結報系統
                </h3>
                <v-list>
                  <v-list-item v-for="i in 3" :key="i">
                    <v-list-item-content>
                      <!-- 列表项的文本内容 -->
                      <v-list-item-title class="d-flex justify-space-between">
                        <p>代辦代辦代辦</p>
                        <span>15</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
          <!-- 經費填報系統 end-->
          <!-- 案件填報 start -->
          <v-row>
            <v-col cols="12">
              <v-card class="systemCard">
                <h3 class="title">
                  <span class="icon"></span>
                  案件填報
                </h3>
                <v-list class="d-flex">
                  <v-list-item v-for="i in 3" :key="i">
                    <v-list-item-content>
                      <!-- 列表项的文本内容 -->
                      <v-list-item-title class="d-flex justify-space-between">
                        <p>代辦代辦代辦</p>
                        <span>15</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
          <!-- 案件填報 end -->
          <!-- 線上申請 start -->
          <v-row>
            <v-col cols="12">
              <v-card class="systemCard">
                <h3 class="title">
                  <span class="icon"></span>
                  線上申請
                </h3>
                <v-list class="d-flex">
                  <v-list-item v-for="i in 3" :key="i">
                    <v-list-item-content>
                      <!-- 列表项的文本内容 -->
                      <v-list-item-title class="d-flex justify-space-between">
                        <p>代辦代辦代辦</p>
                        <span>15</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
          <!-- 線上申請 end -->

          <!-- 會內網站連結 start -->
          <v-row>
            <v-col cols="12">
              <v-card class="linkCard d-flex">
                <h3 class="title">
                  <span class="icon"></span>
                  會內網站連結
                </h3>
                <v-list class="d-flex">
                  <v-list-item v-for="i in 3" :key="i">
                    <!-- 列表项的文本内容 -->
                    <v-list-item-title class="d-flex justify-space-between">
                      <a href="javascript:;">
                        <v-btn class="linkBtn"> 原住民人口資料庫 </v-btn>
                      </a>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-btn class="moreBtn ml-auto" variant="text">
                  <span class="pb-1">more</span>
                  <span class="material-icons-round icon"> fast_forward </span>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
          <!-- 會內網站連結 end -->
        </div>
      </v-card>
    </div>
  </div>
</template>
