<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">UNIVERSIDAD TECNOLÓGICA DEL SURESTE DE VERACRUZ</h2>
        <h3 class="text-center">Módulo para nuevo ingreso</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <h2 class="mb-5">Datos personales</h2>
            <v-row>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Nombre(s)"
                  placeholder="Ingresa tu nombre(s)"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Apellido materno"
                  placeholder="Ingresa tu apellido materno"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Apellido paterno"
                  placeholder="Ingresa tu apellido paterno"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      outlined
                      dense
                      color="green"
                      v-model="user.fechaNacimiento"
                      label="Fecha de nacimiento"
                      placeholder="Ingresa tu fecha de nacimiento"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    :max="new Date().toISOString()"
                    v-model="user.fechaNacimiento"
                    color="green"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Edad"
                  placeholder="Ingresa tu edad"
                  type="number"
                  min="0"
                  max="99"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-select
                  outlined
                  color="green"
                  label="Sexo"
                  placeholder="Ingresa tu sexo"
                  dense
                  :items="sexOptions"
                  v-model="user.sexo"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Número seguro social"
                  placeholder="Ingresa número de seguridad social"
                  type="number"
                  min="0"
                  max="99"
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Padre o tutor"
                  placeholder="Ingresa el nombre de tu padre o tutor"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <h2 class="mb-5">Dirección</h2>
            <v-row>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Calle"
                  placeholder="Ingresa tu calle"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Número exterior"
                  placeholder="Ingresa el número exterior"
                  type="number"
                  min="0"
                  max="99999"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Número interior"
                  placeholder="Ingresa número interior"
                  type="number"
                  min="0"
                  max="99999"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Colonia"
                  placeholder="Ingresa tu colonia"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Código postal"
                  placeholder="Ingresa tu código postal"
                  type="number"
                  min="0"
                  max="99999"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Estado"
                  placeholder="Ingresa tu estado"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Ciudad"
                  placeholder="Ingresa tu ciudad"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <h2 class="mb-5">Datos escolares</h2>
            <v-row>
              <v-col cols="12" md="6" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Escuela de procedencia"
                  placeholder="Ingresa tu escuela de procedencia"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="ma-0 pt-0 pb-0">
                <v-select
                  outlined
                  color="green"
                  label="Carrera"
                  placeholder="Selecciona la carrera a la que deseas inscribirte"
                  dense
                  :items="careerOptions"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <h2 class="mb-5">Cuenta</h2>
            <v-row>
              <v-col cols="12">
                <v-alert
                  text
                  dense
                  color="info"
                  icon="mdi-information"
                  border="left"
                >Es importante que guarde los siguientes datos en un lugar seguro, ya que serán los accesos para que puedas ingresara a la plataforma y saber el status de tu trámite.</v-alert>
              </v-col>
              <v-col cols="12" md="6" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Correo electrónico"
                  placeholder="Ingresa tu correo electrónico"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Correo electrónico"
                  placeholder="Repite tu correo electrónico"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="ma-0 pt-0 pb-0">
                <v-text-field
                  outlined
                  color="green"
                  label="Contraseña"
                  placeholder="Repite tu contraseña"
                  type="password"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <h2 class="mb-5">Documentos</h2>
            <v-row>
              <v-col cols="12">
                <v-alert
                  text
                  dense
                  color="info"
                  icon="mdi-information"
                  border="left"
                >Adjunta la documentación en formato PDF, en caso de no contar con la credencial de elector, subir una imagen con el texto "Credencial de elector en trámite".</v-alert>
              </v-col>
              <v-col cols="6" md="4" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="Acta de nacimiento"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
              <v-col cols="6" md="4" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="CURP"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
              <v-col cols="6" md="4" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="Comprobante de domicilio"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
              <v-col cols="6" md="3" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="Certificado preparatoria"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
              <v-col cols="6" md="3" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="Credencial de elector"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
              <v-col cols="6" md="3" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="Fotografía"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
              <v-col cols="6" md="3" class="ma-0 pt-0 pb-0">
                <v-file-input
                  color="green"
                  prepend-icon
                  prepend-inner-icon="mdi-file-document-outline"
                  label="Analisis VDRL"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
        <v-col cols="12">
            <v-btn block large depressed color="green" dark>Enviar información</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegistroView",

  data: () => ({
    user: {
      sexo: "",
      fechaNacimiento: "",
    },
    menu: false,
    sexOptions: ["Femenino", "Masculino", "No binario"],
    careerOptions: [
      "TSU Tecnologías de Información y Comunicación",
      "TSU Contaduría",
      "TSU Mantenimiento Área Industrial",
      "TSU Mecatrónica área Automatización",
      "TSU Química Industrial",
      "TSU Mecánica área Automotriz",
      "TSU Administración área Capital Humano",
      "TSU Energías Renovables",
      "Ingeniería en Tecnologías de la Información",
      "Ingeniería en Mantenimiento Industrial",
      "Ingeniería en Mecatrónica",
      "Ingeniería Química",
    ],
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>