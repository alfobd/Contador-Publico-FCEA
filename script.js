const subjects = [
  {
    semester: 1,
    name: "Conceptos Contables",
    prerequisites: []
  },
  {
    semester: 1,
    name: "Administración y Gestión de las Organizaciones 1",
    prerequisites: []
  },
  {
    semester: 1,
    name: "Análisis de las interacciones económicas",
    prerequisites: []
  },
  {
    semester: 1,
    name: "Cálculo 1",
    prerequisites: []
  },

  {
    semester: 2,
    name: "Contabilidad General 1",
    prerequisites: ["Conceptos Contables"]
  },
  {
    semester: 2,
    name: "Derecho y Actividad Empresarial 1",
    prerequisites: []
  },
  {
    semester: 2,
    name: "Economía Descriptiva",
    prerequisites: ["Análisis de las interacciones económicas"]
  },
  {
    semester: 2,
    name: "Ciencia Política",
    prerequisites: []
  },

  // Puedes seguir agregando todas las materias hasta el 8vo semestre
  {
    semester: 8,
    name: "Proyectos de Inversión",
    prerequisites: ["Finanzas Corporativas"]
  }
];

const gridContainer = document.querySelector(".grid-container");

// Crear columnas para cada semestre
for (let i = 1; i <= 8; i++) {
  const column = document.createElement("div");
  column.classList.add("semester-column");

  const title = document.createElement("div");
  title.classList.add("semester-title");
  title.textContent = `Semestre ${i}`;
  column.appendChild(title);

  // Añadir materias
  subjects
    .filter(sub => sub.semester === i)
    .forEach(sub => {
      const box = document.createElement("div");
      box.classList.add("subject");
      box.textContent = sub.name;

      const prereq = document.createElement("div");
      prereq.classList.add("prerequisites");
      prereq.textContent = sub.prerequisites.length
        ? `Prerrequisitos: ${sub.prerequisites.join(", ")}`
        : "Sin prerrequisitos";

      box.appendChild(prereq);
      box.addEventListener("click", () => {
        prereq.style.display = prereq.style.display === "block" ? "none" : "block";
      });

      column.appendChild(box);
    });

  gridContainer.appendChild(column);
}
