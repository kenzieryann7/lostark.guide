<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Berserker <img
            src="@/assets/berserker-icon.webp"
            class="img-fluid rounded"
            alt="..."
          /></div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          <div class="h5 fw-bold">Lore</div>
          <div class="mb-3">Berserkers are always powerful warriors, with their high-damage
          greatsword attacks and potent defense, but when they enter their burst
          mode, they're all but unstoppable. In this heightened state, they gain
          increased attack and movement speed and unlock a special skill that
          delivers a world of hurt to their enemies.</div>
          <div class="h5 fw-bold">Skills</div>
          <div class="d-flex justify-content-center">
            <span :info-tooltip="'Berserk Fury\nConcentrate energy on your greatsword and release it forward, cleaving the ground. This skill can be charged to inflict more damage.'"><img
            src="@/assets/berserker-skills/berserkfury.webp"
            class="img-fluid rounded me-3 shadow"
            alt="..."
          /></span>
          <span :info-tooltip="'no'">
            <img
            src="@/assets/berserker-skills/strikewave.webp"
            class="img-fluid rounded me-3 shadow"
            alt="..."
          /></span>
          <img
            src="@/assets/berserker-skills/whirlwind.webp"
            class="img-fluid rounded me-3 shadow"
            alt="..."
          />
          <img
            src="@/assets/berserker-skills/crimehazard.webp"
            class="img-fluid rounded me-3 shadow"
            alt="..."
          />
          <img
            src="@/assets/berserker-skills/hellblade.webp"
            class="img-fluid rounded me-3 shadow"
            alt="..."
          />
          </div>
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/berserker.jpeg"
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
  name: "Berserker",
  components: {},
  data: function () {
    return {};
  },
  props: {},
  computed: {},
  methods: {}
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
