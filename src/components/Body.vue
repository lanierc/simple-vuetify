<template>
  <v-container>
    <v-row>
      <v-text class="display-2">This is a simple Vuetify app</v-text>
    </v-row>
    <v-row>
      <v-text>Click the login button above for a modal.</v-text>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="modal" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Email" v-model="email"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeModal">Close</v-btn>
            <v-btn color="blue darken-1" text @click="closeModal">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Body",

  computed: {
    ...mapState(["modal"]),
  },
  methods: {
    ...mapActions(["closeModal"]),
  },
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
};
</script>
