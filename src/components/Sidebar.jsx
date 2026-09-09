import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  ListChecks,
  ChartLine,
  Users,
  CalendarDays,
  Settings,
  CircleHelp,
  Zap,
  MoreHorizontal,
  X,
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >

        {/* MOBILE CLOSE BUTTON */}
        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* LOGO */}
        <div className="logo">
          <div className="logo-icon">
            N
          </div>

          <span>Nexora</span>
        </div>


        {/* WORKSPACE */}
        <div className="workspace-title">
          WORKSPACE
        </div>


        {/* NAVIGATION */}
        <nav className="sidebar-nav">

          <NavLink
            to="/"
            end
            className="nav-item"
            onClick={onClose}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>


          <NavLink
            to="/projects"
            className="nav-item"
            onClick={onClose}
          >
            <FolderKanban size={19} />
            <span>Projects</span>
          </NavLink>


          <NavLink
            to="/tasks"
            className="nav-item"
            onClick={onClose}
          >
            <ListChecks size={19} />
            <span>Tasks</span>
          </NavLink>


          <NavLink
            to="/analytics"
            className="nav-item"
            onClick={onClose}
          >
            <ChartLine size={19} />
            <span>Analytics</span>
          </NavLink>


          <NavLink
            to="/team"
            className="nav-item"
            onClick={onClose}
          >
            <Users size={19} />
            <span>Team</span>
          </NavLink>


          <NavLink
            to="/calendar"
            className="nav-item"
            onClick={onClose}
          >
            <CalendarDays size={19} />
            <span>Calendar</span>
          </NavLink>

        </nav>


        {/* SETTINGS */}
        <div className="workspace-title settings-title">
          SETTINGS
        </div>


        <nav className="sidebar-nav">

          <NavLink
            to="/settings"
            className="nav-item"
            onClick={onClose}
          >
            <Settings size={19} />
            <span>Settings</span>
          </NavLink>


         <NavLink
  to="/help"
  className="nav-item"
  onClick={onClose}
>
  <CircleHelp size={19} />
  <span>Help Center</span>
</NavLink>
        </nav>


        {/* BOTTOM */}
        <div className="sidebar-bottom">

          <div className="upgrade-card">

            <div className="upgrade-icon">
              <Zap size={18} />
            </div>

            <h4>
              Upgrade Plan
            </h4>

            <p>
              Get more powerful features for your team.
            </p>

            <button>
              Upgrade Now
            </button>

          </div>


          <div className="user-profile">

            <div className="avatar">
              AS
            </div>

            <div className="user-info">
              <strong>
                Admin User
              </strong>

              <span>
                Administrator
              </span>
            </div>

            <MoreHorizontal size={18} />

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;