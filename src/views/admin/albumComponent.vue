<template>
  <div class="page">
    <h2 class="title">案件管理</h2>
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
      <h3>線上相簿管理</h3>
      <div class="functionGrp">
        <v-container>
          <v-row>
            <!--v-model="expand" -->
            <v-col class="searchGrp">
              <v-form class="searchList">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-title hide-actions>
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
                          <v-btn class="searchMoreBtn" @click="expand"
                            >進階搜尋</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-row>
                        <v-col cols="12" md="6">
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
                        <v-col cols="12" md="6">
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
                            <v-btn class="searchMoreBtn" @click="expand"
                              >進階搜尋</v-btn
                            >
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
      </div>
      <v-card class="scrollContent">
        <div class="">
          <v-container>
            <!-- 排序方式 start -->
            <v-row>
              <v-col class="d-flex justify-end">
                <div class="filterList">
                  <v-row class="">
                    <v-col>
                      <v-select
                        variant="solo"
                        placeholder="排序方式"
                        single-line
                        hide-details
                        prepend-icon="mdi-filter"
                        density="compact"
                        :items="['搜尋條件1', '搜尋條件2', '搜尋條件3']"
                      ></v-select>
                    </v-col>
                    <v-col>
                      <v-btn-toggle
                        v-model="functionGroupToggle"
                        color="primary"
                      >
                        <v-btn elevation="0">
                          <span>
                            <v-img
                              width="15"
                              aspect-ratio="1/1"
                              cover
                              src="~@/assets/icon/icon_01.svg"
                            >
                            </v-img>
                          </span>
                        </v-btn>
                        <v-btn elevation="0">
                          <span>
                            <v-img
                              width="15"
                              aspect-ratio="1/1"
                              cover
                              src="~@/assets/icon/icon_01.svg"
                            >
                            </v-img>
                          </span>
                        </v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
            <!-- 排序方式 end-->
            <v-row :class="['albumCardList', { list: listStyle }]">
              <v-col
                v-for="item in 10"
                :key="item"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card class="albumCard">
                  <div class="cardContainer">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      cover
                    ></v-img>
                    <div class="info">
                      <v-card-item>
                        <v-card-title>排灣族聚餐</v-card-title>
                        <v-card-subtitle>莊大安/事務科</v-card-subtitle>
                        <p>正副首長主持或參加重要會議及每月大事紀</p>
                      </v-card-item>
                      <v-card-text>
                        <v-row class="iconList">
                          <v-col>
                            <v-icon icon="mdi:mdi-clock" />
                            <span>112/03/27</span></v-col
                          >
                          <v-col class="d-flex justify-end">
                            <v-icon icon="mdi:mdi-eye" />
                            <span>112</span></v-col
                          >
                        </v-row>
                      </v-card-text>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
    panel: [],
    //table data
    data: [
      {
        id: "varvar",
        name: "陳肉肉",
        class: "事務科",
        title: "事務員",
        password: "2wsx@@(OL>",
        status: "待審",
      },
      {
        id: "varvar",
        name: "陳肉肉",
        class: "事務科",
        title: "事務員",
        password: "2wsx@@(OL>",
        status: "待審",
      },
    ],
    listStyle: true,
    //table serve
  }),
  created() {
    ps.setTopNavPageTiltle("帳號管理");
  },
  methods: {
    open() {
      this.panel = ["expand"];
    },
  },
};
</script>
