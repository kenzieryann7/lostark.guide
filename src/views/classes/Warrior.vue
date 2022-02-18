<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Warrior</div>
    <div class="card-body text-start">
      <div class="mb-3">
        Warriors are the powerhouses of Arkesia. They may not be the most
        nimble, so they stand their ground and make up for mobility with
        cataclysmic impact.
      </div>
      <div class="mb-3">As the Warrior class, you can only play as male.</div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/berserker.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Berserker <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg></h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Berserker' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/gunlancer.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Gunlancer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg></h5>
              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Gunlancer' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/paladin.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Paladin <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
              </svg>
            </h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Paladin' }">View</router-link></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Warrior",
  components: {},
  data: function () {
    return {};
  },
  props: {},
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped>
.text-info:hover {
  color: #0992ad !important;
}
.text-info {
  font-weight: normal !important;
}
</style>
