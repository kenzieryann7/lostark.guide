<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Soulfist</div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          The soulfist switches between melee and ranged attacks, which can be
          used together for explosively powerful combos. They channel a special
          energy called Adamance, which they can imbue into abilities or use to
          sustain themselves through fights.
        </div>
        <div class="col">
          <img
            src="@/assets/subclasses/soulfist.jpeg"
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
  name: "Soulfist",
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
