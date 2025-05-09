import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
    searchName: '',
    statusFilter: 'all'
  }),

  getters: {
    filteredProjects(state) {
      return state.projects.filter(project => {
        const matchesName = project.name.toLowerCase().includes(state.searchName.toLowerCase());
        const matchesStatus = state.statusFilter === 'all' || project.status === state.statusFilter;
        return matchesName && matchesStatus;
      });
    },
  },

  actions: {
    async fetchProjects() {
      this.loading = true;

      try {
        const response = await axios.get('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects');
        this.projects = response.data;
        this.error = null;
      } catch (error) {
        this.error = 'Failed to fetch projects';
        console.error('Error fetching projects:', error);
      } finally {
        this.loading = false;
      }
    },

    async createProject(project) {
      this.loading = true;

      try {
        const response = await axios.post('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects', project);
        this.projects.push(response.data);
        this.error = null;
      } catch (error) {
        this.error = 'Failed to create project';
        console.error('Error creating project:', error);
      } finally {
        this.loading = false;
      }
    },

    async updateProject(project) {
      this.loading = true;

      try {
        const response = await axios.put(`https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects/${project.id}`, project);
        const index = this.projects.findIndex(p => p.id === project.id);
        if (index !== -1) {
          this.projects[index] = response.data;
        }
        this.error = null;
      } catch (error) {
        this.error = 'Failed to update project';
        console.error('Error updating project:', error);
      } finally {
        this.loading = false;
      }
    },

    async deleteProject(projectId) {
      this.loading = true;

      try {
        await axios.delete(`https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects/${projectId}`);
        this.projects = this.projects.filter(project => project.id !== projectId);
        this.error = null;
      } catch (error) {
        this.error = 'Failed to delete project';
        console.error('Error deleting project:', error);
      } finally {
        this.loading = false;
      }
    },

    setSearchName(name) {
      this.searchName = name;
    },
    setStatusFilter(status) {
      this.statusFilter = status;
    },
  },
})
