<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Gunner</div>
    <div class="card-body text-start">
      <div class="mb-3">
        Whether wielding high-tech weapons or bows and arrows that never jam,
        keep an eagle eye on these sharpshooters or they may even hit you with
        their worst shot.
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/gunslinger.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/gunslinger-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">
                Gunslinger
              </div>
              <div class="text-muted"><small>RANGE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Gunslinger' }"
                ><button type="button" class="btn fw-bold btn-info">
                  View
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/artillerist.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/artillerist-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">
                Artillerist
              </div>
              <div class="text-muted"><small>RANGE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Artillerist' }"
                ><button type="button" class="btn fw-bold btn-info">
                  View
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/deadeye.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/deadeye-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">Deadeye</div>
              <div class="text-muted"><small>RANGE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Deadeye' }"
                ><button type="button" class="btn fw-bold btn-info">
                  View
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card class-card bg-dark shadow">
            <img
              src="@/assets/subclasses/sharpshooter.jpeg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body text-center">
              <div class="mb-2">
                <img
                  src="@/assets/class-icons/sharpshooter-icon.webp"
                  class="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div class="card-title text-center fw-bold h5 mb-0">
                Sharpshooter
              </div>
              <div class="text-muted"><small>RANGE</small></div>
            </div>
            <div class="card-footer text-center">
              <router-link :to="{ name: 'Sharpshooter' }"
                ><button type="button" class="btn fw-bold btn-info">
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
  name: 'Gunner',
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
