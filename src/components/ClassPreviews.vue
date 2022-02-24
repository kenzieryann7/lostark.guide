<template>
  <div class="row">
    <div class="col d-flex justify-content-center p-0" v-for="subclass in classData" :key="subclass.id">
      <div class="card text-white bg-dark shadow m-2" style="width: 12rem;">
        <img :src="require('@/assets/subclasses/' + subclass.img)" class="card-img-top" :alt="subclass.subclass">
        <div class="card-body text-center p-2">
          <div class="fw-bold class-title">
            {{subclass.subclass}} 
            <i v-if="subclass.gender == 'Female'" class="bi bi-gender-female"></i>
            <i v-if="subclass.gender == 'Male'" class="bi bi-gender-male"></i>
          </div>
          <div>{{ subclass.class }} | {{ subclass.style }}</div>
        </div>
        <div class="card-footer text-center">
          <router-link :to="{ name: subclass.subclass }"
            ><button type="button" class="btn fw-bold text-white ark-purple">
              View
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classData from '@/data/class-preview.json';
export default {
  name: "ClassPreviews",
  data: function () {
    return {
      classData
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

</style>
