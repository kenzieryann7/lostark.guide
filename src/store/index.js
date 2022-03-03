import { createStore } from "vuex";

// Region data for Mokoko Seeds
import rethramisSeeds from "@/data/seeds/rethramis.json";
import yudiaSeeds from "@/data/seeds/yudia.json";
import westLuterraSeeds from "@/data/seeds/west-luterra.json";
import eastLuterraSeeds from "@/data/seeds/east-luterra.json";
import anikkaSeeds from "@/data/seeds/anikka.json";
const store = createStore({
  state: {
      // Gets selected region so location data can be sent appropriately
      currentRegion: null,
      seedData: null
  },
  mutations: {
      SET_REGION(state, region) {
          state.currentRegion = region;
          console.log(state.currentRegion);
      },
      SET_SEED_DATA(state) {
        if (state.currentRegion == 'Rethramis') {
          console.log('rethramis seed data set')
          state.seedData = rethramisSeeds;
          console.log(state.seedData);
        }
        if (state.currentRegion == 'Yudia') {
          console.log('yudia seed data set')
          state.seedData = yudiaSeeds;
          console.log(state.seedData);
        }
        if (state.currentRegion == 'West Luterra') {
          console.log('west luterra seed data set')
          state.seedData = westLuterraSeeds;
          console.log(state.seedData);
        }
        if (state.currentRegion == 'East Luterra') {
          console.log('east luterra seed data set')
          state.seedData = eastLuterraSeeds;
          console.log(state.seedData);
        }
        if (state.currentRegion == 'Anikka') {
          console.log('anikka seed data set')
          state.seedData = anikkaSeeds;
          console.log(state.seedData);
        }
      }
  },
  actions: {
    setRegion(context, region) {
        context.commit("SET_REGION", region);
        context.commit("SET_SEED_DATA");
    }
  },
  getters: {}
});

export default store;