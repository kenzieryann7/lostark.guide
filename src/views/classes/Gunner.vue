<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Gunner</div>
    <div class="card-body text-start">
      <div class="mb-3">
        Whether wielding high-tech weapons or bows and arrows that never jam, keep an eagle eye on these sharpshooters or they may even hit you with their worst shot.
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark  shadow">
            <img
              src="@/assets/subclasses/gunslinger.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Gunslinger <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
</svg></h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Gunslinger' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark  shadow">
            <img
              src="@/assets/subclasses/artillerist.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Artillerist <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg></h5>
              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Artillerist' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark  shadow">
            <img
              src="@/assets/subclasses/deadeye.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Deadeye <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg></h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Deadeye' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark  shadow">
            <img
              src="@/assets/subclasses/sharpshooter.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Sharpshooter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg></h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Sharpshooter' }">View</router-link></a
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
  name: "Gunner",
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
