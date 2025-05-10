# README - Vue.js Project & Task Management SPA

## Descripción del Proyecto

Aplicación SPA (Single Page Application) construida con Vue.js 3 para la gestión de proyectos y tareas, con las siguientes características:
- Listado de proyectos y tareas con filtros dinámicos
- Formularios con validaciones
- Diseño responsivo
- Consumo de API REST
- Componentes reutilizables

## Tecnologías Utilizadas

- Vue 3 (Composition API)
- Vue Router
- Pinia (para gestión de estado)
- Axios (para consumo de API)
- TailwindCSS (para estilos)
- Vite (como bundler)
- Vee-validate (para validaciones de formularios)

## Estructura del Proyecto

```
src/
├── assets/
├── components/
│   ├── ProjectForm.vue
│   ├── TaskForm.vue
│   ├── TableComponent.vue
│   ├── FilterComponent.vue
│   └── LoaderComponent.vue
├── views/
│   ├── ProjectList.vue
│   └── TaskList.vue
├── router/
│   └── index.js
├── store/
│   ├── project.js
│   └── task.js
├── App.vue
└── main.js
```

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/loweffort-alt/vue-mid-level-project-task-ui-alex-farfan.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Para producción:
```bash
npm run build
```

## Uso de la Aplicación

### Proyectos
- Accede a la vista de proyectos en `/projects`
- Filtra proyectos por nombre o estado (activo/inactivo)
- Crea nuevos proyectos con el botón "Nuevo Proyecto"
- Edita proyectos existentes haciendo clic en el botón de edición

### Tareas
- Accede a las tareas de un proyecto haciendo clic en "Ver Tareas"
- Filtra tareas por estado (pendiente, en progreso, hecho) o prioridad (alta, media, baja)
- Crea nuevas tareas con el botón "Nueva Tarea"
- Edita tareas existentes haciendo clic en el botón de edición

## API Endpoints

La aplicación consume los siguientes endpoints:
- Proyectos: `https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects`
- Tareas: `https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/tasks`

## Características Implementadas

- [x] Vistas para proyectos y tareas con tablas dinámicas
- [x] Filtros para proyectos y tareas
- [x] Formularios con validaciones
- [x] Componentes reutilizables (tabla, formularios, filtros)
- [x] Diseño responsivo con TailwindCSS
- [x] Gestión de estado con Pinia
- [x] Mensajes de error y loaders durante las peticiones
- [x] Documentación básica (este README)

## Capturas de Pantalla

(Se recomienda incluir capturas de las vistas principales, formularios y el diseño responsivo)

## Autor

Alex Farfán - [GitHub](https://github.com/loweffort-alt)
