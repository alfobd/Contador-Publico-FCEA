// Lista completa de materias con semestre y prerrequisitos
const subjects = [
  { semester: 1, name: "Conceptos Contables", prerequisites: [] },
  { semester: 1, name: "Administración y Gestión de las Organizaciones 1", prerequisites: [] },
  { semester: 1, name: "Análisis de las interacciones económicas", prerequisites: [] },
  { semester: 1, name: "Cálculo 1", prerequisites: [] },

  { semester: 2, name: "Contabilidad General 1", prerequisites: ["Conceptos Contables"] },
  { semester: 2, name: "Derecho y Actividad Empresarial 1", prerequisites: [] },
  { semester: 2, name: "Economía Descriptiva", prerequisites: ["Análisis de las interacciones económicas"] },
  { semester: 2, name: "Ciencia Política", prerequisites: [] },

  { semester: 3, name: "Contabilidad General 2", prerequisites: ["Contabilidad General 1"] },
  { semester: 3, name: "Derecho y Actividad Empresarial 2", prerequisites: ["Derecho y Actividad Empresarial 1"] },
  { semester: 3, name: "Intro a la Estadística", prerequisites: ["Cálculo 1"] },
  { semester: 3, name: "Procesos Contables", prerequisites: ["Administración y Gestión de las Organizaciones 1", "Conceptos Contables"] },
  { semester: 3, name: "Principios de Análisis Macroeconómico Aplicado", prerequisites: [] },

  { semester: 4, name: "Contabilidad General 3", prerequisites: ["Contabilidad General 2"] },
  { semester: 4, name: "Matemática Financiera", prerequisites: ["Cálculo 1"] },
  { semester: 4, name: "Derecho Digital", prerequisites: [] },
  { semester: 4, name: "Legislación Laboral y Seguridad Social", prerequisites: [] },
  { semester: 4, name: "Sociología Económica", prerequisites: [] },
  { semester: 4, name: "Sistemas de Información", prerequisites: [] },

  { semester: 5, name: "Modelos y Gestión de Costos", prerequisites: [] },
  { semester: 5, name: "Derecho Tributario", prerequisites: [] },
  { semester: 5, name: "Contabilidad Social y Ambiental", prerequisites: [] },
  { semester: 5, name: "Ética y Ejercicio Profesional", prerequisites: [] },
  { semester: 5, name: "Marketing Básico", prerequisites: [] },

  { semester: 6, name: "Contabilidad Superior 1", prerequisites: ["Contabilidad General 3"] },
  { semester: 6, name: "Contabilidad Gerencial", prerequisites: [] },
  { semester: 6, name: "Tributaria 1", prerequisites: ["Contabilidad General 3", "Derecho Tributario"] },
  { semester: 6, name: "Administración y Planificación Financiera", prerequisites: [] },
  { semester: 6, name: "Control Interno", prerequisites: [] },
  { semester: 6, name: "Marketing Estratégico", prerequisites: [] },

  { semester: 7, name: "Auditoria 1", prerequisites: [] },
  { semester: 7, name: "Tributaria 2", prerequisites: ["Tributaria 1"] },
  { semester: 7, name: "Finanzas Corporativas", prerequisites: ["Administración y Gestión de las Organizaciones 1", "Matemática Financiera", "Intro a la Estadística"] },
  { semester: 7, name: "Marketing Digital", prerequisites: ["Marketing Estratégico"] },

  { semester: 8, name: "Auditoria Interna", prerequisites: ["Control Interno", "Auditoria 1"] },
  { semester: 8, name: "Informes Profesionales del Contador Público", prerequisites: ["Auditoria 1"] },
  { semester: 8, name: "Contabilidad en sistemas integrados de Gestión", prerequisites: [] },
  { semester: 8, name: "Proyectos de Inversión", prerequisites: ["Finanzas Corporativas"] }
];

const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 8; i++) {
  const column = document.createElement("div");
  column.classList.add("semester-column");

  const title = document.createElement("div");
  title.classList.add("semester-title");
  title.textContent = `Semestre ${i}`;
  column.appendChild(title);

  subjects.filter(sub => sub.semester === i).forEach(sub => {
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
      box.classList.toggle("completed");
      prereq.style.display = prereq.style.display === "block" ? "none" : "block";
    });

    column.appendChild(box);
  });

  gridContainer.appendChild(column);
}
