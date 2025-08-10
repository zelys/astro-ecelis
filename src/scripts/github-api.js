// github-api.js - Manejo de la API de GitHub
export async function fetchGitHubProjects() {
  const projectsContainer = document.getElementById("github-projects");
  const repositories = ["analisis-evasion", "sistema-medico"];

  try {
    projectsContainer.innerHTML = "";

    for (const repo of repositories) {
      try {
        const response = await fetch(
          `https://api.github.com/repos/zelys/${repo}`
        );

        if (response.ok) {
          const data = await response.json();
          const projectCard = createProjectCard(data);
          projectsContainer.appendChild(projectCard);
        } else {
          console.log(`Repositorio ${repo} no encontrado`);
        }
      } catch (error) {
        console.error(`Error al obtener ${repo}:`, error);
      }
    }

    // Si no se cargaron proyectos, mostrar proyectos de ejemplo
    if (projectsContainer.children.length === 0) {
      showExampleProjects();
    }
  } catch (error) {
    console.error("Error al cargar proyectos:", error);
    showExampleProjects();
  }
}

function createProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "project-item";

  // Formatear la fecha
  const updatedDate = new Date(repo.updated_at);
  const formattedDate = updatedDate.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  card.innerHTML = `
    <div class="project-header">
      <i class="fab fa-github project-icon"></i>
      <a href="${repo.html_url}" target="_blank" class="project-title">${repo.name}</a>
    </div>
    <p class="project-description">
      ${
        repo.description ||
        "Proyecto desarrollado como parte de mi formación académica y experiencia práctica."
      }
    </p>
    <div class="project-meta">
      <span class="project-language">${repo.language || "Múltiples"}</span>
      <div class="project-stats">
        <div class="stat-item">
          <i class="fas fa-star"></i>
          <span>${repo.stargazers_count || 0}</span>
          <i class="fas fa-code-branch"></i>
          <span>${repo.forks_count || 0}</span>
          <i class="fas fa-clock"></i>
          <span>${formattedDate}</span>
        </div>
      </div>
    </div>
    <div class="project-actions">
      <a href="${
        repo.html_url
      }" target="_blank" rel="noopener" class="github-btn">
        <i class="fab fa-github"></i>
        Ver en GitHub
      </a>
    </div>
  `;

  return card;
}

function showExampleProjects() {
  const projectsContainer = document.getElementById("github-projects");

  const exampleProjects = [
    {
      name: "analisis-evasion",
      description:
        "Sistema de análisis para detectar patrones de evasión utilizando técnicas de ciencia de datos y machine learning con Python, implementando algoritmos de clasificación y visualización de datos.",
      language: "Python",
      stars: 5,
      forks: 2,
      updated_at: "2025-01-15T00:00:00Z",
      url: "https://github.com/zelys/analisis-evasion",
    },
    {
      name: "sistema-medico",
      description:
        "Este proyecto es una API de sistema médico. El backend está construido en Java y utiliza una base de datos PostgreSQL para almacenar la información. El frontend es una página web simple que usa HTML, CSS y JavaScript para la interfaz de usuario.",
      language: "Java",
      stars: 3,
      forks: 1,
      updated_at: "2025-08-08T00:00:00Z",
      url: "https://github.com/zelys/sistema-medico",
    },
  ];

  projectsContainer.innerHTML = "";

  exampleProjects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-item";

    const updatedDate = new Date(project.updated_at);
    const formattedDate = updatedDate.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    card.innerHTML = `
      <div class="project-header">
        <i class="fab fa-github project-icon"></i>
        <a href="${project.url}" target="_blank" class="project-title">${project.name}</a>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-meta">
        <span class="project-language">${project.language}</span>
        <div class="project-stats">
          <div class="stat-item">
            <i class="fas fa-star"></i>
            <span>${project.stars}</span>
            <i class="fas fa-code-branch"></i>
            <span>${project.forks}</span>
            <i class="fas fa-clock"></i>
            <span>${formattedDate}</span>
          </div>
        </div>
      </div>
      <div class="project-actions">
        <a href="${project.url}" target="_blank" rel="noopener" class="github-btn">
          <i class="fab fa-github"></i>
          Ver en GitHub
        </a>
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}
