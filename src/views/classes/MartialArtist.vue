<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Martial Artist</div>
    <div class="card-body text-start">
      <div class="mb-3">
        These quick-footed fighters like to rush the enemy with combined attacks
        at lethal speeds that can only be described as breakneck.
      </div>
      <div class="row">
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/striker.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Striker</h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Striker' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/scrapper.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Scrapper</h5>
              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Scrapper' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/soulfist.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Soulfist</h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Soulfist' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/wardancer.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Wardancer</h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Wardancer' }">View</router-link></a
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
  name: "MartialArtist",
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
