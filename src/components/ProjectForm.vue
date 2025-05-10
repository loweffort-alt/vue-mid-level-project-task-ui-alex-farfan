<script setup>
import { ref, watch, computed } from 'vue';
import { useProjectStore } from '../store/project';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const props = defineProps({
  project: {
    type: Object,
    default: () => ({
      name: '',
      description: '',
      status: 'active',
    }),
  },
});

const emit = defineEmits(['saved', 'cancel']);

const form = ref({ ...props.project });
const loading = ref(false);

const rules = computed(() => ({
  name: { required },
  description: { required },
  status: { required },
}));

const v$ = useVuelidate(rules, form);

watch(() => props.project, (newProject) => {
  form.value = { ...newProject };
});

const projectStore = useProjectStore();

const handleSubmit = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    return;
  }

  loading.value = true;
  try {
    if (form.value.id) {
      await projectStore.updateProject(form.value.id, form.value);
    } else {
      await projectStore.createProject(form.value);
    }
  } catch (error) {
    console.error('Error en el envío del formulario:', error);
  }
};
</script>

<template>
  <h1>Crea tu tarea aquí!</h1>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label class="block">Nombre del proyecto</label>
      <input v-model="form.name" type="text" class="w-full border p-2" :class="{ 'border-red-500': v$.name.$error }" />
      <p v-if="v$.name.$error" class="text-red-500 text-sm">Este campo es obligatorio</p>
    </div>

    <div>
      <label class="block">Descripción</label>
      <textarea v-model="form.description" class="w-full border p-2" />
    </div>

    <div>
      <label class="block">Estado</label>
      <select v-model="form.status" class="w-full p-2 border *:bg-gray-700">
        <option value="active">Activo</option>
        <option value="inactive">Inactivo</option>
      </select>
      <p v-if="v$.status.$error" class="text-red-500 text-sm">Debes seleccionar un estado</p>
    </div>

    <div class="flex gap-4">
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded" :disabled="loading">
        {{ form.id ? 'Actualizar' : 'Crear' }}
      </button>
      <button type="button" class="text-gray-600" @click="$emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>
