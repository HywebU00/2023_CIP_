<template>
  <div class="page">
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
      <h3>交辦案件管理－交辦清單</h3>

      <!-- <div class="functionGrp">
        <v-container>
          <v-row>
            <v-col class="searchGrp">
              <v-form class="searchList">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-title
                      hide-actions
                      @click.stop="panelsHandle"
                    >
                      <v-row>
                        <v-col cols="12" md="">
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">年度 :</label>
                            <v-autocomplete
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                              :items="['1990', '1991', '1992']"
                            ></v-autocomplete>
                            <span class="tilde">~</span>
                            <v-autocomplete
                              variant="solo"
                              density="compact"
                              single-line
                              hide-details
                              :items="['1990', '1991', '1992']"
                            ></v-autocomplete>
                          </div>
                        </v-col>
                        <v-col cols="12" md="">
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">控管編號 :</label>
                            <v-text-field
                              variant="solo"
                              density="compact"
                              single-line
                              hide-details
                            ></v-text-field>
                            <span class="tilde">~</span>
                            <v-text-field
                              variant="solo"
                              single-line
                              density="compact"
                              hide-details
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col
                          cols="12"
                          md="3"
                          class="d-flex justify-md-end justify-center align-center btnList"
                        >
                          <v-btn class="submit">查詢</v-btn>
                          <v-btn
                            class="searchMoreBtn"
                            @click.stop="this.panel = 0"
                            >進階搜尋</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-row>
                        <v-col cols="12" md="6" class="py-0 py-md-3">
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">類別 :</label>
                            <v-autocomplete
                              variant="solo"
                              single-line
                              density="compact"
                              hide-details
                              :items="['主管會報', '主管會報', '主管會報']"
                            ></v-autocomplete>
                          </div>
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">案件狀態 :</label>
                            <v-checkbox
                              density="compact"
                              label="繼續追蹤"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              density="compact"
                              label="建議解除列管"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              density="compact"
                              label="解除列管"
                              hide-details
                            ></v-checkbox>
                          </div>
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">交辦事項 :</label>
                            <v-text-field
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" md="6" class="py-0 py-md-3">
                          <div class="d-flex formGrp">
                            <label class="formTitle" for=""> 控管編號 :</label>
                            <v-text-field
                              variant="solo"
                              density="compact"
                              single-line
                              hide-details
                            ></v-text-field>
                            <span class="tilde">~</span>
                            <v-text-field
                              variant="solo"
                              single-line
                              density="compact"
                              hide-details
                            ></v-text-field>
                          </div>
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">辦理單位 :</label>
                            <v-text-field
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                            ></v-text-field>
                          </div>
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">管制代號 :</label>
                            <v-text-field
                              variant="solo"
                              single-line
                              density="compact"
                              hide-details
                            ></v-text-field>
                          </div>
                          <div class="d-flex formGrp">
                            <label class="formTitle" for="">辦理情形 :</label>
                            <v-text-field
                              variant="solo"
                              single-line
                              density="compact"
                              hide-details
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <div class="d-flex btnList justify-center">
                            <v-btn class="submit">查詢</v-btn>
                            <v-btn class="searchMoreBtn">進階搜尋</v-btn>
                          </div>
                          <div class="d-flex justify-center">
                            <v-btn
                              class="closeSearchMoreBtn"
                              elevation="0"
                              @click="open"
                            >
                              <span class="material-icons-round">
                                expand_less
                              </span>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </div> -->
      <v-card class="scrollContent">
        <div class="">
          <v-row>
            <v-col cols="12">
              <v-card class="commonToolCard">
                <v-container>
                  <v-row>
                    <v-col class="d-flex">
                      <h3>常用功能</h3>
                      <v-list class="d-flex">
                        <v-list-item v-for="item in items" :key="item.id">
                          <v-list-item-content class="d-flex">
                            <v-img
                              :min-width="60"
                              :max-height="40"
                              cover
                              aspect-ratio="16/9"
                              :src="item.imageUrl"
                            ></v-img>
                            <!-- 列表项的文本内容 -->
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                      <v-btn variant="text" append-icon="mdi-plus-circle"
                        >新增
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card></v-col
            >
            <v-col cols="12">
              <v-card class="languageCard">
                <v-container>
                  <v-row>
                    <v-col class="d-flex">
                      <h3>每日族語</h3>
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
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  <v-card class="languageCard">
                    <v-container>
                      <v-row>
                        <v-col>
                          <h3>每日族語</h3>
                          <v-list>
                            <v-list-item>
                              <v-list-item-content>
                                <!-- 列表项的文本内容 -->
                                <v-list-item-title
                                  class="d-flex justify-space-between"
                                >
                                  <p>代辦</p>
                                  <span>15</span>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col>1</v-col>
                <v-col>1</v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Pagination start -->
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="5"
              rounded="circle"
              color="primary"
            ></v-pagination>
          </div>
          <!-- Pagination end -->
        </div>
      </v-card>
    </div>
  </div>
</template>

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
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Item 1",
        subtitle: "Subtitle for Item 1",
      },
      {
        id: 2,
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "Item 2",
        subtitle: "Subtitle for Item 2",
      },
      // 添加更多项目
    ],
    //table serve
  }),
  created() {
    ps.setTopNavPageTiltle("系統首頁");
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
  },
  components: {},
};
</script>
