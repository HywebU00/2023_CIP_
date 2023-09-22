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
                      @click.stop="this.panel = 1"
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
            <v-row class="d-flex justify-between">
              <v-col>
                <div class="btnGroup mb-2">
                  <v-btn color="export" elevation="0">匯出報表</v-btn>
                  <v-btn color="import" elevation="0">匯入報表</v-btn>
                  <v-btn color="cancel" elevation="0">刪除</v-btn>
                  <v-btn color="submit" elevation="0">新增</v-btn>
                </div>
              </v-col>
              <v-col class="d-flex justify-end pr-0">
                <div class="filterList">
                  <v-row class="d-flex">
                    <v-col>
                      <div class="selectItem">
                        <v-img
                          class="iconImg"
                          src="~@/assets/icon/filter_01.svg"
                        >
                        </v-img>
                        <v-select
                          variant="solo"
                          placeholder="排序方式"
                          single-line
                          hide-details
                          density="compact"
                          :items="['搜尋條件1', '搜尋條件2', '搜尋條件3']"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col class="pl-0">
                      <v-btn-toggle
                        v-model="functionGroupToggle"
                        color="primary"
                        mandatory
                      >
                        <v-btn elevation="0" @click="listStyle = false">
                          <template v-if="functionGroupToggle === 0">
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_white_02.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                          <template v-else>
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_02.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                        </v-btn>
                        <v-btn elevation="0" @click="listStyle = true">
                          <template v-if="functionGroupToggle === 1">
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_white_03.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                          <template v-else>
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_03.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                        </v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
            <!-- <v-row>
              <v-col class="d-flex justify-end pr-0">
                <div class="filterList">
                  <v-row class="d-flex">
                    <v-col>
                      <div class="selectItem">
                        <v-img
                          class="iconImg"
                          src="~@/assets/icon/filter_01.svg"
                        >
                        </v-img>
                        <v-select
                          variant="solo"
                          placeholder="排序方式"
                          single-line
                          hide-details
                          density="compact"
                          :items="['搜尋條件1', '搜尋條件2', '搜尋條件3']"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col class="pl-0">
                      <v-btn-toggle
                        v-model="functionGroupToggle"
                        color="primary"
                        mandatory
                      >
                        <v-btn elevation="0" @click="listStyle = false">
                          <template v-if="functionGroupToggle === 0">
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_white_02.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                          <template v-else>
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_02.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                        </v-btn>
                        <v-btn elevation="0" @click="listStyle = true">
                          <template v-if="functionGroupToggle === 1">
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_white_03.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                          <template v-else>
                            <span>
                              <v-img
                                class="iconImg"
                                src="~@/assets/icon/filter_03.svg"
                              >
                              </v-img>
                            </span>
                          </template>
                        </v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                </div>
                </v-col>
            </v-row> -->
            <!-- <v-row>
              <v-col>
                <div class="btnGroup left mb-2">
                  <v-btn color="export" elevation="0">匯出報表</v-btn>
                  <v-btn color="import" elevation="0">匯入報表</v-btn>
                  <v-btn color="cancel" elevation="0">刪除</v-btn>
                  <v-btn color="submit" elevation="0">新增</v-btn>
                </div></v-col
              >
            </v-row> -->
            <!-- 排序方式 end-->
            <v-row>
              <v-dialog v-model="dialog" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-col
                    class="px-1"
                    v-for="item in 34"
                    :key="item"
                    cols="3"
                    sm="3"
                    lg="2"
                  >
                    <v-card class="photoCard">
                      <div class="cardContainer">
                        <v-checkbox
                          v-ripple.stop
                          label=""
                          class="checkbox"
                          v-model="selected"
                          :value="item"
                        ></v-checkbox>
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          cover
                        ></v-img>
                        <div class="info" v-bind="props">
                          <v-card-item>
                            <v-card-title>排灣族聚餐</v-card-title>
                            <v-card-subtitle>莊大安/事務科</v-card-subtitle>
                          </v-card-item>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                </template>
                <!-- 輸入資訊視窗 start -->
                <v-card>
                  <v-card-title>
                    <span class="text-h5 text-primary">照片編輯</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container class="formContainer">
                      <v-form>
                        <v-row class="formGrid">
                          <v-col cols="12">
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="type"
                                >生日
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                              <v-text-field
                                variant="solo"
                                single-line
                                hide-details
                                type="date"
                                density="compact"
                              ></v-text-field>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="type"
                                >族名
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                              <v-text-field
                                variant="solo"
                                single-line
                                hide-details
                                density="compact"
                              ></v-text-field>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="type"
                                >族別
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                              <v-autocomplete
                                id="type"
                                color="secondary"
                                variant="solo"
                                single-line
                                hide-details
                                density="compact"
                                :items="['布農族', '阿美族', '卑南族']"
                              ></v-autocomplete>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="mail"
                                >Email
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                              <v-text-field
                                variant="solo"
                                single-line
                                hide-details
                                type="email"
                                id="mail"
                                density="compact"
                              ></v-text-field>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="type"
                                >行動電話
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                              <v-text-field
                                variant="solo"
                                single-line
                                hide-details
                                density="compact"
                                type="phone"
                              ></v-text-field>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="list"
                                >多選選單
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                              <div class="checkGrp" id="list">
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
                              </div>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="">交辦事項 </label>
                              <v-text-field
                                variant="solo"
                                single-line
                                hide-details
                                density="compact"
                              ></v-text-field>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="">文字輸入 </label>
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
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="">單選 </label>
                              <v-radio-group
                                inline
                                hide-details
                                color="secondary"
                              >
                                <v-radio label="是" value="true"></v-radio>
                                <v-radio label="否" value="false"></v-radio>
                              </v-radio-group>
                            </div>
                            <!-- 三欄樣式 start -->
                            <div class="d-flex formGrp">
                              <v-row>
                                <v-col>
                                  <div class="d-flex formGrp">
                                    <label class="formTitle" for="">住址</label>
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
                                          :items="[
                                            '台北市',
                                            '新北市',
                                            '基隆市',
                                          ]"
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
                                          :items="[
                                            '台北市',
                                            '新北市',
                                            '基隆市',
                                          ]"
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
                                  </div>
                                </v-col>
                              </v-row>
                            </div>
                            <!-- 三欄樣式 end -->
                            <!-- 二欄樣式 end -->
                            <div class="d-flex formGrp">
                              <v-row>
                                <v-col>
                                  <div class="d-flex formGrp">
                                    <label class="formTitle" for=""
                                      >兩欄欄位</label
                                    >
                                    <v-row>
                                      <v-col cols="6" md="3">
                                        <v-autocomplete
                                          id="type"
                                          variant="solo"
                                          single-line
                                          color="secondary"
                                          density="compact"
                                          placeholder="輸入地址"
                                          hide-details
                                          :items="[
                                            '台北市',
                                            '台北市',
                                            '台北市',
                                          ]"
                                        ></v-autocomplete>
                                      </v-col>
                                      <v-col cols="6" md="3">
                                        <v-autocomplete
                                          id="type"
                                          variant="solo"
                                          single-line
                                          density="compact"
                                          color="secondary"
                                          placeholder="輸入地址"
                                          hide-details
                                          :items="[
                                            '台北市',
                                            '台北市',
                                            '台北市',
                                          ]"
                                        ></v-autocomplete>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </v-col>
                              </v-row>
                            </div>
                            <div class="d-flex formGrp">
                              <label class="formTitle" for="">日期</label>
                              <v-row>
                                <v-col cols="12" md="6" class="d-flex">
                                  <v-text-field
                                    variant="solo"
                                    single-line
                                    hide-details
                                    type="date"
                                    density="compact"
                                  ></v-text-field>
                                  <span class="tilde">~</span>
                                  <v-text-field
                                    variant="solo"
                                    single-line
                                    hide-details
                                    type="date"
                                    density="compact"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </div>
                            <!-- 二欄樣式 end -->
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
                  </v-card-text>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <div class="btnGroup center">
                          <v-btn
                            elevation="0"
                            color="submit"
                            @click="dialog = false"
                            rounded="lg"
                            size="x-large"
                            >送出</v-btn
                          >
                          <v-btn
                            elevation="0"
                            rounded="lg"
                            size="x-large"
                            color="cancel"
                            @click="dialog = false"
                            >取消</v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <!-- 輸入資訊視窗 end -->
              </v-dialog>
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
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    // panel: [],
    //  dialog data
    dialog: false,
    listStyle: false,
    //checkbox
    selected: ["John"],
  }),
  created() {
    ps.setTopNavPageTiltle("帳號管理");
  },
  methods: {
    open() {
      this.panel = 1;
    },
  },
};
</script>
