<template>
  <div>
    <nav class="justify-center items-center">
      <h1>Welcome to my technical test</h1>
      <div class="flex gap-8">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/projects/1/tasks">Tasks</router-link>
      </div>
      <h2>Developed by Alex Farfan Navarro</h2>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

nav h1 {
  font-size: 2rem;
  color: #42b983;
}

nav h2 {
  font-size: 1.5rem;
}
</style>
