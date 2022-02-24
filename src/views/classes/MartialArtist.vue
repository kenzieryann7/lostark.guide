<template>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
    <div class="card-header fw-bold h4">Martial Artist</div>
    <div class="card-body text-start">
      <div class="mb-3">
        These quick-footed fighters like to rush the enemy with combined attacks
        at lethal speeds that can only be described as breakneck.
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/striker.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/striker-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">Striker</div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Striker' }"
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
              src="@/assets/subclasses/scrapper.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/scrapper-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">Scrapper</div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Scrapper' }"
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
              src="@/assets/subclasses/soulfist.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/soulfist-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">Soulfist</div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Soulfist' }"
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
              src="@/assets/subclasses/wardancer.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/wardancer-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">
                Wardancer
              </div>
              <div class="text-muted"><small>MELEE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Wardancer' }"
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
  name: 'MartialArtist',
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
