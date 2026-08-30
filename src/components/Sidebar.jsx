import { useState } from 'react';
import { challenges, categoryNames, categoryOrder } from '../data/challenges';

const sidebarCategories = categoryOrder.map((catId) => ({
  id: catId,
  name: categoryNames[catId],
  challenges: challenges.filter((c) => c.category === catId),
}));

const categoryIcons = {
  basics: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  arrays: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
  functions: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 4c-2 0-3 1-3 3v2c0 1.5-1 2.5-2 3 1 .5 2 1.5 2 3v2c0 2 1 3 3 3" />
      <path d="M16 4c2 0 3 1 3 3v2c0 1.5 1 2.5 2 3-1 .5-2 1.5-2 3v2c0 2-1 3-3 3" />
    </svg>
  ),
  objects: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  ),
  es6: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  async: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 2v6h-6" />
      <path d="M21.34 15.57a10 10 0 1 1-.57-8.38L21.5 8" />
    </svg>
  ),
};

function Sidebar({ activeChallenge, onSelectChallenge, isOpen, onClose, completedIds }) {
  const [expanded, setExpanded] = useState({ basics: true });

  const toggleCategory = (categoryId) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleSelectChallenge = (challenge) => {
    onSelectChallenge(challenge);
    if (onClose) onClose();
  };

  return (
    <>
      <aside className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
        <nav className="sidebar-nav">
          {sidebarCategories.map((category) => {
            const isExpanded = !!expanded[category.id];
            const hasChallenges = category.challenges.length > 0;

            return (
              <div key={category.id} className="sidebar-category">
                <button
                  className="sidebar-category-header"
                  onClick={() =>
                    hasChallenges && toggleCategory(category.id)
                  }
                  disabled={!hasChallenges}
                  aria-expanded={isExpanded}
                >
                  <span className="sidebar-category-icon">
                    {categoryIcons[category.id]}
                  </span>
                  <span className="sidebar-category-name">
                    {category.name}
                  </span>

                  {hasChallenges && (
                    <span
                      className={`sidebar-chevron${
                        isExpanded ? ' expanded' : ''
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  )}

                  {!hasChallenges && (
                    <span className="sidebar-soon-badge">Скоро</span>
                  )}
                </button>

                {isExpanded && hasChallenges && (
                  <div className="sidebar-challenges">
                    {category.challenges.map((challenge) => (
                      <button
                         key={challenge.id}
                         className={`sidebar-challenge${
                          activeChallenge?.id === challenge.id ? ' active' : ''
                        }${
                          completedIds.includes(challenge.id) ? ' sidebar-challenge--completed' : ''
                        }`}
                        onClick={() => handleSelectChallenge(challenge)}>
                        <span className="sidebar-challenge-id">{challenge.id}</span>
                        <span className="sidebar-challenge-title">{challenge.title}</span>
                        {completedIds.includes(challenge.id) && (
                          <svg
                            className="sidebar-check"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                         )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      <div
        className={`sidebar-overlay${isOpen ? ' sidebar-overlay--visible' : ''}`}
        onClick={onClose}
      />
    </>
  );
}

export default Sidebar;