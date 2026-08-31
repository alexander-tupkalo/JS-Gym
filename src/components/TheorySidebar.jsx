import { theoryData, categoryNames, categoryOrder } from '../data/theory';

const categoryIcons = {
    basics: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    arrays: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    ),
    functions: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 4c-2 0-3 1-3 3v2c0 1.5-1 2.5-2 3 1 .5 2 1.5 2 3v2c0 2 1 3 3 3" />
            <path d="M16 4c2 0 3 1 3 3v2c0 1.5 1 2.5 2 3-1 .5-2 1.5-2 3v2c0 2-1 3-3 3" />
        </svg>
    ),
    objects: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
    ),
    es6: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    async: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6" />
            <path d="M21.34 15.57a10 10 0 1 1-.57-8.38L21.5 8" />
        </svg>
    )
};

function TheorySidebar({ activeCategory, activeTopicId, onSelectCategory, onSelectTopic }) {
    const topics = theoryData[activeCategory] || [];

    return (
        <aside className="theory-sidebar">
            <nav className="theory-sidebar-nav">
                {categoryOrder.map((catId) => {
                    const isActive = activeCategory === catId;
                    const catTopics = theoryData[catId] || [];

                    return (
                        <div key={catId} className="theory-sidebar-category">
                            <button
                                className={`theory-sidebar-category-header${isActive ? ' active' : ''}`}
                                onClick={() => onSelectCategory(catId)}
                            >
                                <span className="theory-sidebar-category-icon">
                                    {categoryIcons[catId]}
                                </span>
                                <span className="theory-sidebar-category-name">
                                    {categoryNames[catId]}
                                </span>
                                <span className="theory-sidebar-category-count">
                                    {catTopics.length}
                                </span>
                            </button>

                            {isActive && (
                                <div className="theory-sidebar-topics">
                                    {catTopics.map((topic, index) => (
                                        <button
                                            key={topic.id}
                                            className={`theory-sidebar-topic${activeTopicId === topic.id ? ' active' : ''}`}
                                            onClick={() => onSelectTopic(topic.id)}
                                        >
                                            <span className="theory-sidebar-topic-number">
                                                {index + 1}
                                            </span>
                                            <span className="theory-sidebar-topic-title">
                                                {topic.title}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}

export default TheorySidebar;