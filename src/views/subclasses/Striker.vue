<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Striker</div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          Striker is a martial arts class that attacks enemies like a strong
          wind. Since he is equipped with a variety of physical skills with fast
          movement, he displays splendid aerial combos after hitting enemies
          quickly, and uses powerful elemental skills to turn the battle.
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/striker.jpeg"
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
  name: "Striker",
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
