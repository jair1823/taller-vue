<template>
  <div class="container mt-3">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <label>Añada los cursos que esta cursando</label>
            <!-- se debe aplicar una directiva con este input -->
            <input class="form-control" type="text"/>
            <br />
            <!-- se debe aplicar una directiva con este button -->
            <button class="btn btn-primary btn-block">Agregar</button>
          </div>
        </div>
        <div>
          <br />
          <label>SEMESTRE 2 2019</label>
          <!-- Se deben desplegar todos los curosos -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Semestres extends Vue {
  //se deben agrar metodos y atributos necesarios
}
</script>

<style lang="css">
</style>
