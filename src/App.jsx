import { useState, useEffect } from 'react';
import { challenges } from './data/challenges';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (sidebarOpen) setSidebarOpen(false);
        if (theorySidebarOpen) setTheorySidebarOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen, theorySidebarOpen]);

  useEffect(() => {
    if (sidebarOpen || theorySidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen, theorySidebarOpen]);

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