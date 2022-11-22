<template>
  <v-card>
    <v-card-text class="text-h3 font-weight-bold d-flex justify-center mb-6 black--text"
      >Peraturan Pemilihan Ketua OSIS</v-card-text
    >

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >1. Peserta Pemilihan Ketua OSIS merupakan siswa/siswi SMP Negeri 3
        Ajibarang.</v-card-text
      >
    </v-list-item>

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >2. Sehat Jasmani dan Rohani.</v-card-text
      >
    </v-list-item>

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >3. Username dan Password Peserta Pemilihan Ketua OSIS sudah
        terdaftar.</v-card-text
      >
    </v-list-item>

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >4. Peserta Pemilihan Ketua OSIS tidak diperkenankan membawa smartphone
        ke bilik pemilihan.</v-card-text
      >
    </v-list-item>

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >5. Peserta Pemilihan Ketua OSIS tidak diperkenankan membawa alat tulis
        apapun ke bilik pemilihan.</v-card-text
      >
    </v-list-item>

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >6. Peserta Pemilihan Ketua OSIS tidak dalam tekanan dari pihak
        manapun.</v-card-text
      >
    </v-list-item>

    <v-list-item>
      <v-card-text class="text-h5 font-weight-bold"
        >7. Pemilih hanya dapat memberikan suara/pilihannya satu kali
        saja</v-card-text
      >
    </v-list-item>

    <br />

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="coba" color="primary" dark block elevation="5"
        >Log in</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="sweetalert2.all.min.js"></script>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    async coba() {
      const { value: accept } = await this.$swal.fire({
        title: "Peraturan Pemilihan Ketua OSIS",
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: "Saya Setuju dengan Peraturan Pemilihan Ketua OSIS",
        confirmButtonText: 'Selanjutnya <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && "You need to agree with T&C";
        },
        
      });

      if (accept) {
        
        window.location = "/home";
      }
    },
  },
};
</script>