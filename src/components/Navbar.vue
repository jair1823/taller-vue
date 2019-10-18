<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Taller vue-js</router-link>
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
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/Inicio">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/Cursos">Cursos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/Comunidades">Comunidades</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/Mi-cuenta">Mi Cuenta</router-link>
        </li>
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
