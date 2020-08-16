<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">UNIVERSIDAD TECNOLÓGICA DEL SURESTE DE VERACRUZ</h2>
        <h3 class="text-center">Módulo para nuevo ingreso</h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-13">
      <v-col cols="12" md="4">
        <v-card>
          <v-row class="ma-0 pa-0">
            <v-col cols="12" class="d-flex justify-center pa-0 ma-0">
              <v-avatar size="150">
                <v-img src="../assets/utsv-logo.png"></v-img>
              </v-avatar>
            </v-col>
          </v-row>

          <v-form class="pa-5">
            <v-text-field
              outlined
              dense
              color="green"
              label="Usuario"
              placeholder="Ingresa tu usuario"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              color="green"
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              required
            ></v-text-field>
            <v-btn block color="green" dark depressed>Ingresar</v-btn>
            <span class="d-flex justify-end text-subtitle-2 blue--text mt-2">Crear cuenta</span>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
