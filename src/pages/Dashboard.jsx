import React from "react";
import {
  FolderKanban,
  ListChecks,
  Users,
  Wallet,
  ArrowUp,
  Plus,
  MoreHorizontal,
} from "lucide-react";

function Dashboard() {
  return (
    <section className="dashboard">

      {/* PAGE HEADER */}
      <div className="page-header">

        <div>
          <p className="greeting">Good morning, Admin 👋</p>

          <h1>Dashboard</h1>

          <p className="page-description">
            Here's what's happening with your projects today.
          </p>
        </div>

        <button className="primary-btn">
          <Plus size={18} />
          New Project
        </button>

      </div>


      {/* STAT CARDS */}
      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-top">
            <span>Total Projects</span>

            <div className="stat-icon purple">
              <FolderKanban size={20} />
            </div>
          </div>

          <div className="stat-number">
            24
          </div>

          <div className="stat-bottom">
            <span className="positive">
              <ArrowUp size={13} />
              12.5%
            </span>

            <span>vs last month</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-top">
            <span>Active Tasks</span>

            <div className="stat-icon blue">
              <ListChecks size={20} />
            </div>
          </div>

          <div className="stat-number">
            156
          </div>

          <div className="stat-bottom">
            <span className="positive">
              <ArrowUp size={13} />
              8.2%
            </span>

            <span>vs last month</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-top">
            <span>Team Members</span>

            <div className="stat-icon green">
              <Users size={20} />
            </div>
          </div>

          <div className="stat-number">
            18
          </div>

          <div className="stat-bottom">
            <span className="positive">
              <ArrowUp size={13} />
              4.3%
            </span>

            <span>vs last month</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-top">
            <span>Total Budget</span>

            <div className="stat-icon orange">
              <Wallet size={20} />
            </div>
          </div>

          <div className="stat-number">
            $24,590
          </div>

          <div className="stat-bottom">
            <span className="positive">
              <ArrowUp size={13} />
              15.8%
            </span>

            <span>vs last month</span>
          </div>

        </div>

      </div>


      {/* ANALYTICS SECTION */}
      <div className="analytics-grid">

        {/* PROJECT OVERVIEW */}
        <div className="card project-overview">

          <div className="card-header">

            <div>
              <h2>Project Overview</h2>

              <p>
                Project activity over the last 6 months
              </p>
            </div>

            <select>
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
            </select>

          </div>

          <div className="chart-placeholder">

            <div className="chart-bars">

              <div style={{ height: "35%" }}></div>
              <div style={{ height: "48%" }}></div>
              <div style={{ height: "42%" }}></div>
              <div style={{ height: "67%" }}></div>
              <div style={{ height: "52%" }}></div>
              <div style={{ height: "78%" }}></div>
              <div style={{ height: "63%" }}></div>
              <div style={{ height: "88%" }}></div>

            </div>

            <div className="chart-labels">

              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>

            </div>

          </div>

        </div>


        {/* TASK STATUS */}
        <div className="card task-status">

          <div className="card-header">

            <div>
              <h2>Tasks by Status</h2>

              <p>
                Current task distribution
              </p>
            </div>

            <button className="more-btn">
              <MoreHorizontal size={18} />
            </button>

          </div>

          <div className="donut-container">

            <div className="donut">

              <div className="donut-center">

                <strong>156</strong>

                <span>Tasks</span>

              </div>

            </div>

          </div>

          <div className="status-list">

            <div>
              <span>
                <i className="status-dot completed"></i>
                Completed
              </span>

              <strong>42%</strong>
            </div>

            <div>
              <span>
                <i className="status-dot progress"></i>
                In Progress
              </span>

              <strong>35%</strong>
            </div>

            <div>
              <span>
                <i className="status-dot pending"></i>
                Pending
              </span>

              <strong>23%</strong>
            </div>

          </div>

        </div>

      </div>
      

    </section>
    
  );
}

export default Dashboard;