import { useState, useEffect } from 'react';
import { challenges } from './data/challenges';
import Preloader from './components/Preloader';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import TrainingLayout from './components/TrainingLayout';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem('jsgym-completed', JSON.stringify(completedIds));
  }, [completedIds]);

  useEffect(() => {
    localStorage.setItem('jsgym-theme', theme);
  }, [theme]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  const handleGoHome = () => setView('home');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleChallengeComplete = (id) => {
    setCompletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
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
    <AppLayout onToggleSidebar={toggleSidebar} onGoHome={handleGoHome} theme={theme} onToggleTheme={toggleTheme}>
      {view === 'home' ? (
        <Home onStartTraining={() => setView('training')} />
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