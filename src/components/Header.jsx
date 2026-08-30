function Header({ onToggleSidebar, onGoHome, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button
            className="header-toggle"
            onClick={onToggleSidebar}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <button className="header-brand" onClick={onGoHome}>
            <span className="header-logo">
              <span className="header-logo--accent">JS</span> Gym
            </span>
            <span className="header-dot" aria-hidden="true">
              ·
            </span>
            <span className="header-tagline">JavaScript Practice</span>
          </button>
        </div>

        <div className="header-right">
          <div className="header-lang-switch">
            <button className="header-lang-btn header-lang-btn--active">
              UA
            </button>
            <span className="header-lang-sep" aria-hidden="true">
              |
            </span>
            <button className="header-lang-btn">EN</button>
          </div>
          <button
            className="header-icon-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7.5 7.5 0 0 0-9.79-11.79A9 9 0 0 1 12.79 21.21A9 9 0 0 1 21.21 12.79z" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <button className="header-icon-btn" aria-label="Profile">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;