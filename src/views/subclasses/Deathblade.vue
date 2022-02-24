<template>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
    <div class="card-header fw-bold h4">
      Deathblade
      <img
        src="@/assets/class-icons/deathblade-icon.webp"
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
            Deathblade is an assassin class that uses a total of three swords
            that they wield alongside the power of chaos to swiftly slash their
            foes. The fast-paced combo attacks from the light dualswords and
            longsword overpower enemies, leading to death by a thousand cuts.
          </div>
          <div class="mb-3">
            Deathblades are a subclass of the Assassin. Deathblades can wield
            three Swords combined with the power of Chaos to defeat their
            enemies. This class has better melee attack range than other
            classes. With this and their increased mobility speed makes them
            quite versatile in and out of combat.
          </div>
          <div class="h5 fw-bold">Skills</div>
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/deathblade.jpeg"
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
  name: 'Deathblade',
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
