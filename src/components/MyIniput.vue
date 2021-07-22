<template>
  <v-text-field
    label="Plans send your messaeg"
    value=""
    v-model="value"
    single-line
    full-width
    hide-details
    prepend-icon="mdi-send"
    @click:prepend="prependIconCallback"
    mouseup
    @input="writing"
  >
  </v-text-field>

  <!-- <IconSend /> -->
</template>

<script>
import IconSend from "./IconSend";

export default {
  name: "MyInput",
  components: { IconSend },
  props: ["messages", "write"],
  data() {
    return { value: "" };
  },
  methods: {
    prependIconCallback() {
      this.messages.splice(0, 0, { msg: this.value });
      this.value = "";
    },
    writing() {
      console.log(this.write);
      this.write = true;
    },
  },
};
</script>

<style>
</style>