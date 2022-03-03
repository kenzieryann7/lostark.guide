<template>
  <div class="card bg-dark">
    <div class="card-body p-1">
    <div class="table-responsive d-flex justify-content-center" >
        <table class="table table-dark table-striped m-0" style="border-radius: 5px;">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Seed Qty.</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="seed in seedData"
              :key="seed.id"
              class="align-middle"
            >
              <td>{{ seed.label }}</td>
              <td>{{ seed.type }}</td>
              <td>
                {{ seed.seeds }}
                <img
                  src="@/assets/mokoko-seed.png"
                  class="img-fluid rounded"
                  style="width: 1.5rem"
                  alt="..."
                />
              </td>
              <td class="text-center">
                <router-link
                :to="{ name: 'SeedLocation', params: { seedLocation: seed.label } }"
              >
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                >
                  View
                </button>
              </router-link>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MokokoSeedLocations',
  data: function () {
    return {};
  },
  props: {
    seedLocations: Object,
  },
  computed: {
    ...mapState(['seedData'])
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped></style>
