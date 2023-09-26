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
      class="dialogCard"
      v-model="dialog"
      scrollable
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
            <v-form>
              <!-- <div class="functionGrp">
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
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    class="d-flex justify-md-end justify-center align-center btnList"
                  >
                    <v-btn>查詢</v-btn>
                  </v-col>
                </v-row>
              </div> -->
              <v-row class="formGrid">
                <v-col cols="12">
                  <div class="d-flex formGrp">
                    <label class="formTitle" for="type">輸入查詢姓名</label>
                    <v-text-field
                      variant="solo"
                      single-line
                      hide-details
                      density="compact"
                    ></v-text-field>
                    <v-btn color="primary" class="ml-3"> 送出 </v-btn>
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
                    <v-radio-group inline hide-details color="secondary">
                      <v-radio label="是" value="true"></v-radio>
                      <v-radio label="否" value="false"></v-radio>
                    </v-radio-group>
                  </div>

                  <!-- 左右欄位 start -->
                  <div class="d-flex formGrp formGrp_2 mt-6">
                    <v-row>
                      <v-col cols="12" md="6">
                        <div class="formGrp bg-thead formGrpTitle">應領數</div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">欄位一</label>
                          <v-text-field
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                          ></v-text-field>
                        </div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">欄位二</label>
                          <v-text-field
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                          ></v-text-field>
                        </div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">欄位三</label>
                          <v-text-field
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                          ></v-text-field>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <div class="formGrp bg-thead formGrpTitle">應扣數</div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">欄位一</label>
                          <v-text-field
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                          ></v-text-field>
                        </div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">欄位二</label>
                          <v-text-field
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                          ></v-text-field>
                        </div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">欄位三</label>
                          <v-text-field
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                          ></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  <!-- 左右欄位 end -->
                </v-col>
              </v-row>
            </v-form>
          </v-container>

          <v-container fluid>
            <v-row>
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
              <!-- <v-col cols="3">
                <v-btn
                  type="button"
                  text="查詢"
                  size="default"
                  location="start"
                />
              </v-col> -->
            </v-row>
            <v-row>
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
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="submit" variant="flat" @click="dialog = !dialog">
            送出
          </v-btn>
          <v-btn color="cancel" variant="flat" @click="dialog = !dialog">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
.list > select {
  min-height: 200px;
  width: 80%;
  border: 1px solid #cccccc;
}
</style>
