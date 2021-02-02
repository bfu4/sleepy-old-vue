<template>
  <div id="app">
    <div id="navbar" class="m-5 columns is-centered is-mobile is-multiline">
    <div class="m-5 column is-full columns is-centered is-mobile is-multiline">
      <nav-button class="m-1 column is-narrow" img="./images/twitter-grn.png" url="https://twitter.com/bellafusari1"/>
      <nav-button class="m-1 column is-narrow" img="./images/gitgreen.png" url="https://github.com/bfu4"/>
      <nav-button class="m-1 column is-narrow" img="./images/horsegrn.png" url="https://sleeepy.ninja/horse"/>
      <nav-button class="m-1 column is-narrow" img="./images/asu.jpg" v-bind:round="true" url="https://sleeeepyti.me/extern/catmc.mp4"/>
      <nav-button class="m-1 column is-narrow" img="./images/dscgrn.png" url="https://dsc.bio/neemy"/>
      <nav-button class="m-1 column is-narrow" img="./images/sc.png" url="https://soundcloud.com/bellafusari"/>
      <nav-button class="m-1 column is-narrow" img="./images/linkedin.png" url="https://www.linkedin.com/in/bella-fusari-2337b3202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOvPg3niOTwWUtKyquus9Xg%3D%3D"/>
    </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import NavButton from "@/components/NavButton.vue";

@Component({
  components: {
    NavButton
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
