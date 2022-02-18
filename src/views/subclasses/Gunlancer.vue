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
          <div class="h5 fw-bold">Lore</div>
          <div class="mb-3 fst-italic text-muted">
            <i class="bi h5 bi-quote"></i>
            As the first line of defense, gunlancers take the brunt of enemy
            attacks with their defensive stance and battlefield shield to keep
            the rest of their party safe. While their gun lance is a formidable
            weapon, their true value derives from their ability to protect
            allies and absorb damage like a sponge.
          </div>
          <div class="mb-3">
            Gunlancers are a subclass of the Warrior. They are considered the
            most defensive Warrior Class specialization. Gunlancers are the
            great at absorbing massive amounts of
            <span class="text-info">Damage</span>, which makes them great tanks
            for any group. However, with an increase in
            <span class="text-info">Defense</span>, you sacrifice your mobility.
          </div>
          <div class="h5 fw-bold">Skills</div>
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
