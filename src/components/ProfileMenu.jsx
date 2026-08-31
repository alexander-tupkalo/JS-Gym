import { useEffect, useRef } from 'react';

function ProfileMenu({ user, onLogout, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="profile-menu" ref={menuRef}>
      <div className="profile-menu-header">
        <div className="profile-menu-avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div className="profile-menu-info">
          <span className="profile-menu-name">{user.username}</span>
          <span className="profile-menu-label">Учень</span>
        </div>
      </div>
      <div className="profile-menu-divider" />
      <button className="profile-menu-item" onClick={onLogout}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Вийти
      </button>
    </div>
  );
}

export default ProfileMenu;