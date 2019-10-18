<template>
  <div class="container mt-3">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <label>Añada los cursos que esta cursando</label>
            <input class="form-control" type="text" v-model="nombreCurso" />
            <br />
            <button v-on:click="agregarCurso()" class="btn btn-primary btn-block">Agregar</button>
          </div>
        </div>
        <div>
          <br />
          <label>SEMESTRE 2 2019</label>
          <ul>
            <li v-for="c in cursos" v-bind:key="c">{{c}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Semestres extends Vue {
  private cursos: string[] = [];
  private nombreCurso: string = "";

  agregarCurso() {
    if (this.nombreCurso != "") {
      this.cursos.push(this.nombreCurso);
      this.nombreCurso = "";  
    }
  }
}
</script>

<style lang="css">
</style>
