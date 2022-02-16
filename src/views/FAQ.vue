<template>
  <!-- HEAD CARD -->
  <div class="card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h4">FAQ</div>
    <div class="card-body text-start">
      <div v-for="data in faqData" :key="data.id">
        <div class="fw-bold label">{{ data.label }}</div>
        <div class="mb-3">{{ data.answer }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import faqData from "@/data/faq.json";
export default {
  name: "Main",
  components: {},
  data: function () {
    return {
      faqData
    };
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
.label {
  font-size: 18px;
}
</style>
