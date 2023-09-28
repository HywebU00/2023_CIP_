<template>
  <div class="page">
    <h2 class="title">案件管理</h2>
    <div class="pageContent">
      <h3>線上相片管理</h3>
      <div class="functionGrp">
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
                              @click.stop
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
      </div>
      <v-card class="scrollContent">
        <div class="">
          <v-container>
            <!-- 排序方式 start -->
            <v-row class="">
              <!-- 搜尋列 start -->
              <v-col class="d-flex justify-end py-0">
                <div class="btnGroup left mb-2">
                  <v-btn color="export" elevation="0">匯出報表</v-btn>
                  <v-btn color="import" elevation="0">匯入報表</v-btn>
                  <v-btn color="cancel" elevation="0">刪除</v-btn>
                  <v-btn color="submit" elevation="0">新增</v-btn>
                </div>
              </v-col>
              <!-- 搜尋列 end -->
            </v-row>
            <!-- 排序方式 end-->
            <!-- 卡片樣式/有checkbox start-->
            <!-- persistent -->
            <v-row>
              <v-dialog
                class="dialogCard"
                v-model="dialog"
                scrollable
                max-width="1200"
              >
                <template v-slot:activator="{ props }">
                  <v-col
                    class="px-1"
                    v-for="item in 12"
                    :key="item"
                    cols="3"
                    sm="3"
                    lg="2"
                  >
                    <v-card class="photoCard">
                      <div class="cardContainer">
                        <div class="img">
                          <v-label :for="item.toString()"></v-label>
                          <v-checkbox
                            v-ripple.stop
                            class="checkbox"
                            color="light"
                            hide-details
                            v-model="selected"
                            :id="item.toString()"
                            :value="item"
                          ></v-checkbox>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                          ></v-img>
                        </div>
                        <div class="info" v-bind="props">
                          <v-card-item>
                            <v-card-title
                              >檔案名稱檔案名稱檔案名稱</v-card-title
                            >
                          </v-card-item>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                </template>
                <!-- 輸入資訊視窗 start -->
                <v-card class="">
                  <v-card-title>
                    <v-container>
                      <span class="text-primary">照片編輯</span>
                    </v-container>
                  </v-card-title>
                  <v-card-text>
                    <v-container class="formContainer">
                      <v-form class="formGrid">
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="type"
                              >族名
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col>
                            <v-text-field
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                            ></v-text-field
                          ></v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="type"
                              >族別
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col>
                            <v-autocomplete
                              id="type"
                              color="secondary"
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                              :items="['布農族', '阿美族', '卑南族']"
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="type"
                              >族別
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col>
                            <v-autocomplete
                              id="type"
                              color="secondary"
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                              :items="['布農族', '阿美族', '卑南族']"
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="mail"
                              >Email
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col>
                            <v-text-field
                              variant="solo"
                              single-line
                              hide-details
                              type="email"
                              id="mail"
                              density="compact"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="type"
                              >行動電話
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col>
                            <v-text-field
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                              type="phone"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="list"
                              >多選選單
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col class="checkGrp" id="list">
                            <v-checkbox
                              density="compact"
                              hide-details
                              label="中文"
                            ></v-checkbox>
                            <v-checkbox
                              density="compact"
                              hide-details
                              label="英文"
                            ></v-checkbox>
                            <v-checkbox
                              density="compact"
                              hide-details
                              label="日文"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="">交辦事項 </label>
                          </v-col>
                          <v-col>
                            <v-text-field
                              variant="solo"
                              single-line
                              hide-details
                              density="compact"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="">文字輸入 </label>
                          </v-col>
                          <v-col>
                            <v-textarea
                              placeholder="請輸入文字"
                              variant="solo"
                              hide-details
                              density="compact"
                              auto-grow
                              rows="6"
                              row-height="30"
                              shaped
                            ></v-textarea>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="">單選 </label>
                          </v-col>
                          <v-col>
                            <v-radio-group
                              inline
                              hide-details
                              color="secondary"
                            >
                              <v-radio label="是" value="true"></v-radio>
                              <v-radio label="否" value="false"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="">住址</label>
                          </v-col>
                          <v-col>
                            <v-row>
                              <v-col cols="6" md="3">
                                <v-autocomplete
                                  id="type"
                                  color="secondary"
                                  variant="solo"
                                  single-line
                                  density="compact"
                                  placeholder="輸入地址"
                                  hide-details
                                  :items="['台北市', '新北市', '基隆市']"
                                ></v-autocomplete>
                              </v-col>
                              <v-col cols="6" md="3">
                                <v-autocomplete
                                  id="type"
                                  variant="solo"
                                  single-line
                                  color="secondary"
                                  density="compact"
                                  placeholder="輸入地址"
                                  hide-details
                                  :items="['台北市', '新北市', '基隆市']"
                                ></v-autocomplete>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  variant="solo"
                                  single-line
                                  hide-details
                                  density="compact"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                        <v-row class="d-flex formGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <label for="">兩欄欄位</label>
                          </v-col>
                          <v-col>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-autocomplete
                                  id="type"
                                  color="secondary"
                                  variant="solo"
                                  single-line
                                  density="compact"
                                  placeholder="輸入地址"
                                  hide-details
                                  :items="['台北市', '新北市', '基隆市']"
                                ></v-autocomplete>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-autocomplete
                                  id="type"
                                  variant="solo"
                                  single-line
                                  color="secondary"
                                  density="compact"
                                  placeholder="輸入地址"
                                  hide-details
                                  :items="['台北市', '新北市', '基隆市']"
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-form>
                      <div class="infoGrid">
                        <v-row class="infoGrp">
                          <v-col cols="12" md="2" class="infoTitle formTitle">
                            <span class="">交辦事項</span>
                          </v-col>
                          <v-col>
                            <p class="infoText">
                              112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。
                            </p>
                          </v-col>
                        </v-row>
                        <v-row class="infoGrp">
                          <v-col
                            cols="12"
                            md="2"
                            class="d-flex formTitle infoTitle"
                          >
                            <span class="">承辦人</span>
                          </v-col>
                          <v-col> <p class="infoText">周小瑜</p></v-col>
                        </v-row>
                        <v-row class="infoGrp">
                          <v-col cols="12" md="2" class="formTitle infoTitle">
                            <span class="">填報日期</span>
                          </v-col>
                          <v-col>
                            <p class="infoText">112/03/11</p>
                          </v-col>
                        </v-row>
                      </div>
                    </v-container>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn
                      class="submit"
                      elevation="0"
                      variant="flat"
                      @click="dialog = false"
                      rounded="lg"
                      size="large"
                      >送出</v-btn
                    >
                    <v-btn
                      elevation="0"
                      rounded="lg"
                      variant="flat"
                      size="large"
                      color="cancel"
                      class="cancel"
                      @click="dialog = false"
                      >取消</v-btn
                    >
                  </v-card-actions>
                </v-card>
                <!-- 輸入資訊視窗 end -->
              </v-dialog>
            </v-row>
            <!-- 卡片樣式/有checkbox end-->
            <!-- 卡片樣式 start-->
            <v-row>
              <v-col
                class="px-1"
                v-for="item in 5"
                :key="item"
                cols="3"
                sm="3"
                lg="2"
              >
                <v-card class="photoCard">
                  <div class="cardContainer">
                    <div class="img">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover
                      ></v-img>
                    </div>
                    <div class="info">
                      <v-card-item>
                        <v-card-title>OOO照片說明</v-card-title>
                      </v-card-item>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <!-- 卡片樣式 end-->
            <!-- slider start -->
            <v-row>
              <v-col class="justify-center px-2 px-sm-0">
                <carouselComponent />
              </v-col>
            </v-row>
            <!-- slider end -->
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
import carouselComponent from "@/components/carouselComponent.vue";
const ps = pageStting();
export default {
  data: () => ({
    mk: maskStore(),
    ps: pageStting(),
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,

    //  dialog data
    dialog: false,
    listStyle: false,
    //checkbox
    selected: [],
  }),
  created() {
    ps.setTopNavPageTiltle("帳號管理");
  },
  methods: {
    panelsHandle() {
      if (this.panel === 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    open() {
      this.panel = 1;
    },
  },
  components: {
    carouselComponent,
  },
};
</script>
