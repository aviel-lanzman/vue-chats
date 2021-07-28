<template>
  <v-row align="center" justify="center">
    <v-col
      cols="12"
      v-for="msg in messages"
      :key="msg.id"
      v-show="msg.msg.length > 0"
    >
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
    <v-card-text
      v-for="user in users"
      :key="user.age"
      class="my-4 text-center text-h6"
    >
    </v-card-text>
  </v-row>
</template>
<script>
export default {
  name: "Messages",
  props: ["messages"],
};
</script>

<style>
</style>