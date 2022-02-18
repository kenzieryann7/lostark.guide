<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">
      Berserker
      <img
        src="@/assets/class-icons/berserker-icon.webp"
        class="img-fluid rounded"
        alt="..."
      />
    </div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          <div class="h5 fw-bold">Lore</div>
          <div class="mb-3">
            Berserkers are always powerful warriors, with their high-damage
            greatsword attacks and potent defense, but when they enter their
            burst mode, they're all but unstoppable. In this heightened state,
            they gain increased attack and movement speed and unlock a special
            skill that delivers a world of hurt to their enemies.
          </div>
          <div class="h5 fw-bold">Skills</div>
          <div class="d-flex justify-content-center">
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-html="true"
              :title="berserkFury"
              ><img
                src="@/assets/berserker-skills/berserkfury.webp"
                class="img-fluid rounded me-3 shadow pointer"
                alt="..."
            /></span>
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-html="true"
              :title="strikeWave"
            >
              <img
                src="@/assets/berserker-skills/strikewave.webp"
                class="img-fluid rounded me-3 shadow pointer"
                alt="..."
            /></span>
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-html="true"
              :title="whirlwind"
            >
              <img
                src="@/assets/berserker-skills/whirlwind.webp"
                class="img-fluid rounded me-3 shadow pointer"
                alt="..."
            /></span>
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-html="true"
              :title="crimeHazard"
            >
              <img
                src="@/assets/berserker-skills/crimehazard.webp"
                class="img-fluid rounded me-3 shadow pointer"
                alt="..."
            /></span>
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-html="true"
              :title="hellBlade"
            >
              <img
                src="@/assets/berserker-skills/hellblade.webp"
                class="img-fluid rounded me-3 shadow pointer"
                alt="..."
            /></span>
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
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';
import $ from 'jquery';
import {
  berserkFury,
  strikeWave,
  whirlwind,
  crimeHazard,
  hellBlade,
} from '@/helpers/berserker.js';
export default {
  name: 'Berserker',
  components: {},
  data: function () {
    return {};
  },
  props: {},
  computed: {
    berserkFury,
    strikeWave,
    whirlwind,
    crimeHazard,
    hellBlade,
  },
  methods: {
    readyTooltip() {
      this.$nextTick(() => {
        $('[data-bs-toggle="tooltip"]').tooltip();
      });
    },
  },
  mounted() {
    //inti tooltip
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
      (tooltipNode) => new Tooltip(tooltipNode)
    );
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
