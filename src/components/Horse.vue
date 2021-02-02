<template>
  <div class="m-5">
    <div class="columns is-multiline is-mobile is-centered m-5">
      <div class="column force-center is-full">
        <div class="boxeh m-3">
          <a href="https://sleeepy.ninja/" class="large bold white-text link">sleepy</a>
        </div>
      </div>
      <div class="column force-center is-full">
        <img src="images/horse.png">
      </div>
      <div class="m-5 force-center mol is-full gray m-3">
        Welcome to horse. The page for links about our favorite horse! &lt;3
      </div>
      <div class="column is-full columns m-5 is-centered is-multiline is-mobile" style="padding: 30px;">
        <Link class="column is-narrow img-link nav-button m-4" imgSrc="images/githorse.png" link="https://github.com/Copystrike"/>
        <Link class="column is-narrow img-link nav-button m-4" imgSrc="images/tweethorse.png" link="https://twitter.com/Nick_vn"/>
        <Link class="column is-narrow img-link nav-button m-4" imgSrc="images/horsesite.png" link="https://copystrike.dev"/>
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./Link";

export default {
  name: 'Horse',
  components: {Link}
}
</script>

<style>

</style>
