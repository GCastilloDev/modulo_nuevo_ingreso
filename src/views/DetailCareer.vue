<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Alumnos de la carrera {{careerSelected}}</h2>
      </v-col>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="items" sort-by="statusProceso" class="elevation-1">
          <template v-slot:item.direccion="{ item }">
            <v-btn
              small
              depressed
              color="green"
              dark
              @click="verDireccion(item.direccion)"
            >Ver dirección</v-btn>
          </template>

          <template v-slot:item.documents="{ item }">
            <v-btn
              small
              depressed
              color="green"
              dark
              @click="verDocumentos(item)"
            >Ver documentos</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <addressModal :viewAddress="viewAddress" :address="addressData" @cerrar="viewAddress = false" />
    <documentsModal
      :viewDocuments="viewDocuments"
      :items="documents"
      @cerrar="viewDocuments = false"
    />
  </v-container>
</template>

<script>
import { db } from "../services/firebase";
import { mapState } from "vuex";

export default {
  mounted() {
    this.getData();
  },
  name: "DetailCareer",
  components: {
    addressModal: () => import("../components/Address"),
    documentsModal: () => import("../components/Documents"),
  },
  data: () => ({
    viewAddress: false,
    viewDocuments: false,
    loading: false,
    addressData: {},
    documents: {},
    items: [],
    headers: [
      {
        text: "Nombre",
        value: "nombre",
      },
      {
        text: "Apellido Paterno",
        value: "apellidoPaterno",
      },
      {
        text: "Apellido Materno",
        value: "apellidoMaterno",
      },
      {
        text: "Status",
        value: "statusProceso",
      },
      {
        text: "Correo",
        value: "correoElectronico",
      },
      {
        text: "Direccion",
        value: "direccion",
      },
      {
        text: "Documentos",
        value: "documents",
      },
      {
        text: "Detalle completo",
        value: "detalleCompleto",
      },
    ],
  }),
  methods: {
    verDireccion(direccion) {
      this.addressData = direccion;
      this.viewAddress = true;
    },
    verDocumentos(documentos) {
      this.documents = documentos;
      this.viewDocuments = true;
    },
    async getData() {
      this.loading = true;
      try {
        const response = await db
          .collection("users")
          .where("carrera", "==", this.careerSelected)
          .get();

        if (response.docs.length > 0) {
          response.docs.forEach((e) => {
            this.items.push(e.data());
          });
        }
      } catch (error) {
        console.warn(error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    ...mapState(["careerSelected"]),
  },
};
</script>

<style lang="scss" scoped>
</style>