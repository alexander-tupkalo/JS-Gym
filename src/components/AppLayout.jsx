import Header from './Header';
import AuthModal from './AuthModal';

function AppLayout({ children, onToggleSidebar, onGoHome, theme, onToggleTheme, view, onGoToTheory, onGoToTraining, user, onOpenAuth, onCloseAuth, onLogin, onRegister, onLogout, authModalOpen }) {
  return (
    <div className="app" data-theme={theme}>
      <Header
        onToggleSidebar={onToggleSidebar}
        onGoHome={onGoHome}
        theme={theme}
        onToggleTheme={onToggleTheme}
        view={view}
        onGoToTheory={onGoToTheory}
        onGoToTraining={onGoToTraining}
        user={user}
        onOpenAuth={onOpenAuth}
        onLogout={onLogout}
      />
      <main className="app-main">{children}</main>
      {authModalOpen && (
        <AuthModal
          onClose={onCloseAuth}
          onLogin={onLogin}
          onRegister={onRegister}
        />
      )}
    </div>
  );
}

export default AppLayout;