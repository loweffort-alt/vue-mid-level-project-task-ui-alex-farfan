<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '../store/project';

const projectStore = useProjectStore();

onMounted(() => {
  projectStore.fetchProjects();
});
</script>

<template>
  <section>
    <h1>Projects</h1>
    <div class="flex flex-col gap-4">
      <input type="text" placeholder="Buscar por nombre" v-model="projectStore.searchName" class="border p-1">
      <label for="filter">Filtrar por estado</label>
      <select v-model="projectStore.statusFilter" class="border p-1 *:bg-gray-700" name="filter" id="filter">
        <option value="all" selected="selected">Mostrar Todos</option>
        <option value="active">Activos</option>
        <option value="inactive">Inactivos</option>
      </select>

      <div v-if="projectStore.loading">
        Cargando Proyectos...
      </div>

      <div v-else>
        <ul>
          <li v-for="p in projectStore.filteredProjects" :key="p.id">
            <strong>{{ p.name }}</strong> {{ p.status }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
