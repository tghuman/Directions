<template>
  <BasicButton
    class="custom"
    :type="typeSubmit ? 'submit' : 'button'"
    @click="$emit('click')"
  >
    <slot />
  </BasicButton>
</template>

<script lang="ts">
import Vue from "vue";
import BasicButton from "./BasicButton.vue";

export default Vue.extend({
  components: { BasicButton },
  props: {
    buttonStyle: { type: String, default: "" },
    typeSubmit: { type: Boolean, default: true },
  },
});
</script>

<style scoped>
.btn-hover-area >>> .active-button {
  color: var(--button-text-color);
  padding: 12px 40px;

  background-color: var(--button-color);
  border-radius: 100px;

  margin-top: 0;
  margin-bottom: 6px;
  box-shadow: 0px 6px var(--button-shade-color),
    0px 6px 0 6px var(--button-hold-color);
  /*** these 6px values need to be the same (see below with ***) */

  transition: var(--back-ease);
}

.btn-hover-area {
  display: inline-block;
  border-radius: 100px;
}

.btn-hover-area:hover >>> .active-button {
  margin-top: 6px;
  margin-bottom: 0px;
  box-shadow: 0px 0px var(--button-shade-color),
    0px 0px 0 6px var(--button-hold-color);
  /*** these 6px values need to be the same (see above with ***) */

  transition: var(--sine-ease);

  cursor: pointer;
}
</style>
