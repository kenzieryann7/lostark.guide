<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">{{ seedLocation }}</div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col text-center">
          <img :src="require('@/assets/seed-locations/' + selectedLocation.map)" class="img-fluid rounded shadow border pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </div>
        <div class="col text-start">
          <ol>
            <li class="mb-2" v-for="seed in selectedLocation.instructions" :key="seed.id">
              {{seed.description}}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content bg-dark text-white">
      <img :src="require('@/assets/seed-locations/' + selectedLocation.map)" class="shadow border img-fluid" />
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "SeedLocation",
  components: {},
  data: function () {
    return {};
  },
  props: {
    seedLocation: String
  },
  computed: {
    ...mapState(['seedData']),
    selectedLocation() {
      return this.seedData.find(e => e.label == this.seedLocation)
    }
  },
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
.pointer {
  cursor: pointer;
}
</style>
