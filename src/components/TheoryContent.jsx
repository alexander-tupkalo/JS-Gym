import { challenges, categoryNames } from '../data/challenges';

function TheoryContent({ topic, categoryName, onPrevTopic, onNextTopic, isFirst, isLast }) {
    const relatedChallenges = challenges.filter(c => c.category === categoryName.toLowerCase());
    const firstChallengeId = relatedChallenges.length > 0 ? relatedChallenges[0].id : null;

    return (
        <div className="theory-topic">
            <div className="theory-topic-header">
                <span className="theory-topic-category">{categoryName}</span>
                <h1 className="theory-topic-title">{topic.title}</h1>
            </div>

            <div className="theory-topic-content">
                <p className="theory-topic-text">{topic.content}</p>
            </div>

            {topic.example && (
                <div className="theory-topic-section">
                    <h2 className="theory-topic-section-title">Приклад</h2>
                    <pre className="theory-topic-code">{topic.example}</pre>
                </div>
            )}

            {topic.notes && topic.notes.length > 0 && (
                <div className="theory-topic-section">
                    <h2 className="theory-topic-section-title">Важливі нотатки</h2>
                    <ul className="theory-topic-notes">
                        {topic.notes.map((note, i) => (
                            <li key={i} className="theory-topic-note">
                                <span className="theory-topic-note-bullet">•</span>
                                <span>{note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {firstChallengeId && (
                <div className="theory-topic-action">
                    <button
                        className="theory-topic-go-to-challenges"
                        onClick={() => {
                            // Будет обработано в App.jsx через кастомное событие или пропс
                            window.dispatchEvent(new CustomEvent('goToChallenges', { 
                                detail: { categoryId: categoryName.toLowerCase() } 
                            }));
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                        Перейти до завдань
                    </button>
                </div>
            )}

            <div className="theory-topic-nav">
                <button
                    className="theory-topic-nav-btn"
                    onClick={onPrevTopic}
                    disabled={isFirst}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Попередня тема
                </button>
                <button
                    className="theory-topic-nav-btn"
                    onClick={onNextTopic}
                    disabled={isLast}
                >
                    Наступна тема
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default TheoryContent;