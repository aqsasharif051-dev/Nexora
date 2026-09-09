import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  Menu,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import HelpCenter from "./pages/HelpCenter";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />


        <main className="main-content">

          {/* MOBILE TOPBAR */}
          <div className="mobile-topbar">

            <button
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <div className="mobile-brand">
              <div className="mobile-brand-icon">
                N
              </div>

              <span>Nexora</span>
            </div>

          </div>
<Routes>

  <Route path="/" element={<Dashboard />} />

  <Route path="/projects" element={<Projects />} />

  <Route path="/tasks" element={<Tasks />} />

  <Route path="/analytics" element={<Analytics />} />

  <Route path="/team" element={<Team />} />

  <Route path="/calendar" element={<Calendar />} />

  <Route path="/settings" element={<Settings />} />

  <Route path="/help" element={<HelpCenter />} />

</Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;