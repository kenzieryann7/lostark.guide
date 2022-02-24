<template>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
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
          <div class="mb-3 fst-italic text-muted">
            <i class="bi h5 bi-quote"></i>
            Berserkers are always powerful warriors, with their high-damage
            greatsword attacks and potent defense, but when they enter their
            burst mode, they're all but unstoppable. In this heightened state,
            they gain increased attack and movement speed and unlock a special
            skill that delivers a world of hurt to their enemies.
          </div>
          <div class="mb-3">
            Berserkers are a subclass of the Warrior. Easily one of more
            forgiving classes for beginners as they are the most offensive with
            great damage output with massive AoE. They wield Great Swords and
            unleash their fury on their enemies. Like the other subclasses of
            the Warrior, Berserker's damage depends on their
            <span class="text-info">Strength</span>. An increase in
            <span class="text-info">Strength</span> is an increase in
            <span class="text-info">Damage</span>. Although the Berserker
            sacrifices defense for its incredible offense, it makes up for it as
            their mobility speed is greatly increased and thier use of flank
            attacks.
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
      <div class="h5 fw-bold">Awakening Skills</div>
      <div class="row mb-3">
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="berserkFury"
            src="@/assets/berserker-skills/berserkfury.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="chainOfVengeance"
            src="@/assets/berserker-skills/chainofvengeance.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="h5 fw-bold">Skills</div>
      <div class="row mb-3">
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="doubleSlash"
            src="@/assets/berserker-skills/doubleslash.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="assaultBlade"
            src="@/assets/berserker-skills/assaultblade.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="crimeHazard"
            src="@/assets/berserker-skills/crimehazard.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/finishstrike.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/shouldercharge.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="whirlwind"
            src="@/assets/berserker-skills/whirlwind.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/powerbreak.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/tempestslash.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="crimeHazard"
            src="@/assets/berserker-skills/mountaincrash.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/divingslash.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/hellblade.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="whirlwind"
            src="@/assets/berserker-skills/chainsword.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/windblade.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/maelstrom.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="strikeWave"
            src="@/assets/berserker-skills/strikewave.jpeg"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/reddust.png"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col">
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-html="true"
            :title="hellBlade"
            src="@/assets/berserker-skills/swordstorm.jpeg"
            class="img-fluid rounded shadow pointer"
            alt="..."
          />
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';
import $ from 'jquery';
import {
  berserkFury,
  chainOfVengeance,
  doubleSlash,
  assaultBlade,
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
    chainOfVengeance,
    assaultBlade,
    doubleSlash,
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
