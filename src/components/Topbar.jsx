import { Bell, Menu } from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">

      <div className="mobile-left">

        <button className="menu-btn">
          <Menu size={20} />
        </button>

        <div className="mobile-logo">
          Nexora
        </div>

      </div>

      <div className="breadcrumb">

        <span>Workspace</span>

        <span className="breadcrumb-arrow">›</span>

        <strong>Dashboard</strong>

      </div>

      <div className="topbar-actions">

        <button className="icon-btn">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="top-avatar">
          AS
        </div>

      </div>

    </header>
  );
}

export default Topbar;