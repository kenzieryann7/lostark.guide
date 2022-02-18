<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">
      Gunslinger
      <img
        src="@/assets/class-icons/gunslinger-icon.webp"
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
            With a gun for every occasion and the ability to switch between them
            quickly, gunslingers are deadly opponents at any range. Light on
            their feet thanks to their catlike reflexes, gunslingers are hard to
            pin down—and quick to unload a flurry of shots on any unwary foe.
          </div>
          <div class="mb-3">
            Gunslingers are a subclass of the Gunner. They use a multitude of
            guns to strike their enemies from afar. They can wield a sniper
            rifle, shotgun, and pistols. With quick mobility and catlike
            reflexes, they are quite versatile.
          </div>
          <div class="h5 fw-bold">Skills</div>
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/gunslinger.jpeg"
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
  name: 'Gunslinger',
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
