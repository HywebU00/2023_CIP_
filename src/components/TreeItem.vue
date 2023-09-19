<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        :key="model"
        class="item"
        v-for="model in model.children"
        :model="model"
      >
      </tree-item>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    model: Object,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.model.children = [];
        this.addChild();
        this.isOpen = true;
      }
    },
    // addChild() {
    //   this.model.children.push({
    //     name: "new stuff",
    //   });
    // },
  },
};
</script>

<style></style>
