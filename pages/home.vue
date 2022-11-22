<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1"> Calon 01 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2"> Calon 02 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3"> Calon 03 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <stepper-value1 />
          <v-btn color="primary" block @click="confirm"> PILIH </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <stepper-value2 />
          <v-btn color="primary" block @click="confirm"> PILIH </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <stepper-value-3 />
          <v-btn color="primary" block @click="confirm"> PILIH </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
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
  methods: {
    async confirm() {
      this.$swal
        .fire({
          title: "Apakah kamu yakin?",
          icon: "warning",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, Saya yakin!",
          cancelButtonText: "Kembali",
        })
        .then((result) => {
          if (result.isConfirmed) {
            let timerInterval;
            this.$swal.fire({
              title: "Jawabanmu Telah Diterima!",
              html: "I will close in <b></b> milliseconds.",
              icon: "success",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                this.$swal.showLoading();
                const b = this.$swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                  b.textContent = this.$swal.getTimerLeft();
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
                window.location = "/";
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === $swal.DismissReason.timer) {
                console.log("I was closed by the timer");
                
              }
            });
            
          }
        });
    },
  },
};
</script>
