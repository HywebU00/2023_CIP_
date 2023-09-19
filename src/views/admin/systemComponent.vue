<template>
  <div class="page">
    <h2 class="title">案件管理</h2>
    <div class="d-flex pageLinkBtn">
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
    </div>
    <div class="pageContent">
      <h3>交辦案件管理－交辦清單</h3>
      <div class="functionGrp">
        <v-container>
          <v-row>
            <!--v-model="expand" -->
            <v-col class="searchGrp">
              <v-form class="searchList">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-title hide-actions="true">
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
          <!-- tabsContent start -->
          <v-tabs v-model="tab" color="light" show-arrows>
            <v-tab value="one">基本資料</v-tab>
            <v-tab value="two">中央輪值</v-tab>
            <v-tab value="three">本會輪值</v-tab>
            <v-tab value="one">基本資料</v-tab>
            <v-tab value="two">中央輪值</v-tab>
            <v-tab value="three">本會輪值</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <div class="btnGroup left mb-2">
                  <v-btn color="export" elevation="0">匯出報表</v-btn>
                  <v-btn color="import" elevation="0">匯入報表</v-btn>
                  <!-- <v-btn elevation="0">修改狀態</v-btn> -->
                  <!-- <v-btn elevation="0">修改填報期限</v-btn> -->
                  <v-btn color="cancel" elevation="0">刪除</v-btn>
                  <v-btn color="submit" elevation="0">新增</v-btn>
                </div>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">帳號</th>
                      <th class="text-left">姓名</th>
                      <th class="text-left">單位</th>
                      <th class="text-left">職稱</th>
                      <th class="text-left">申請時密碼</th>
                      <th class="text-left">狀態</th>
                      <th class="text-left">動作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in data" :key="item.name">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.class }}</td>
                      <td>{{ item.title }}</td>
                      <td>{{ item.password }}</td>
                      <td>{{ item.status }}</td>
                      <td>
                        <div class="btnGroup">
                          <v-btn color="cancel" elevation="0" size="small"
                            >刪除</v-btn
                          >
                          <v-btn color="submit" elevation="0" size="small"
                            >新增</v-btn
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="two">
                <h4>v-data-table-server</h4>
                <DataTable />
              </v-window-item>
              <v-window-item value="three"> Three </v-window-item>
              <v-window-item value="three"> 4 </v-window-item>
              <v-window-item value="three"> 5 </v-window-item>
            </v-window>
          </v-card-text>
          <!-- tabsContent end -->
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
import DataTable from "@/components/dataTableComponent.vue";
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
  components: {
    DataTable,
  },
};
</script>
