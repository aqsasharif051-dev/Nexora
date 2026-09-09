import React, { useState, useEffect } from "react";
import {
  User,
  Bell,
  Shield,
  Palette,
  Lock,
  Mail,
  Moon,
  Sun,
  Monitor,
  Check,
  Save,
  Smartphone,
  Trash2,
  X,
  LogOut,
} from "lucide-react";

const THEME_KEY = "nexora-theme";
const PROFILE_KEY = "nexora-profile";
const NOTIF_KEY = "nexora-notifications";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  // Load saved theme on first render, default to "light"
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) || "light"
  );

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(PROFILE_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          name: "Aqsa Sharif",
          email: "aqsa@example.com",
          role: "Data Analyst",
          phone: "",
        };
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem(NOTIF_KEY);
    return saved
      ? JSON.parse(saved)
      : { email: true, tasks: true, projects: false, team: true };
  });

  const [toast, setToast] = useState("");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [sessionsVisible, setSessionsVisible] = useState(false);
  const [sessions, setSessions] = useState([
    { id: 1, device: "Windows · Chrome", location: "Lahore, PK", active: true },
    { id: 2, device: "Android · App", location: "Lahore, PK", active: false },
  ]);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "security", label: "Security", icon: Shield },
  ];

  // Apply theme to the whole page whenever it changes
  useEffect(() => {
    const resolved =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;
    document.documentElement.setAttribute("data-theme", resolved);
  }, [theme]);

  // Auto-hide toast after 2.5s
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const toggleNotification = (name) => {
    setNotifications((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    setToast(`Theme set to ${newTheme}`);
  };

  const handleSaveChanges = () => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    localStorage.setItem(NOTIF_KEY, JSON.stringify(notifications));
    localStorage.setItem(THEME_KEY, theme);
    setToast("Changes saved successfully");
  };

  const handleSignOutSession = (id) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
    setToast("Session signed out");
  };

  return (
    <section className="dashboard settings-page">
      {/* PAGE HEADER */}
      <div className="page-header settings-header">
        <div>
          <p className="page-eyebrow">ACCOUNT</p>
          <h1>Settings</h1>
          <p className="page-description">
            Manage your account, preferences and workspace settings.
          </p>
        </div>

        <button className="save-settings-btn" onClick={handleSaveChanges}>
          <Save size={17} />
          Save Changes
        </button>
      </div>

      {/* SETTINGS LAYOUT */}
      <div className="settings-layout">
        {/* SETTINGS SIDEBAR */}
        <aside className="settings-nav">
          <div className="settings-nav-title">Settings</div>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`settings-nav-item ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}

          <div className="settings-nav-divider"></div>

          <button className="settings-nav-item danger">
            <Trash2 size={18} />
            <span>Delete Account</span>
          </button>
        </aside>

        {/* SETTINGS CONTENT */}
        <div className="settings-content">
          {/* PROFILE */}
          {activeTab === "profile" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <div className="section-icon">
                  <User size={20} />
                </div>
                <div>
                  <h2>Profile Information</h2>
                  <p>Update your personal information and profile details.</p>
                </div>
              </div>

              <div className="profile-preview">
                <div className="profile-avatar">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <h3>{profile.name}</h3>
                  <p>{profile.role}</p>
                  <button className="change-photo-btn">Change Photo</button>
                </div>
              </div>

              <div className="settings-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleProfileChange("name", e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-with-icon">
                    <Mail size={17} />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => handleProfileChange("role", e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="+92 XXX XXXXXXX"
                    value={profile.phone}
                    onChange={(e) => handleProfileChange("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <div className="section-icon">
                  <Bell size={20} />
                </div>
                <div>
                  <h2>Notifications</h2>
                  <p>Choose which notifications you want to receive.</p>
                </div>
              </div>

              <div className="notification-list">
                <NotificationItem
                  icon={<Mail size={19} />}
                  title="Email Notifications"
                  description="Receive important updates through email."
                  checked={notifications.email}
                  onChange={() => toggleNotification("email")}
                />
                <NotificationItem
                  icon={<Check size={19} />}
                  title="Task Updates"
                  description="Get notified when tasks are created or completed."
                  checked={notifications.tasks}
                  onChange={() => toggleNotification("tasks")}
                />
                <NotificationItem
                  icon={<Smartphone size={19} />}
                  title="Project Updates"
                  description="Receive updates about your assigned projects."
                  checked={notifications.projects}
                  onChange={() => toggleNotification("projects")}
                />
                <NotificationItem
                  icon={<User size={19} />}
                  title="Team Activity"
                  description="Stay updated with your team's activity."
                  checked={notifications.team}
                  onChange={() => toggleNotification("team")}
                />
              </div>
            </div>
          )}

          {/* APPEARANCE */}
          {activeTab === "appearance" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <div className="section-icon">
                  <Palette size={20} />
                </div>
                <div>
                  <h2>Appearance</h2>
                  <p>Customize how your dashboard looks.</p>
                </div>
              </div>

              <div className="appearance-options">
                <ThemeCard
                  icon={<Sun size={22} />}
                  title="Light"
                  description="Clean and bright appearance"
                  active={theme === "light"}
                  onClick={() => handleThemeChange("light")}
                />
                <ThemeCard
                  icon={<Moon size={22} />}
                  title="Dark"
                  description="Easy on the eyes in low light"
                  active={theme === "dark"}
                  onClick={() => handleThemeChange("dark")}
                />
                <ThemeCard
                  icon={<Monitor size={22} />}
                  title="System"
                  description="Follow your device settings"
                  active={theme === "system"}
                  onClick={() => handleThemeChange("system")}
                />
              </div>
            </div>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <div className="section-icon">
                  <Shield size={20} />
                </div>
                <div>
                  <h2>Security</h2>
                  <p>Manage your password and account security.</p>
                </div>
              </div>

              <div className="security-card">
                <div className="security-card-icon">
                  <Lock size={20} />
                </div>
                <div className="security-card-info">
                  <h3>Password</h3>
                  <p>Last changed more than 30 days ago.</p>
                </div>
                <button
                  className="secondary-btn"
                  onClick={() => setPasswordModalOpen(true)}
                >
                  Change Password
                </button>
              </div>

              <div className="security-card">
                <div className="security-card-icon">
                  <Smartphone size={20} />
                </div>
                <div className="security-card-info">
                  <h3>Two-Factor Authentication</h3>
                  <p>
                    {twoFAEnabled
                      ? "Enabled — your account has an extra layer of protection."
                      : "Add an extra layer of security to your account."}
                  </p>
                </div>
                <button
                  className="secondary-btn"
                  onClick={() => {
                    setTwoFAEnabled((prev) => !prev);
                    setToast(twoFAEnabled ? "2FA disabled" : "2FA enabled");
                  }}
                >
                  {twoFAEnabled ? (
                    <>
                      <Check size={14} style={{ marginRight: 5 }} />
                      Enabled
                    </>
                  ) : (
                    "Enable"
                  )}
                </button>
              </div>

              <div className="security-card">
                <div className="security-card-icon">
                  <Shield size={20} />
                </div>
                <div className="security-card-info">
                  <h3>Active Sessions</h3>
                  <p>Manage devices currently signed into your account.</p>
                </div>
                <button
                  className="secondary-btn"
                  onClick={() => setSessionsVisible((prev) => !prev)}
                >
                  {sessionsVisible ? "Hide Sessions" : "View Sessions"}
                </button>
              </div>

              {sessionsVisible && (
                <div className="sessions-list">
                  {sessions.length === 0 && (
                    <p className="no-sessions-text">No other active sessions.</p>
                  )}
                  {sessions.map((s) => (
                    <div className="session-item" key={s.id}>
                      <div className="session-info">
                        <strong>{s.device}</strong>
                        <span>{s.location}</span>
                      </div>
                      {s.active ? (
                        <span className="session-current">This device</span>
                      ) : (
                        <button
                          className="session-signout-btn"
                          onClick={() => handleSignOutSession(s.id)}
                        >
                          <LogOut size={14} />
                          Sign out
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* CHANGE PASSWORD MODAL */}
      {passwordModalOpen && (
        <PasswordModal
          onClose={() => setPasswordModalOpen(false)}
          onSaved={() => {
            setPasswordModalOpen(false);
            setToast("Password updated successfully");
          }}
        />
      )}

      {/* TOAST */}
      {toast && <div className="settings-toast">{toast}</div>}
    </section>
  );
}

/* =========================
   PASSWORD MODAL
========================= */

function PasswordModal({ onClose, onSaved }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!current || !next || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (next !== confirm) {
      setError("New passwords do not match.");
      return;
    }
    if (next.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }
    onSaved();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Change Password</h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          {error && <p className="modal-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-settings-btn">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =========================
   NOTIFICATION ITEM
========================= */

function NotificationItem({ icon, title, description, checked, onChange }) {
  return (
    <div className="notification-item">
      <div className="notification-icon">{icon}</div>
      <div className="notification-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button
        className={`toggle-switch ${checked ? "active" : ""}`}
        onClick={onChange}
        aria-label={`Toggle ${title}`}
      >
        <span></span>
      </button>
    </div>
  );
}

/* =========================
   THEME CARD
========================= */

function ThemeCard({ icon, title, description, active, onClick }) {
  return (
    <button className={`theme-card ${active ? "active" : ""}`} onClick={onClick}>
      <div className="theme-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {active && (
        <div className="theme-check">
          <Check size={15} />
        </div>
      )}
    </button>
  );
}

export default Settings;