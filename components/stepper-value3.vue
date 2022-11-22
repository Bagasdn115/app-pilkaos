<template>
  <v-card>
    <v-card class="mb-12" color="grey lighten-1" height="auto"
      ><v-img max-height="800px" :src="myImage"></v-img
    ></v-card>
    <v-stepper v-model="e6" vertical class="elevation-0">
      <v-stepper-step :complete="e6 > 1" step="1">
        Biodata Calon Ketua OSIS
        
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="white" class="mb-12" max-height="400px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >Nama : Doanta Aloycius</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Tempat Tanggal Lahir : Banyumas, 4 Mei 2000</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Alamat : Ajibarang Kulon Kec. Ajibarang, Kab.
            Banyumas</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Kelas : VIII E</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Hobi : Bermain Game, Mendengarkan Musik</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Organisasi Yang Pernah Diikuti : OSIS, PMR, Pramuka</v-card-text
          >
        </v-card>
        <v-btn color="primary" justify-center @click="e6 = 2">
          Selanjutnya
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Biodata Calon Wakil Ketua OSIS
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="white" class="mb-12" max-height="400px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >Nama : Septya Andini</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Tempat Tanggal Lahir : Banyumas, 27 Februari 2000</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Alamat : Ajibarang Wetan Kec. Ajibarang, Kab.
            Banyumas</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Kelas : VIII G</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Hobi : Bermain Game, Mendengarkan Musik</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Organisasi Yang Pernah Diikuti : OSIS, PMR, Pramuka</v-card-text
          >
        </v-card>
        <v-btn color="primary" outlined @click="e6 = 1"> Sebelumnya </v-btn>
        <v-btn color="primary" @click="e6 = 3"> Selanjutnya </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3"> VISI </v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="white" class="mb-12" max-height="150px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >Menjadikan siswa unggul dalam prestasi akademik maupun non
            akademik.</v-card-text
          ></v-card
        >
        <v-btn color="primary" outlined @click="e6 = 2"> Sebelumnya </v-btn>
        <v-btn color="primary" @click="e6 = 4"> Selanjutnya </v-btn>
      </v-stepper-content>

      <v-stepper-step step="4"> MISI </v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="white" class="mb-12" max-height="500px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >1. Mengadakan kegiatan di bidang sosial dan keagamaan.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >2. Membantu sekolah dalam meningkatkan keimanan dan
            ketaqwaan.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >3. Menumbuhkan rasa sosial yang tinggi antar warga
            sekolah.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >4. Mengaktifkan organisasi dan ekstra kurikuler yang ada di
            sekolah.</v-card-text
          >
        </v-card>
        <v-btn color="primary" outlined @click="e6 = 3"> Sebelumnya </v-btn>
        <v-btn color="primary" @click="e6 = 1"> Selanjutnya </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-card>
</template>
  
  <script>
export default {
  data() {
    return {
      myImage: require("@/assets/Foto3-HD.png"),
      e1: 1,
      e6: 1,
    };
  },
  name: "HomePage",
};
</script>