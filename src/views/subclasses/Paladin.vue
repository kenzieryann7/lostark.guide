<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
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
          Paladins have a direct line to the powers of the gods, channeling
          their ancient might into potent offensive and defensive moves alike:
          They can use holy skills and buffs with the holy book to support their
          team from behind, or wield a sword and bring punishing skills to bear
          on the frontline.
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
