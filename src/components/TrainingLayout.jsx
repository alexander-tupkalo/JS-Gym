import { challenges } from '../data/challenges';
import Sidebar from './Sidebar';
import Challenge from './Challenge';

function TrainingLayout({
  activeChallenge,
  onSelectChallenge,
  sidebarOpen,
  onCloseSidebar,
  onPrevChallenge,
  onNextChallenge,
  completedIds,
  onChallengeComplete,
}) {
  const currentIndex = activeChallenge
    ? challenges.findIndex((c) => c.id === activeChallenge.id) + 1
    : 0;

  return (
    <div className="training-layout">
      <Sidebar
        activeChallenge={activeChallenge}
        onSelectChallenge={onSelectChallenge}
        isOpen={sidebarOpen}
        onClose={onCloseSidebar}
        completedIds={completedIds}
      />
      <div className="training-content">
        {activeChallenge ? (
          <Challenge
            challenge={activeChallenge}
            currentPosition={currentIndex}
            totalChallenges={challenges.length}
            isFirst={currentIndex <= 1}
            isLast={currentIndex >= challenges.length}
            onPrevChallenge={onPrevChallenge}
            onNextChallenge={onNextChallenge}
            onChallengeComplete={onChallengeComplete}
          />
        ) : (
          <div className="challenge-placeholder">
            <span className="challenge-placeholder-empty">
              Оберіть завдання
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrainingLayout;