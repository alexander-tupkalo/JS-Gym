import Header from './Header';

function AppLayout({ children, onToggleSidebar, onGoHome, theme }) {
  return (
    <div className="app" data-theme={theme}>
      <Header
        onToggleSidebar={onToggleSidebar}
        onGoHome={onGoHome}
        theme={theme}
        onToggleTheme={undefined}
      />
      <main className="app-main">{children}</main>
    </div>
  );
}

export default AppLayout;