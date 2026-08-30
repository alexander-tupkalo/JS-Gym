// TEMPORARY — will be replaced with migrated V1 challenge data from js/data/challenges.js
// Contains only the minimal structure needed to render the Sidebar

const tempSidebarData = [
  {
    id: 'basics',
    name: 'Основи',
    challenges: [
      { id: 1, title: 'Привітання' },
      { id: 2, title: 'Змінні' },
      { id: 3, title: 'Типи даних' },
      { id: 4, title: 'Математичні оператори' },
      { id: 5, title: 'Інструкція if...else' },
      { id: 6, title: 'Тернарний оператор' },
      { id: 7, title: 'Логічні оператори' },
      { id: 8, title: 'Інструкція switch' },
      { id: 9, title: 'Цикл for' },
      { id: 10, title: 'Цикл while' },
    ],
  },
  {
    id: 'arrays',
    name: 'Масиви',
    challenges: [
      { id: 11, title: 'Створення масиву' },
      { id: 12, title: 'Доступ до елементів' },
      { id: 13, title: 'Довжина масиву' },
      { id: 14, title: 'push та pop' },
      { id: 15, title: 'shift та unshift' },
      { id: 16, title: 'Метод indexOf' },
      { id: 17, title: 'Метод includes' },
      { id: 18, title: 'Метод slice' },
      { id: 19, title: 'Метод splice' },
      { id: 20, title: 'Метод forEach' },
    ],
  },
  {
    id: 'functions',
    name: 'Функції',
    challenges: [
      { id: 21, title: 'Оголошення функції' },
      { id: 22, title: 'Параметри та аргументи' },
      { id: 23, title: 'Повернення результату' },
      { id: 24, title: 'Значення за замовчуванням' },
      { id: 25, title: 'Function Expression' },
      { id: 26, title: 'Стрілкові функції' },
      { id: 27, title: 'Callback функції' },
      { id: 28, title: 'Область видимості' },
      { id: 29, title: 'Замикання' },
      { id: 30, title: 'Рекурсія' },
    ],
  },
  {
    id: 'objects',
    name: "Об'єкти",
    challenges: [],
  },
  {
    id: 'es6',
    name: 'ES6+',
    challenges: [],
  },
  {
    id: 'async',
    name: 'Async JS',
    challenges: [],
  },
];

export { tempSidebarData };