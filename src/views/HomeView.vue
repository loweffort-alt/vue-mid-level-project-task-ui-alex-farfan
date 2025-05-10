<script setup>
import { ref } from 'vue';
import ProjectForm from '../components/ProjectForm.vue';
import { useProjectStore } from '../store/project';

const showForm = ref(true);
const selectedProject = ref(null)

const projectStore = useProjectStore();

const handleSaved = (project) => {
  showForm.value = false;
  projectStore.fetchProjects();
};

</script>

<template>
  <section>
    This is the Home View
    <ProjectForm v-if="showForm" :project="selectedProject" @saved="handleSaved" @cancel="showForm = false" />
  </section>
</template>
