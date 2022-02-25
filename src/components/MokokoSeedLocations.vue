<template>
  <div v-for="location in seedLocations" :key="location.id">
    {{ location }}
  </div>
</template>

<script>
export default {
  name: 'MokokoSeedLocations',
  data: function () {
    return {};
  },
  props: {
    seedLocations: Object,
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped></style>
