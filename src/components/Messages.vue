<template>
  <v-row align="center" justify="center">
    <v-col cols="12" v-for="msg in messages" :key="msg">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          max-width="800"
          color="#C5CAE9"
        >
          <v-card-text class="my-4 text-center text-h6">
            {{ msg.msg }}
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Messages",
  props: ["messages"],
  data() {},
};
</script>

<style>
</style>