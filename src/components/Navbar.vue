<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand">Taller vue-js</span>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- 
          aqui van las rutas
         -->
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style lang="css">
</style>
