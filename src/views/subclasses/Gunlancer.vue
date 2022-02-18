<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">
      Gunlancer
      <img
        src="@/assets/class-icons/gunlancer-icon.webp"
        class="img-fluid rounded"
        alt="..."
      />
    </div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          As the first line of defense, gunlancers take the brunt of enemy
          attacks with their defensive stance and battlefield shield to keep the
          rest of their party safe. While their gun lance is a formidable
          weapon, their true value derives from their ability to protect allies
          and absorb damage like a sponge.
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/gunlancer.jpeg"
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
  name: 'Gunlancer',
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
