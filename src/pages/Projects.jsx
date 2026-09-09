import React, { useState } from "react";
import {
  FolderKanban,
  Smartphone,
  ChartPie,
  Megaphone,
  Cloud,
  GraduationCap,
  Search,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Website Redesign",
    category: "Marketing",
    description: "Redesign and improve the company's main website.",
    progress: 78,
    deadline: "Aug 28, 2026",
    budget: "$8,500",
    status: "Active",
    icon: FolderKanban,
  },
  {
    id: 2,
    title: "Mobile App",
    category: "Development",
    description: "Build a modern mobile application for customers.",
    progress: 56,
    deadline: "Sep 05, 2026",
    budget: "$12,000",
    status: "Active",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Analytics Platform",
    category: "Data",
    description: "Create an analytics platform for business insights.",
    progress: 92,
    deadline: "Aug 20, 2026",
    budget: "$7,200",
    status: "Completed",
    icon: ChartPie,
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Marketing",
    description: "Launch a new social media marketing campaign.",
    progress: 34,
    deadline: "Sep 18, 2026",
    budget: "$5,800",
    status: "Active",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Cloud Migration",
    category: "Infrastructure",
    description: "Move company services to a scalable cloud platform.",
    progress: 64,
    deadline: "Oct 02, 2026",
    budget: "$15,500",
    status: "On Hold",
    icon: Cloud,
  },
  {
    id: 6,
    title: "Learning Portal",
    category: "Education",
    description: "Develop an online learning platform for students.",
    progress: 21,
    deadline: "Oct 15, 2026",
    budget: "$9,700",
    status: "Active",
    icon: GraduationCap,
  },
];

function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || project.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="dashboard projects-page">

      {/* PAGE HEADER */}
      <div className="page-header">

        <div>
          <p className="greeting">WORKSPACE</p>

          <h1>Projects</h1>

          <p className="page-description">
            Manage and track all your team's projects.
          </p>
        </div>

        <button className="primary-btn">
          <Plus size={17} />
          New Project
        </button>

      </div>


      {/* SEARCH + FILTER */}
      <div className="project-toolbar">

        <div className="search-box">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="project-filters">

          {["All", "Active", "Completed", "On Hold"].map((item) => (

            <button
              key={item}
              className={`filter-btn ${
                filter === item ? "active" : ""
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </div>


      {/* PROJECT COUNT */}
      <div className="project-result-count">
        Showing {filteredProjects.length} project
        {filteredProjects.length !== 1 ? "s" : ""}
      </div>


      {/* PROJECT GRID */}
      <div className="projects-grid">

        {filteredProjects.map((project) => {

          const Icon = project.icon;

          return (
            <div className="project-card" key={project.id}>

              <div className="project-card-top">

                <div className="large-project-icon">
                  <Icon size={21} />
                </div>

                <button className="more-btn">
                  <MoreHorizontal size={18} />
                </button>

              </div>


              <div className="project-card-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>


                <div className="project-progress-info">

                  <span>Progress</span>

                  <strong>{project.progress}%</strong>

                </div>


                <div className="project-progress">

                  <div
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />

                </div>


                <div className="project-card-details">

                  <div>
                    <span>Deadline</span>
                    <strong>{project.deadline}</strong>
                  </div>

                  <div>
                    <span>Budget</span>
                    <strong>{project.budget}</strong>
                  </div>

                </div>

              </div>


              <div className="project-card-footer">

                <div className="team-avatars">
                  <span>AS</span>
                  <span>MK</span>
                  <span>RJ</span>
                  <span>+2</span>
                </div>

                <span
                  className={`status ${
                    project.status === "Completed"
                      ? "completed-status"
                      : project.status === "On Hold"
                      ? "hold-status"
                      : "active-status"
                  }`}
                >
                  {project.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>


      {/* NO RESULTS */}
      {filteredProjects.length === 0 && (

        <div className="no-projects">

          <FolderKanban size={40} />

          <h3>No projects found</h3>

          <p>
            Try another search term or filter.
          </p>

        </div>

      )}

    </section>
  );
}

export default Projects;