<template>
  <span class="btn-hover-area" @click.stop.prevent="$emit('click')">
    <button :type="type" class="active-button" :style="buttonStyle">
      <slot></slot>
    </button>
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    type: { type: String, default: "submit" },
    buttonStyle: { type: String, default: "" },
  },
});
</script>

<style scoped>
.active-button {
  border: none;
  font-size: 1em;
  display: inline-block;
  user-select: none;
}
</style>
