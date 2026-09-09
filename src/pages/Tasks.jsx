import React, { useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  CheckCircle2,
  Clock3,
  Circle,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Finalize homepage design",
    project: "Website Redesign",
    assignee: "AS",
    priority: "High",
    dueDate: "Aug 20, 2026",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Create mobile wireframes",
    project: "Mobile App",
    assignee: "MK",
    priority: "Medium",
    dueDate: "Aug 24, 2026",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Prepare analytics report",
    project: "Analytics Platform",
    assignee: "RJ",
    priority: "High",
    dueDate: "Aug 18, 2026",
    status: "Completed",
  },
  {
    id: 4,
    title: "Schedule social media posts",
    project: "Social Media Campaign",
    assignee: "AS",
    priority: "Low",
    dueDate: "Aug 28, 2026",
    status: "Pending",
  },
  {
    id: 5,
    title: "Review cloud architecture",
    project: "Cloud Migration",
    assignee: "HA",
    priority: "High",
    dueDate: "Sep 02, 2026",
    status: "Pending",
  },
  {
    id: 6,
    title: "Build student dashboard",
    project: "Learning Portal",
    assignee: "SA",
    priority: "Medium",
    dueDate: "Sep 08, 2026",
    status: "In Progress",
  },
];

function Tasks() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.project.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status) => {
    if (status === "Completed") {
      return <CheckCircle2 size={17} />;
    }

    if (status === "In Progress") {
      return <Clock3 size={17} />;
    }

    return <Circle size={17} />;
  };

  return (
    <section className="dashboard tasks-page">

      {/* PAGE HEADER */}
      <div className="page-header">

        <div>
          <p className="greeting">WORKSPACE</p>

          <h1>Tasks</h1>

          <p className="page-description">
            Manage and track your team's tasks.
          </p>
        </div>

        <button className="primary-btn">
          <Plus size={17} />
          New Task
        </button>

      </div>


      {/* TASK TOOLBAR */}
      <div className="task-toolbar">

        <div className="search-box">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="task-filters">

          {["All", "In Progress", "Completed", "Pending"].map(
            (item) => (
              <button
                key={item}
                className={`filter-btn ${
                  filter === item ? "active" : ""
                }`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            )
          )}

        </div>

      </div>


      {/* TASK COUNT */}
      <div className="task-result-count">
        Showing {filteredTasks.length} task
        {filteredTasks.length !== 1 ? "s" : ""}
      </div>


      {/* TASK TABLE */}
      <div className="card tasks-card">

        <div className="tasks-table-wrapper">

          <table className="tasks-table">

            <thead>

              <tr>
                <th>TASK</th>
                <th>PROJECT</th>
                <th>ASSIGNEE</th>
                <th>PRIORITY</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
                <th></th>
              </tr>

            </thead>

            <tbody>

              {filteredTasks.map((task) => (

                <tr key={task.id}>

                  {/* TASK */}
                  <td>

                    <div className="task-name">

                      <div
                        className={`task-status-icon ${
                          task.status === "Completed"
                            ? "completed"
                            : task.status === "In Progress"
                            ? "progress"
                            : "pending"
                        }`}
                      >
                        {getStatusIcon(task.status)}
                      </div>

                      <strong>
                        {task.title}
                      </strong>

                    </div>

                  </td>


                  {/* PROJECT */}
                  <td>

                    <span className="task-project">
                      {task.project}
                    </span>

                  </td>


                  {/* ASSIGNEE */}
                  <td>

                    <div className="task-assignee">

                      <div className="task-avatar">
                        {task.assignee}
                      </div>

                      <span>
                        {task.assignee}
                      </span>

                    </div>

                  </td>


                  {/* PRIORITY */}
                  <td>

                    <span
                      className={`priority ${
                        task.priority === "High"
                          ? "high-priority"
                          : task.priority === "Medium"
                          ? "medium-priority"
                          : "low-priority"
                      }`}
                    >
                      {task.priority}
                    </span>

                  </td>


                  {/* DUE DATE */}
                  <td>

                    <span className="task-date">
                      {task.dueDate}
                    </span>

                  </td>


                  {/* STATUS */}
                  <td>

                    <span
                      className={`status ${
                        task.status === "Completed"
                          ? "completed-status"
                          : task.status === "In Progress"
                          ? "active-status"
                          : "pending-status"
                      }`}
                    >
                      {task.status}
                    </span>

                  </td>


                  {/* MORE */}
                  <td>

                    <button className="task-more-btn">
                      <MoreHorizontal size={18} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* NO RESULTS */}
      {filteredTasks.length === 0 && (

        <div className="no-projects">

          <CheckCircle2 size={40} />

          <h3>No tasks found</h3>

          <p>
            Try another search term or filter.
          </p>

        </div>

      )}

    </section>
  );
}

export default Tasks;