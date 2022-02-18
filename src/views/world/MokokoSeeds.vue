<template>
  <div class="text-start fw-bold">World / Mokoko Seeds</div>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
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
      <div class="table-responsive d-flex justify-content-center">
        <table class="table table-dark table-striped" style="max-width: 35rem">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Seed Qty.</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Rethramis</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="seed in rethramisData"
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
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getLocation(seed)"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">Yudia</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="seed in yudiaData" :key="seed.id" class="align-middle">
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
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getLocation(seed)"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">West Luterra</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="seed in westLuterraData"
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
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getLocation(seed)"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">East Luterra</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="seed in eastLuterraData"
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
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getLocation(seed)"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">Anikka</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="seed in anikkaData" :key="seed.id" class="align-middle">
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
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getLocation(seed)"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">Arthetine</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Vern North</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Shushire</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Rohendel</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Yorn</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Feiton</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Punika</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Vern South</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>

  <!-- Map Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ selectedLocation?.label }}: {{ selectedLocation?.seeds }}
            <img
              src="@/assets/mokoko-seed.png"
              class="img-fluid rounded"
              style="width: 2rem"
              alt="..."
            />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="selectedLocation?.map">
            <div class="row">
              <div class="col">
                <img
                  :src="
                    require('@/assets/seed-locations/' + selectedLocation.map)
                  "
                  class="img-fluid rounded shadow"
                  alt="..."
                />
              </div>
              <div class="col text-start">
                <ul>
                  <li
                    class="mb-3"
                    v-for="place in selectedLocation?.instructions"
                    :key="place.id"
                  >
                    {{ place.description }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
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
export default {
  name: 'MokokoSeeds',
  components: {},
  data: function () {
    return {
      rethramisData,
      yudiaData,
      westLuterraData,
      eastLuterraData,
      anikkaData,
      selectedLocation: null,
    };
  },
  props: {},
  computed: {},
  methods: {
    getLocation(location) {
      console.log(location);
      this.selectedLocation = location;
    },
  },
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
