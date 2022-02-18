<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">
      Shadowhunter
      <img
        src="@/assets/class-icons/shadowhunter-icon.webp"
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
            Shadowhunters prefer to beat the demons at their own game—they can
            shapeshift into powerful demonic forms to unleash chaotic power.
            When their inner demon is unleashed, shadowhunters get access to
            incredibly destructive powers and increased health and movement
            speed.
          </div>
          <div class="mb-3">
            Shadowhunters are a subclass of the Assassin. They are most known
            for shapeshifting into demonic forms to destory their foes. When in
            this form, their <span class="text-info">Power</span> and
            <span class="text-info">Damage</span> improves greatly as well as
            their <span class="text-info">Health</span> and
            <span class="text-info">Movement Speed</span>. Shadowhunters have
            both melee and ranged attacks to deal damage effectively using the
            power of Chaos.
          </div>
          <div class="h5 fw-bold">Skills</div>
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/shadowhunter.jpeg"
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
  name: 'Shadowhunter',
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
