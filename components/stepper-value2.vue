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
            >Nama : Alfi Arisandi</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Tempat Tanggal Lahir : Banyumas, 20 Oktober 2000</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Alamat : Lesmana Kec. Ajibarang, Kab.
            Banyumas</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Kelas : VIII D</v-card-text
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
            >Nama : Aldona Anindita</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Tempat Tanggal Lahir : Banyumas, 8 Agustus 2000</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Alamat : Pancurendang Kec. Ajibarang, Kab.
            Banyumas</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Kelas : VIII C</v-card-text
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
            >Menjadikan OSIS sebagai garda terdepan untuk membentuk siswa yang
            disiplin, cekatan, trampil, dan aktif yang berlandaskan kepada nilai
            pancasila dan norma agama..</v-card-text
          ></v-card
        >
        <v-btn color="primary" outlined @click="e6 = 2"> Sebelumnya </v-btn>
        <v-btn color="primary" @click="e6 = 4"> Selanjutnya </v-btn>
      </v-stepper-content>

      <v-stepper-step step="4"> MISI </v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="white" class="mb-12" max-height="500px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >1. Memajukan prestasi sekolah baik di bidang ekskul dan di bidang
            akademik.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >2. Membentuk organisasi yang sigap, tanggap, serta berjiwa sosial
            tinggi.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >3. Meningkatkan jiwa kedisiplinan siswa.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >4. Meningkatkan program yang menarik bagi siswa.</v-card-text
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
      myImage: require("@/assets/Foto2-HD.png"),
      e1: 1,
      e6: 1,
    };
  },
  name: "HomePage",
};
</script>