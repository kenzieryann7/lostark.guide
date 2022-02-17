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
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/berserker.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Berserker</h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Berserker' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/gunlancer.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Gunlancer</h5>
              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Gunlancer' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/paladin.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Paladin</h5>

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
