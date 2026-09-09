import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  MoreHorizontal,
  Mail,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Project Manager",
    department: "Management",
    email: "alex@nexora.com",
    tasks: 24,
    completed: 22,
    productivity: 92,
    status: "Active",
    initials: "AS",
  },
  {
    id: 2,
    name: "Maria Khan",
    role: "UI/UX Designer",
    department: "Design",
    email: "maria@nexora.com",
    tasks: 20,
    completed: 18,
    productivity: 86,
    status: "Active",
    initials: "MK",
  },
  {
    id: 3,
    name: "Ryan Jones",
    role: "Frontend Developer",
    department: "Development",
    email: "ryan@nexora.com",
    tasks: 18,
    completed: 14,
    productivity: 74,
    status: "Active",
    initials: "RJ",
  },
  {
    id: 4,
    name: "Sarah Ali",
    role: "Data Analyst",
    department: "Data",
    email: "sarah@nexora.com",
    tasks: 21,
    completed: 19,
    productivity: 89,
    status: "Active",
    initials: "SA",
  },
  {
    id: 5,
    name: "Hamza Ahmed",
    role: "Backend Developer",
    department: "Development",
    email: "hamza@nexora.com",
    tasks: 17,
    completed: 13,
    productivity: 78,
    status: "Away",
    initials: "HA",
  },
  {
    id: 6,
    name: "Jessica Miller",
    role: "Marketing Specialist",
    department: "Marketing",
    email: "jessica@nexora.com",
    tasks: 16,
    completed: 15,
    productivity: 91,
    status: "Active",
    initials: "JM",
  },
  {
    id: 7,
    name: "Sam Wilson",
    role: "Product Designer",
    department: "Design",
    email: "sam@nexora.com",
    tasks: 19,
    completed: 16,
    productivity: 82,
    status: "Active",
    initials: "SW",
  },
  {
    id: 8,
    name: "Olivia Brown",
    role: "QA Engineer",
    department: "Development",
    email: "olivia@nexora.com",
    tasks: 15,
    completed: 12,
    productivity: 76,
    status: "Away",
    initials: "OB",
  },
];

function Team() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase()) ||
      member.department.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || member.department === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="dashboard team-page">

      {/* PAGE HEADER */}
      <div className="page-header">

        <div>
          <p className="greeting">WORKSPACE</p>

          <h1>Team</h1>

          <p className="page-description">
            Manage your team members and track their performance.
          </p>
        </div>

        <button className="primary-btn">
          <Plus size={17} />
          Add Member
        </button>

      </div>


      {/* TEAM SUMMARY */}
      <div className="team-summary-grid">

        <div className="stat-card">

          <div className="stat-top">
            <span>Total Members</span>

            <div className="stat-icon purple">
              <Users size={20} />
            </div>
          </div>

          <div className="stat-number">
            18
          </div>

          <div className="team-stat-text">
            15 members active
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-top">
            <span>Active Members</span>

            <div className="stat-icon green">
              <CheckCircle2 size={20} />
            </div>
          </div>

          <div className="stat-number">
            15
          </div>

          <div className="team-stat-text">
            83% of your team
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-top">
            <span>Tasks Completed</span>

            <div className="stat-icon blue">
              <CheckCircle2 size={20} />
            </div>
          </div>

          <div className="stat-number">
            136
          </div>

          <div className="team-stat-text positive">
            ↑ 8.5% this month
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-top">
            <span>Avg. Productivity</span>

            <div className="stat-icon orange">
              <Clock3 size={20} />
            </div>
          </div>

          <div className="stat-number">
            84%
          </div>

          <div className="team-stat-text positive">
            ↑ 5.2% from last month
          </div>

        </div>

      </div>


      {/* SEARCH + FILTERS */}
      <div className="team-toolbar">

        <div className="search-box">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search team members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="team-filters">

          {[
            "All",
            "Management",
            "Design",
            "Development",
            "Data",
            "Marketing",
          ].map((item) => (

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


      {/* RESULT COUNT */}
      <div className="team-result-count">
        Showing {filteredMembers.length} team member
        {filteredMembers.length !== 1 ? "s" : ""}
      </div>


      {/* TEAM GRID */}
      <div className="team-grid">

        {filteredMembers.map((member) => (

          <div className="team-card" key={member.id}>

            {/* CARD TOP */}
            <div className="team-card-top">

              <div className="team-member-avatar">
                {member.initials}
              </div>

              <button className="more-btn">
                <MoreHorizontal size={18} />
              </button>

            </div>


            {/* MEMBER INFO */}
            <div className="team-member-details">

              <h3>
                {member.name}
              </h3>

              <p className="member-role">
                {member.role}
              </p>

              <span className="member-department">
                {member.department}
              </span>

            </div>


            {/* EMAIL */}
            <div className="member-email">

              <Mail size={14} />

              <span>
                {member.email}
              </span>

            </div>


            {/* PRODUCTIVITY */}
            <div className="member-productivity">

              <div className="productivity-header">

                <span>Productivity</span>

                <strong>
                  {member.productivity}%
                </strong>

              </div>

              <div className="member-progress">

                <div
                  style={{
                    width: `${member.productivity}%`,
                  }}
                />

              </div>

            </div>


            {/* TASK INFO */}
            <div className="member-task-info">

              <div>
                <span>Tasks</span>
                <strong>{member.tasks}</strong>
              </div>

              <div>
                <span>Completed</span>
                <strong>{member.completed}</strong>
              </div>

            </div>


            {/* FOOTER */}
            <div className="team-card-footer">

              <span
                className={`member-status ${
                  member.status === "Active"
                    ? "member-active"
                    : "member-away"
                }`}
              >
                <i></i>
                {member.status}
              </span>

              <button className="view-member-btn">
                View Profile
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* NO RESULTS */}
      {filteredMembers.length === 0 && (

        <div className="no-team-members">

          <Users size={40} />

          <h3>No team members found</h3>

          <p>
            Try another search term or department.
          </p>

        </div>

      )}

    </section>
  );
}

export default Team;