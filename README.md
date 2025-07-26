# ✅ TaskRios — App de Tareas con TypeScript

Una aplicación sencilla de tareas (To-Do List) desarrollada desde cero con **React + TypeScript**, usando buenas prácticas, tipado estricto, estado global con `useReducer`, filtros, edición en línea, y persistencia simulada con servicios fake (como JSONBin).

---

## 🚀 Tecnologías usadas

- ⚛️ React
- 🟦 TypeScript
- 🪄 @formkit/auto-animate
- 🧠 useReducer + useEffect
- 🎨 CSS puro / Tailwind (opcional)
- 🌐 JSONBin como servidor simulado (mock API)

---

## 🧩 Funcionalidades

- Agregar tareas nuevas
- Editar el título (doble clic)
- Marcar como completada
- Eliminar tareas
- Filtrar por: todas / activas / completadas
- Eliminar todas las completadas
- Persistencia de tareas simulada (servicio remoto)
- Animaciones suaves con auto-animate

---

## 📁 Estructura del proyecto

src/
├── components/
│ ├── Todo.tsx
│ ├── Todos.tsx
│ └── Footer.tsx
├── services/
│ └── todos.ts
├── const/
│ └── index.ts
├── Types/
│ └── index.ts
└── hooks/
└── useTodos.ts


---

## 📦 Instalación y uso

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/taskrios.git

# Entra al proyecto
cd taskrios

# Instala dependencias
npm install

# Corre en modo desarrollo
npm run dev

📝 Ejemplo de uso

import { Todos } from './components/Todos'
import { useTodos } from './hooks/useTodos'

const App = () => {
  const {
    todos,
    activeCount,
    completedCount,
    filterSelected,
    handleCompleted,
    handleClearCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle
  } = useTodos()

  return (
    <div className="app">
      <Todos
        todos={todos}
        setCompleted={handleCompleted}
        setTitle={handleUpdateTitle}
        removeTodo={handleRemove}
      />
    </div>
  )
}

👨‍💻 Autor

    🧑 Santy (@Santy401)

📜 Licencia

MIT © 2025 - Santy Castellar


---

¿Querés que también te lo traduzca al inglés para que se vea más pro en GitHub? ¿O lo dejamos solo en español por ahora?

