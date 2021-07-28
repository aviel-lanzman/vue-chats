<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
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
        <v-list-item-avatar v-for="user in users" :key="user.age"
          ><v-avatar :disabled="true">
            <!-- <v-icon dark >
              mdi-abjad-hebrew
            </v-icon> -->
            <img :src="user.img" :alt="user.name" /> </v-avatar
        ></v-list-item-avatar>
      </div>
      <v-spacer>
        <div class="writing" v-show="write">writing...</div>
      </v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Messages :messages="messages" />
      </v-container> </v-main
    ><input type="text" />
    <v-footer app>
      <MyInput :messages="messages" :write="write" @isWriting="isWriting" />
    </v-footer>
  </v-app>
</template>

<script>
import MyInput from "./components/MyInput";
import Messages from "./components/Messages";
import "./styles/app.css";

export default {
  name: "App",

  components: {
    MyInput,
    Messages,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  data: () => ({
    messages: [],
    write: false,
  }),

  methods: {
    isWriting(data) {
      this.write = data;
    },
  },
};
</script>
