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
    v-on:keyup.enter="prependIconCallback"
    mouseup
    @input="writing"
  >
  </v-text-field>
</template>

<script>
export default {
  name: "MyInput",
  props: ["messages", "write"],
  data() {
    return { value: "", timer: null };
  },
  methods: {
    prependIconCallback() {
      this.messages.splice(0, 0, { msg: this.value, id: this.messages.length });
      this.value = "";
    },
    writing() {
      this.$emit("isWriting", true);
      this.onAfterInput();
    },
    onAfterInput() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit("isWriting", false);
      }, 500);
    },
  },
};
</script>

<style>
</style>