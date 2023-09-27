<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<template>
  <v-row class="finder">
    <v-dialog
      class="peopleFinderCard"
      v-model="dialog"
      scrollable
      max-width="1200"
      transition="dialog-bottom-transition"
    >
      <!-- Demo 專用用按鈕 start -->
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>
      <!-- Demo 專用用按鈕 end -->
      <!-- <v-card> ddd </v-card> -->
      <v-card>
        <v-card-title>
          <span class="text-h5">選擇知識樹擁有者</span>
        </v-card-title>
        <v-card-text>
          <v-container class="formContainer">
            <v-form class="formGrid">
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="type">人員/單位 </label>
                </v-col>
                <v-col>
                  <v-row class="d-flex align-center">
                    <v-col cols="10" md="10" lg="11"
                      ><v-text-field
                        variant="solo"
                        single-line
                        hide-details
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2" md="2" lg="1">
                      <v-btn>查詢</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="">單位/專案群組 </label>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col cols="12" md="3">
                      <v-radio-group inline hide-details color="secondary">
                        <v-radio label="單位" value="true"></v-radio>
                        <v-radio label="專案群組" value="false"></v-radio>
                      </v-radio-group>
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
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="type">常用流程 </label>
                </v-col>
                <v-col>
                  <v-autocomplete
                    id="type"
                    color="secondary"
                    variant="solo"
                    single-line
                    hide-details
                    density="compact"
                    :items="['流程一', '流程二', '流程三']"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
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
              <!-- 左右兩欄 start -->
              <v-row class="d-flex formGrp formGrp_2">
                <v-col class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-3"
                      >應領數</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list multipleContent" cols="12">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="2" class="btnList">
                  <div class="d-flex align-center justify flex-column">
                    <v-btn
                      class="mb-2"
                      icon="mdi-chevron-right"
                      color="import"
                      size="small"
                    ></v-btn>
                    <v-btn
                      class="mb-2"
                      color="export"
                      icon="mdi-chevron-left"
                      size="small"
                    ></v-btn>
                    <v-btn
                      class="mb-2"
                      icon="mdi-chevron-up"
                      color="import"
                      size="small"
                    ></v-btn>
                    <v-btn
                      color="export"
                      class="mb-2"
                      icon="mdi-chevron-down"
                      size="small"
                    ></v-btn>
                  </div>
                </v-col>
                <v-col class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-3"
                      >扣領數</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list" cols="12">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- 左右兩欄 end -->
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="type">資訊單位/審核人員 </label>
                </v-col>
                <v-col>
                  <v-radio-group inline hide-details color="secondary">
                    <v-radio label="許小傑" value="true"></v-radio>
                    <v-radio label="邱大發" value="false"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-3"
                      >單位決行人員</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list multipleContent" cols="12">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-container fluid>
            <!-- <v-row>
              <v-col cols="12" class="d-flex">
                <v-text-field
                  variant="outlined"
                  label="輸入查詢姓名"
                ></v-text-field>
                <v-btn
                  type="button"
                  text="查詢"
                  size="default"
                  location="start"
                />
              </v-col>
              <v-col cols="3">
                <v-btn
                  type="button"
                  text="查詢"
                  size="default"
                  location="start"
                />
              </v-col>
            </v-row> -->
            <!-- <v-row>
              <v-col cols="2" class="justify-center">
                <v-radio-group inline>
                  <v-radio label="單位" value="dept"></v-radio>
                  <v-radio label="專案群組" value="group"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="10">
                <v-select
                  variant="outlined"
                  :items="['測試', '測試2']"
                  item-title=""
                  item-value=""
                  label="請選擇"
                >
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <div class="list">
                  <div class="title">所有人員列表:</div>
                  <div class="list">
                    <select MULTIPLE size="10">
                      <option
                        v-for="(item, index) in 6"
                        :key="index"
                        :value="測試測試"
                      >
                        測試測試
                      </option>
                    </select>
                  </div>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="d-flex align-center flex-column pa-6">
                  <v-btn icon="mdi-arrow-right-bold" size="small"></v-btn>
                  <v-btn icon="mdi-arrow-left-bold" size="small"></v-btn>
                </div>
              </v-col>
              <v-col cols="5">
                <div class="list">
                  <div class="title">已選人員列表:</div>
                  <div class="list">
                    <select MULTIPLE size="10">
                      <option
                        v-for="(item, index) in 10"
                        :key="index"
                        :value="測試測試"
                      >
                        測試測試
                      </option>
                    </select>
                  </div>
                </div>
              </v-col>
            </v-row> -->
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="submit"
            elevation="0"
            color="submit"
            variant="flat"
            rounded="lg"
            size="large"
            @click="dialog = !dialog"
          >
            送出
          </v-btn>
          <v-btn
            color="cancel"
            variant="flat"
            rounded="lg"
            size="large"
            class="cancel"
            @click="dialog = !dialog"
          >
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
