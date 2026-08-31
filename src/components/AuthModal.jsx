import { useState } from 'react';

function AuthModal({ onClose, onLogin, onRegister }) {
  const [tab, setTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (tab === 'login') {
      const result = onLogin(username, password);
      if (result.success) {
        onClose();
      } else {
        setError(result.error);
      }
    } else {
      const result = onRegister(username, password);
      if (result.success) {
        onClose();
      } else {
        setError(result.error);
      }
    }
  };

  const switchTab = (newTab) => {
    setTab(newTab);
    setError('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose} aria-label="Закрити">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="auth-title">JS Gym</h2>
        <p className="auth-subtitle">Продовжити навчання</p>

        <div className="auth-tabs">
          <button
            className={`auth-tab${tab === 'login' ? ' active' : ''}`}
            onClick={() => switchTab('login')}
          >
            Вхід
          </button>
          <button
            className={`auth-tab${tab === 'register' ? ' active' : ''}`}
            onClick={() => switchTab('register')}
          >
            Реєстрація
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-username">Нікнейм</label>
            <input
              id="auth-username"
              className="auth-input"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>
          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-password">Пароль</label>
            <input
              id="auth-password"
              className="auth-input"
              type="password"
              autoComplete={tab === 'register' ? 'new-password' : 'current-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button className="auth-submit" type="submit">
            {tab === 'login' ? 'Увійти' : 'Зареєструватись'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;