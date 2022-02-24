<template>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
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
              src="@/assets/subclasses/berserker.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/berserker-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">
                Berserker
              </div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Berserker' }"
                ><button type="button" class="btn fw-bold text-white ark-purple">
                  View
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/gunlancer.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/gunlancer-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">
                Gunlancer
              </div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Gunlancer' }"
                ><button type="button" class="btn fw-bold text-white ark-purple">
                  View
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/paladin.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/paladin-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">Paladin</div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Paladin' }"
                ><button type="button" class="btn fw-bold text-white ark-purple">
                  View
                </button></router-link
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
  name: 'Warrior',
  components: {},
  data: function () {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
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
