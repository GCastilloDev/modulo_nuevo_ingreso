<template>
  <v-dialog v-model="viewDocuments" persistent max-width="600">
    <v-card>
      <v-toolbar dense flat color="green" dark>
        <v-toolbar-title>Documentos</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <pre>{{documents}}</pre>
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-card-title>Analisis VDRL</v-card-title>
              <v-card-text>
                <v-btn
                  block
                  depressed
                  color="green"
                  dark
                  @click="abrir(item.documents.analisisVDRL.url)"
                >Ver documento</v-btn>
              </v-card-text>
              <v-card-text class="mb-0 pb-0">Aprobado: {{item.documents.analisisVDRL.aprobado}}</v-card-text>
              <v-card-text class="mb-0 mt-0 pb-5 pt-0">Mensaje: {{item.documents.analisisVDRL.mensaje}}</v-card-text>
              <v-card-actions>
                  <v-btn block depressed color="green">Editar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="cerrar">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddressComponent",
  props: {
    viewDocuments: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cerrar() {
      this.$emit("cerrar");
    },
    abrir(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>