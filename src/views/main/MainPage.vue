<script setup>

import { ref, reactive } from 'vue'

</script>

<template>
  <div class="about1" ref="pageTitle">
    <h1>個人首頁</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  created() {
   
  },
  mounted() {
    this.$refs.pageTitle.focus()
  },
  methods: {

  }
}
</script>
