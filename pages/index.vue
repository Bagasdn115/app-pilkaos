<template>
  <div>
    <v-row align="center " justify="center">
      <v-col cols="12" sm="4">
        <v-card
          class="elevation-2 mt-16 mx-auto"
          max-width="450"
          max-height="800"
          outlined
          
        >
          <v-window>
            <v-window-item :value="1">
              <v-row>
                <v-col cols="auto" md="12">
                  <v-card-text class="mt" justify="center">
                    <v-row justify="center">
                      <v-col cols="auto" sm="auto">
                        <v-img
                          class="mx-auto"
                          max-width="300px"
                          max-height="300px"
                          src="img/OSIS.png"
                        ></v-img>
                        <v-text-field
                          label="User Name"
                          outlined
                          dense
                          :rules="userRules"
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                          v-model="username"
                        />

                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          :rules="passRules"
                          color="blue"
                          autocomplete="false"
                          type="password"
                          v-model="password"
                        />

                        <h4 class="text-center grey--text mt-4 mb-3">
                          Login menggunakan Nama dan NIS
                        </h4>

                        <v-row>
                          <v-col cols="12" sm="7"> </v-col>
                        </v-row>

                        <v-divider class="mx-4"></v-divider>

                        <router-link to="/rules">
                          <v-btn
                          
                            color="primary"
                            dark
                            block
                            elevation="5"
                            >Log in</v-btn
                          >
                        </router-link>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "empty",
  name: "IndexPage",
  data: () => ({
    valid: true,
    username: "",
    userRules: [(v) => !!v || "email can not be empty"],
    password: "",
    passRules: [
      (v) => !!v || "Password is require",
      (v) => (v && v.length >= 8) || "Name must be less than 10 characters",
    ],
    checkbox: false,
  }),
  
};
</script>

