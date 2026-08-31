import { useState } from 'react';
import { theoryData, categoryNames, categoryOrder } from '../data/theory';
import TheorySidebar from './TheorySidebar';
import TheoryContent from './TheoryContent';

function TheoryLayout({ onGoHome, onGoToTraining }) {
    const [activeCategory, setActiveCategory] = useState('basics');
    const [activeTopicId, setActiveTopicId] = useState(null);

    const topics = theoryData[activeCategory] || [];
    const activeTopic = topics.find(t => t.id === activeTopicId) || null;

    return (
        <div className="theory-layout">
            <TheorySidebar
                activeCategory={activeCategory}
                activeTopicId={activeTopicId}
                onSelectCategory={setActiveCategory}
                onSelectTopic={setActiveTopicId}
            />
            <div className="theory-content">
                {activeTopic ? (
                    <TheoryContent
                        topic={activeTopic}
                        categoryName={categoryNames[activeCategory]}
                        onPrevTopic={() => {
                            const idx = topics.findIndex(t => t.id === activeTopicId);
                            if (idx > 0) setActiveTopicId(topics[idx - 1].id);
                        }}
                        onNextTopic={() => {
                            const idx = topics.findIndex(t => t.id === activeTopicId);
                            if (idx < topics.length - 1) setActiveTopicId(topics[idx + 1].id);
                        }}
                        isFirst={topics.findIndex(t => t.id === activeTopicId) === 0}
                        isLast={topics.findIndex(t => t.id === activeTopicId) === topics.length - 1}
                    />
                ) : (
                    <div className="theory-placeholder">
                        <div className="theory-placeholder-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                        </div>
                        <span className="theory-placeholder-title">Оберіть тему</span>
                        <span className="theory-placeholder-text">Виберіть тему зліва для перегляду теорії</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TheoryLayout;