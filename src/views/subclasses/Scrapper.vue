<template>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
    <div class="card-header fw-bold h4">
      Scrapper
      <img
        src="@/assets/class-icons/scrapper-icon.webp"
        class="img-fluid rounded"
        alt="..."
      />
    </div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          Armed with a heavy gauntlet, scrappers draw on two inverse forms of
          attack energy that feed off each other to deliver nonstop destruction.
          With excellent attack, defense, mobility, and lasting power, they're
          well balanced enough to throw enemies off their guard.
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/scrapper.jpeg"
            class="img-fluid rounded shadow"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Scrapper',
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
