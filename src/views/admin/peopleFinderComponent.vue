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
                            <label class="formTitle" for=""
                              >多字多字多字查詢:</label
                            >
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
      </div>
      <v-card class="scrollContent">
        <div class="">
          <v-container>
            <PeopleFinder />
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
import PeopleFinder from "@/components/PeopleFinder.vue";
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
  components: {
    PeopleFinder,
  },
};
</script>
