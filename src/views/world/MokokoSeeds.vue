<template>
  <div class="text-start fw-bold">World / Mokoko Seeds</div>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
    <div class="card-header fw-bold h4">
      Mokoko Seeds
      <img
        src="@/assets/mokoko-seed.png"
        class="img-fluid rounded"
        style="width: 3rem"
        alt="..."
      />
    </div>
    <div class="card-body text-start">
      <div class="mb-3">
        Mokoko Seeds can be found all over the world of Arkesia. Each map
        location has a different amount of Mokoko Seeds you can find. Finding
        all of them, is purely for collectable and achievement purposes. There
        are a total of <span class="text-info">1,209</span> Mokoko Seeds to be
        found.
      </div>
      <div class="mb-3">
        You can exchange Mokoko Seeds for various rewards in Mokoko Village
        located on the Tortoyk Continent. Note that there are no Mokoko Seeds on
        Tortoyk.
      </div>
      <div class="mb-3">
        See below for the list of map locations marked where these seeds can be
        found.
      </div>
      <div class="mb-5">
        <div class="row">
          <div class="col-2">
            <div class="card bg-dark shadow">
              <div class="card-header text-center fw-bold h5">Regions</div>
              <div class="card-body text-start p-0 d-grid">
                <div class="mb-1 text-purple" :class="{'active-purple': region.region == currentRegion}" v-for="region in regionsData" :key="region.id" @click="setRegion(region.region)"><span class="ms-2">{{region.region}}</span></div>
              </div>
            </div>
          </div>
          <div class="col"><MokokoSeedLocations :seedLocations="rethramisData" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rethramisData from '@/data/seeds/rethramis.json';
import yudiaData from '@/data/seeds/yudia.json';
import westLuterraData from '@/data/seeds/west-luterra.json';
import eastLuterraData from '@/data/seeds/east-luterra.json';
import anikkaData from '@/data/seeds/anikka.json';

import regionsData from '@/data/regions.json';
import MokokoSeedLocations from '@/components/MokokoSeedLocations.vue';
import { mapActions, mapState } from "vuex";
export default {
  name: 'MokokoSeeds',
  components: {
    MokokoSeedLocations,
  },
  data: function () {
    return {
      regionsData,
      rethramisData,
      yudiaData,
      westLuterraData,
      eastLuterraData,
      anikkaData,
      selectedLocation: null,
    };
  },
  props: {},
  computed: {
    ...mapState(['currentRegion'])
  },
  methods: {
    ...mapActions({
      setRegion: "setRegion"
    }),
    getLocation(location) {
      console.log(location);
      this.selectedLocation = location;
    },
  },
  mounted() {
    this.setRegion('Rethramis');
  }
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
.text-purple:hover {
  background-color: #403459 !important;
  cursor: pointer;
  font-weight: bold;
}
.active-purple {
  background-color: #403459 !important;
  font-weight: bold;
}
</style>
