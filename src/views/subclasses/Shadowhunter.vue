<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">Shadowhunter</div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col-8">
          Shadowhunters prefer to beat the demons at their own game—they can
          shapeshift into powerful demonic forms to unleash chaotic power. When
          their inner demon is unleashed, shadowhunters get access to incredibly
          destructive powers and increased health and movement speed.
        </div>
        <div class="col">
          <img
            src="@/assets/shadowhunter.jpeg"
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
  name: "Shadowhunter",
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
