<template>
  <div>
    <div class="m-3 nav-button white-text bold columns is-center is-narrow">
    <a target="_blank" class="nav-a column m-3 is-narrow columns is-mobile is-center" v-bind:href="url">
      <div v-if="name !== undefined" class="smol white-text bold is-center">
        {{ name }}
      </div>
      <div v-else-if="round" class="is-narrow smol">
        <img v-bind:src="img" class="img-link round-image"/>
      </div>
      <div v-else class="is-narrow smol">
        <img v-bind:src="img" class="img-link"/>
      </div>
    </a>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    name,
    url : String,
    img: String,
    round: Boolean
  }
})
export default class NavButton extends Vue { }
</script>

<style scoped>

</style>