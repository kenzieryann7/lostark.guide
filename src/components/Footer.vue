<template>
  <div class="navbar navbar-dark bg-dark text-white border-top footer">
    <div class="container-fluid">
      <small>A Lost Ark Guide by Rynzaii</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: function () {
    return {};
  },
  props: {},
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped></style>
