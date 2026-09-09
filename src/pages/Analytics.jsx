import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  CheckCircle2,
  Clock3,
  Users,
  MoreHorizontal,
} from "lucide-react";

function Analytics() {
  const [period, setPeriod] = useState("6");

  const analyticsData = {
    6: {
      label: "Last 6 Months",
      description: "Project activity during the last 6 months",
      stats: [
        {
          title: "Project Completion",
          value: "82%",
          change: "8.4% from last month",
          type: "positive",
          icon: CheckCircle2,
          color: "purple",
        },
        {
          title: "Task Completion",
          value: "74%",
          change: "5.7% from last month",
          type: "positive",
          icon: BarChart3,
          color: "blue",
        },
        {
          title: "Team Productivity",
          value: "91%",
          change: "6.2% from last month",
          type: "positive",
          icon: Users,
          color: "green",
        },
        {
          title: "Overdue Tasks",
          value: "12",
          change: "3.1% from last month",
          type: "negative",
          icon: Clock3,
          color: "orange",
        },
      ],
      chart: [
        { label: "Jan", value: 52 },
        { label: "Feb", value: 64 },
        { label: "Mar", value: 58 },
        { label: "Apr", value: 76 },
        { label: "May", value: 68 },
        { label: "Jun", value: 88 },
      ],
      tasks: {
        total: 156,
        completed: 42,
        progress: 35,
        pending: 23,
      },
      team: [
        { initials: "AS", name: "Alex Smith", tasks: 12, productivity: 92 },
        { initials: "MK", name: "Maria Khan", tasks: 10, productivity: 86 },
        { initials: "RJ", name: "Ryan Jones", tasks: 8, productivity: 74 },
      ],
    },

    3: {
      label: "Last 3 Months",
      description: "Project activity during the last 3 months",
      stats: [
        {
          title: "Project Completion",
          value: "76%",
          change: "6.8% from previous period",
          type: "positive",
          icon: CheckCircle2,
          color: "purple",
        },
        {
          title: "Task Completion",
          value: "69%",
          change: "4.9% from previous period",
          type: "positive",
          icon: BarChart3,
          color: "blue",
        },
        {
          title: "Team Productivity",
          value: "87%",
          change: "5.3% from previous period",
          type: "positive",
          icon: Users,
          color: "green",
        },
        {
          title: "Overdue Tasks",
          value: "18",
          change: "2.4% from previous period",
          type: "negative",
          icon: Clock3,
          color: "orange",
        },
      ],
      chart: [
        { label: "Apr", value: 76 },
        { label: "May", value: 68 },
        { label: "Jun", value: 88 },
      ],
      tasks: {
        total: 112,
        completed: 46,
        progress: 32,
        pending: 22,
      },
      team: [
        { initials: "AS", name: "Alex Smith", tasks: 9, productivity: 88 },
        { initials: "MK", name: "Maria Khan", tasks: 8, productivity: 82 },
        { initials: "RJ", name: "Ryan Jones", tasks: 6, productivity: 71 },
      ],
    },

    year: {
      label: "This Year",
      description: "Project activity during this year",
      stats: [
        {
          title: "Project Completion",
          value: "89%",
          change: "11.2% from last year",
          type: "positive",
          icon: CheckCircle2,
          color: "purple",
        },
        {
          title: "Task Completion",
          value: "81%",
          change: "9.6% from last year",
          type: "positive",
          icon: BarChart3,
          color: "blue",
        },
        {
          title: "Team Productivity",
          value: "94%",
          change: "7.8% from last year",
          type: "positive",
          icon: Users,
          color: "green",
        },
        {
          title: "Overdue Tasks",
          value: "9",
          change: "4.2% from last year",
          type: "negative",
          icon: Clock3,
          color: "orange",
        },
      ],
      chart: [
        { label: "Jan", value: 58 },
        { label: "Feb", value: 64 },
        { label: "Mar", value: 61 },
        { label: "Apr", value: 76 },
        { label: "May", value: 72 },
        { label: "Jun", value: 84 },
        { label: "Jul", value: 79 },
        { label: "Aug", value: 91 },
        { label: "Sep", value: 86 },
        { label: "Oct", value: 94 },
        { label: "Nov", value: 89 },
        { label: "Dec", value: 96 },
      ],
      tasks: {
        total: 428,
        completed: 51,
        progress: 31,
        pending: 18,
      },
      team: [
        { initials: "AS", name: "Alex Smith", tasks: 34, productivity: 96 },
        { initials: "MK", name: "Maria Khan", tasks: 29, productivity: 91 },
        { initials: "RJ", name: "Ryan Jones", tasks: 25, productivity: 84 },
      ],
    },
  };

  const data = analyticsData[period];

  return (
    <section className="dashboard analytics-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <p className="greeting">INSIGHTS</p>

          <h1>Analytics</h1>

          <p className="page-description">
            Track project performance and team productivity.
          </p>
        </div>

        <select
          className="analytics-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="6">Last 6 Months</option>
          <option value="3">Last 3 Months</option>
          <option value="year">This Year</option>
        </select>
      </div>


      {/* SUMMARY CARDS */}
      <div className="analytics-stats">

        {data.stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={index}>

              <div className="stat-top">
                <span>{stat.title}</span>

                <div className={`stat-icon ${stat.color}`}>
                  <Icon size={20} />
                </div>
              </div>

              <div className="stat-number">
                {stat.value}
              </div>

              <div className={`analytics-change ${stat.type}`}>
                {stat.type === "positive" ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}

                <span>{stat.change}</span>
              </div>

            </div>
          );
        })}

      </div>


      {/* CHARTS */}
      <div className="analytics-main-grid">

        {/* PROJECT PERFORMANCE */}
        <div className="card analytics-chart-card">

          <div className="card-header">

            <div>
              <h2>Project Performance</h2>

              <p>{data.description}</p>
            </div>

            <button className="more-btn">
              <MoreHorizontal size={18} />
            </button>

          </div>


          <div className="analytics-chart">

            <div className="chart-y-labels">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>


            <div className="chart-content">

              <div className="chart-grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>


              <div className="analytics-bars">

                {data.chart.map((item, index) => (
                  <div
                    className="analytics-bar-wrapper"
                    key={index}
                  >
                    <div
                      className="analytics-bar"
                      style={{
                        height: `${item.value}%`,
                      }}
                      title={`${item.label}: ${item.value}%`}
                    ></div>

                    <span>{item.label}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* TASK DISTRIBUTION */}
        <div className="card task-distribution-card">

          <div className="card-header">

            <div>
              <h2>Task Distribution</h2>

              <p>
                Current task status
              </p>
            </div>

            <button className="more-btn">
              <MoreHorizontal size={18} />
            </button>

          </div>


          <div className="distribution-content">

            <div
  className="analytics-donut"
  style={{
    background: `conic-gradient(
      #625cf2 0% ${data.tasks.completed}%,
      #3f82f1 ${data.tasks.completed}% ${
        data.tasks.completed + data.tasks.progress
      }%,
      #d6dae2 ${
        data.tasks.completed + data.tasks.progress
      }% 100%
    )`,
  }}
>
  <div className="analytics-donut-center">
    <strong>{data.tasks.total}</strong>
    <span>Total Tasks</span>
  </div>
</div>

            <div className="distribution-list">

              <div className="distribution-item">
                <div>
                  <i className="status-dot completed"></i>
                  <span>Completed</span>
                </div>

                <strong>{data.tasks.completed}%</strong>
              </div>


              <div className="distribution-item">
                <div>
                  <i className="status-dot progress"></i>
                  <span>In Progress</span>
                </div>

                <strong>{data.tasks.progress}%</strong>
              </div>


              <div className="distribution-item">
                <div>
                  <i className="status-dot pending"></i>
                  <span>Pending</span>
                </div>

                <strong>{data.tasks.pending}%</strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* TEAM PRODUCTIVITY */}
      <div className="card team-analytics-card">

        <div className="card-header">

          <div>
            <h2>Team Productivity</h2>

            <p>
              Individual team performance for {data.label.toLowerCase()}
            </p>
          </div>

          <button className="view-btn">
            View Team
          </button>

        </div>


        <div className="team-analytics-list">

          {data.team.map((member, index) => (

            <div
              className="team-analytics-row"
              key={index}
            >

              <div className="team-member-info">

                <div className="analytics-avatar">
                  {member.initials}
                </div>

                <div>
                  <strong>{member.name}</strong>
                  <span>
                    {member.tasks} completed tasks
                  </span>
                </div>

              </div>


              <div className="team-productivity">

                <div className="productivity-top">
                  <span>{member.productivity}%</span>
                </div>

                <div className="productivity-bar">
                  <div
                    style={{
                      width: `${member.productivity}%`,
                    }}
                  ></div>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Analytics;