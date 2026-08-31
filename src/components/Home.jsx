import FeatureCard from './FeatureCard';

const categories = [
  { name: 'Основи JavaScript', count: 10 },
  { name: 'Масиви', count: 10 },
  { name: 'Функції', count: 10 },
  { name: "Об'єкти", count: 7 },
  { name: 'ES6+', count: 5},
  { name: 'Async JavaScript', count: 2 },
];

function Home({ onStartTraining, onGoToTheory }) {
  return (
    <div className="home">
      <section className="hero">
        <span className="hero-eyebrow">JAVASCRIPT PRACTICE</span>
        <h1 className="hero-title">
          Тренувальний JavaScript.
          <br />
          Крок за кроком.
        </h1>
        <p className="hero-description">
          Практичний тренажер для опанування JavaScript через написання коду.
          Розв&apos;язуйте завдання, отримуйте підказки та відстежуйте свій
          прогрес.
        </p>
        <button className="hero-cta" onClick={onStartTraining}>
          Почати тренування →
        </button>
      </section>

      <div className="home-youtube">
        <div className="home-youtube-content">
          <span className="home-youtube-emoji">📺</span>
          <div className="home-youtube-text">
            <span className="home-youtube-title">Вчись разом з нами</span>
            <span className="home-youtube-desc">Дивись відео, розбирай JavaScript та прокачуй навички</span>
          </div>
        </div>
        <a
          className="home-youtube-btn"
          href="https://www.youtube.com/watch?v=MFoo2q38x9c&list=PL66qhubfOwjbSEqrenz1uAWfPDUNzhqv9"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <section className="features">
        <FeatureCard
          icon={
            <svg
              width="28"
              height="28"
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
          }
          title="Практика"
          description="Пишіть код прямо в браузері та отримуйте миттєвий результат"
        />
        <FeatureCard
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
            </svg>
          }
          title="Підказки"
          description="Застосуйте поступові підказки, якщо застрягли на завданні"
        />
        <FeatureCard
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          }
          title="Прогрес"
          description="Відстежуйте свої досягнення та завершені завдання"
        />
      </section>

      <section className="categories">
        <h2 className="categories-title">Що всередині</h2>
        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <span className="category-name">{category.name}</span>
              <span
                className={`category-badge${
                  category.soon ? ' category-badge--soon' : ''
                }`}
              >
                {category.soon
                  ? 'Скоро'
                  : `${category.count} завдань`}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;