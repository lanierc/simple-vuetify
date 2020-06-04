<template>
  <header>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon />
      <v-toolbar-title>Test App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.prevent="openModal" text>
        <v-icon>mdi-account-arrow-right</v-icon> Login
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["openModal"]),
  },
};
</script>
