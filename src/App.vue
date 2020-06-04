<template>
  <v-app>
    <Header />
    <v-content>

      <Body />
    </v-content>
  </v-app>
</template>

<script>
import Body from "./components/Body";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Body,
    Header
  },

  data: () => ({
    //
  })
};
</script>
