<template>
  <v-card>
    <v-card class="mb-12" color="grey lighten-1" height="auto"
      ><v-img max-height="800px" :src="myImage"></v-img
    ></v-card>
    <v-stepper v-model="e6" vertical class="elevation-0">
      <v-stepper-step :complete="e6 > 1" step="1">
        Biodata Calon Ketua OSIS
        <small>Summarize if needed</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="white" class="mb-12" max-height="400px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >Nama : Bagas Dwi Novianto</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Tempat Tanggal Lahir : Banyumas, 13 November 2000</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Alamat : Pasiraman Lor RT 02 RW 04 Kec. Pekuncen, Kab.
            Banyumas</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Kelas : VIII A</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Hobi : Bermain Game, Mendengarkan Musik</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Organisasi Yang Pernah Diikuti : OSIS, PMR, Pramuka</v-card-text
          >
        </v-card>

        <v-btn color="primary" justify-center @click="e6 = 2"> Selanjutnya </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Biodata Calon Wakil Ketua OSIS
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="white" class="mb-12" max-height="400px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >Nama : Bagas Dwi Novianto</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Tempat Tanggal Lahir : Banyumas, 13 November 2000</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Alamat : Pasiraman Lor RT 02 RW 04 Kec. Pekuncen, Kab.
            Banyumas</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >Kelas : VIII A</v-card-text
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
            >Menjadi wadah bagi siswa untuk mengembangkan segala potensi yang
            ada sehingga terbentuk siswa yang cerdas, kreatif, dinamis,
            berprestasi, dan berakhlak mulia, serta membentuk individu yang
            dapat menjaga nama baik sekolah.</v-card-text
          ></v-card
        >
        <v-btn color="primary" outlined @click="e6 = 2"> Sebelumnya </v-btn>
        <v-btn color="primary" @click="e6 = 4"> Selanjutnya </v-btn>
      </v-stepper-content>

      <v-stepper-step step="4"> MISI </v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="white" class="mb-12" max-height="500px" elevation="0">
          <v-card-text class="text-h5 font-weight-bold"
            >1. Membentuk karakter pengurus yang cerdas dan solid.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >2. Melaksanakan kegiatan yang dapat meningkatkan hubungan positif
            antar guru dan murid.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >3. Menciptakan kondisi lingkungan sekolah yang kondusif dalam
            belajar untuk menghasilkan siswa yang berkompetensi dan
            mandiri.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >4. Memaksimalkan peran siswa dalam menjaga kebersihan lingkungan
            sekolah.</v-card-text
          >
          <v-card-text class="text-h5 font-weight-bold"
            >5. Memajukan kualitas ekskul di sekolah dan mampu mengikuti
            prestasi di luar sekolah.</v-card-text
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
      myImage: require("@/assets/Foto1-HD.png"),
      e1: 1,
      e6: 1,
    };
  },
  name: "HomePage",
};
</script>