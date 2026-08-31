import { useState, useEffect } from 'react';
import { challenges } from './data/challenges';
import { register as authRegister, login as authLogin, getCurrentUser, logout as authLogout, getUserProgress } from './utils/auth';
import Preloader from './components/Preloader';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import TrainingLayout from './components/TrainingLayout';
import TheoryLayout from './components/TheoryLayout';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theorySidebarOpen, setTheorySidebarOpen] = useState(false);
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('jsgym-completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('jsgym-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [user, setUser] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      const userProgress = getUserProgress(currentUser);
      if (userProgress.length > 0) {
        setCompletedIds(userProgress);
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (sidebarOpen) setSidebarOpen(false);
        if (theorySidebarOpen) setTheorySidebarOpen(false);
        if (authModalOpen) setAuthModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen, theorySidebarOpen, authModalOpen]);

  useEffect(() => {
    if (sidebarOpen || theorySidebarOpen || authModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen, theorySidebarOpen, authModalOpen]);

  useEffect(() => {
    localStorage.setItem('jsgym-completed', JSON.stringify(completedIds));
  }, [completedIds]);

  useEffect(() => {
    localStorage.setItem('jsgym-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleGoToChallenges = (e) => {
      const { categoryId } = e.detail;
      setView('training');
      const firstChallenge = challenges.find(c => c.category === categoryId);
      if (firstChallenge) {
        setActiveChallenge(firstChallenge);
      }
    };
    window.addEventListener('goToChallenges', handleGoToChallenges);
    return () => window.removeEventListener('goToChallenges', handleGoToChallenges);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleTheorySidebar = () => setTheorySidebarOpen((prev) => !prev);
  const closeTheorySidebar = () => setTheorySidebarOpen(false);
  const handleGoHome = () => setView('home');
  const handleGoToTheory = () => setView('theory');
  const handleGoToTraining = () => setView('training');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleChallengeComplete = (id) => {
    setCompletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleLogin = (username, password) => {
    const result = authLogin(username, password);
    if (result.success) {
      setUser(result.user);
      const userProgress = getUserProgress(result.user);
      if (userProgress.length > 0) {
        setCompletedIds(userProgress);
      }
    }
    return result;
  };

  const handleRegister = (username, password) => {
    const result = authRegister(username, password);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  const handleLogout = () => {
    authLogout(user, completedIds);
    setUser(null);
  };

  const handlePrevChallenge = () => {
    if (!activeChallenge) return;
    const idx = challenges.findIndex((c) => c.id === activeChallenge.id);
    if (idx > 0) setActiveChallenge(challenges[idx - 1]);
  };

  const handleNextChallenge = () => {
    if (!activeChallenge) return;
    const idx = challenges.findIndex((c) => c.id === activeChallenge.id);
    if (idx < challenges.length - 1) setActiveChallenge(challenges[idx + 1]);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <AppLayout 
      onToggleSidebar={view === 'training' ? toggleSidebar : toggleTheorySidebar}
      onGoHome={handleGoHome} 
      theme={theme} 
      onToggleTheme={toggleTheme}
      view={view}
      onGoToTheory={handleGoToTheory}
      onGoToTraining={handleGoToTraining}
      user={user}
      onOpenAuth={() => setAuthModalOpen(true)}
      onCloseAuth={() => setAuthModalOpen(false)}
      onLogin={handleLogin}
      onRegister={handleRegister}
      onLogout={handleLogout}
      authModalOpen={authModalOpen}
    >
      {view === 'home' ? (
        <Home 
          onStartTraining={handleGoToTraining} 
          onGoToTheory={handleGoToTheory} 
        />
      ) : view === 'theory' ? (
        <TheoryLayout 
          onGoHome={handleGoHome} 
          onGoToTraining={handleGoToTraining}
          sidebarOpen={theorySidebarOpen}
          onCloseSidebar={closeTheorySidebar}
        />
      ) : (
        <TrainingLayout
          activeChallenge={activeChallenge}
          onSelectChallenge={setActiveChallenge}
          sidebarOpen={sidebarOpen}
          onCloseSidebar={closeSidebar}
          onPrevChallenge={handlePrevChallenge}
          onNextChallenge={handleNextChallenge}
          completedIds={completedIds}
          onChallengeComplete={handleChallengeComplete}
        />
      )}
    </AppLayout>
  );
}

export default App;