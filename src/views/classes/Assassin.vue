<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Assassin</div>
    <div class="card-body text-start">
      <div class="mb-3">
        These mysterious melee-makers fight demonic with demonic, channeling the
        dark powers in the name of the light in quick, colorful attacks.
      </div>
      <div class="mb-3">
        As the Assassin class, you can only play as female.
      </div>
      <div class="row">
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/deathblade.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Deathblade</h5>

              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Deathblade' }">View</router-link></a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark border shadow">
            <img
              src="@/assets/shadowhunter.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">Shadowhunter</h5>
              <a href="#" class="btn btn-primary"
                ><router-link :to="{ name: 'Shadowhunter' }"
                  >View</router-link
                ></a
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
  name: "Assassin",
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
