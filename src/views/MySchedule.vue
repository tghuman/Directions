<template>
  <div>
    <div style="padding-left: 2vw;">
      <ol style="margin-block-start: 0em;">
        <div v-for="(room, index) in rooms" :key="index">
          <li style="padding: 0.5vh;">
            {{ room.value }}
          </li>
          <CustomButton
            v-if="
              index != rooms.length - 1 &&
                room.value.trim() !== '' &&
                rooms[index + 1].value.trim() !== ''
            "
            style="font-size: .7em; margin-left: -1.5em; margin-top: .1em; margin-bottom: .3em; padding-left: 2vw;"
            @click="go(index)"
          >
            ↓ Go from {{ rooms[index].value }} to {{ rooms[index + 1].value }} ↓
          </CustomButton>
        </div>
      </ol>
      <EditButton @click="edit()">
        Edit
      </EditButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomButton from "@/components/buttons/CustomButton.vue";
import EditButton from "@/components/buttons/EditButton.vue";

export default Vue.extend({
  components: { CustomButton, EditButton },
  data() {
    const stored = localStorage.getItem("myschedule");
    return {
      rooms: stored == null ? null : JSON.parse(stored).rooms,
    };
  },
  created() {
    if (localStorage.getItem("myschedule") == null) {
      this.$router.replace("/myschedule/edit?new=true");
    }
  },
  methods: {
    go(index: number) {
      this.$router.push({
        path: "/directions",
        query: {
          fromRoom: this.rooms[index].value,
          toRoom: this.rooms[index + 1].value,
          scheduleInd: index.toString(),
        },
      });
    },
    edit() {
      this.$router.push({
        path: "/myschedule/edit",
      });
    },
  },
  metaInfo: {
    title: "My Schedule",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Input your schedule into Walnut.Direct so we can give you customized directions between your classes in Walnut Hills High School.",
      },
    ],
  },
});
</script>

<style scoped>
li {
  color: var(--less-important-text-color);
}
</style>
