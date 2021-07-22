<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div v-if="write" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        <div v-if="write">cugdgsgdg</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Messages :messages="messages" />
      </v-container>
    </v-main>
    <v-footer app> <MyIniput :messages="messages" :write="write" /> </v-footer>
  </v-app>
</template>

<script>
import MyIniput from "./components/MyIniput";
import Messages from "./components/Messages";

export default {
  name: "App",

  components: {
    MyIniput,
    Messages,
  },

  data: () => ({
    messages: [],
    write: false,
  }),
};
</script>
