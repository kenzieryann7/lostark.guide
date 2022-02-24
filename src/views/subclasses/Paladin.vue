<template>
  <!-- HEAD CARD -->
  <div class="card text-white dark-card mb-3 shadow">
    <div class="card-header fw-bold h4">
      Paladin
      <img
        src="@/assets/class-icons/paladin-icon.webp"
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
            Paladins have a direct line to the powers of the gods, channeling
            their ancient might into potent offensive and defensive moves alike:
            They can use holy skills and buffs with the holy book to support
            their team from behind, or wield a sword and bring punishing skills
            to bear on the frontline.
          </div>
          <div class="mb-3">
            Paladins are a subclass of the Warrior. Paladins are the most well
            balanced Warrior out of all the subclasses. They can deal a great
            amount of <span class="text-info">Damage</span> and play great
            support for a group. They can withstand
            <span class="text-info">Damage</span> higher than the Bard, a
            support subclass of the Mage. Paladins are easy to learn and great
            for beginners as they are able to tank, heal, and use buffs to
            increase their survivability. Of course, this gets passed along to
            your group members as well.
          </div>
          <div class="h5 fw-bold">Skills</div>
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/paladin.jpeg"
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
  name: 'Paladin',
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
