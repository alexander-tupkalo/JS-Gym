export const topics = [
    {
        id: 'what-is-array',
        title: 'Що таке масив',
        content: 'Масив — це впорядкована колекція значень. Елементи можуть бути будь-якого типу: числа, рядки, об\'єкти, навіть інші масиви. Створюється через квадратні дужки [].',
        example: `const menu = ["Борщ", "Салат", "Піца"];\nconst prices = [120, 85, 250];\nconst mixed = ["text", 42, true, null];\nconst empty = [];`,
        notes: [
            'Елементи нумеруються з нуля (zero-based indexing)',
            'Масив може містити елементи різних типів',
            'Порожній масив [] — це валідний масив'
        ]
    },
    {
        id: 'index-length',
        title: 'Індекси та length',
        content: 'Кожен елемент має індекс — позицію в масиві, починаючи з 0. Властивість length повертає кількість елементів. Останній елемент має індекс length - 1.',
        example: `const fruits = ["Яблуко", "Груша", "Вишня"];\n\nfruits[0];           // "Яблуко"\nfruits[2];           // "Вишня"\nfruits.length;       // 3\nfruits[fruits.length - 1]; // "Вишня"`,
        notes: [
            'Звернення до неіснуючого індексу поверне undefined',
            'length — це не індекс останнього елемента!',
            'fruits[fruits.length] = "Новий" додає елемент в кінець'
        ]
    },
    {
        id: 'push-pop-shift-unshift',
        title: 'push / pop / shift / unshift',
        content: 'push() додає в кінець, pop() видаляє з кінця. unshift() додає на початок, shift() видаляє з початку. Всі методи змінюють оригінальний масив.',
        example: `const orders = ["Кава", "Чай"];\n\norders.push("Сік");      // ["Кава", "Чай", "Сік"]\norders.pop();            // ["Кава", "Чай"], повертає "Сік"\norders.unshift("Суп");   // ["Суп", "Кава", "Чай"]\norders.shift();          // ["Кава", "Чай"], повертає "Суп"`,
        notes: [
            'push/unshift повертають нову довжину масиву',
            'pop/shift повертають видалений елемент',
            'Порожній масив: pop() і shift() повернуть undefined'
        ]
    },
    {
        id: 'slice-splice',
        title: 'slice та splice',
        content: 'slice(start, end) повертає КОПІЮ частини масиву без зміни оригіналу. splice(start, deleteCount) ВИДАЛЯЄ елементи з оригіналу і повертає видалені.',
        example: `const arr = ["А", "Б", "В", "Г"];\n\narr.slice(1, 3);   // ["Б", "В"] — arr незмінний\nconsole.log(arr);   // ["А", "Б", "В", "Г"]\n\narr.splice(1, 2);   // ["Б", "В"] — arr став ["А", "Г"]\nconsole.log(arr);   // ["А", "Г"]`,
        notes: [
            'slice — НЕ змінює масив (безпечний)',
            'splice — ЗМІНЮЄ масив (мутує)',
            'Другий параметр splice — кількість елементів для видалення, не кінцевий індекс'
        ]
    },
    {
        id: 'for-loop',
        title: 'Перебір масиву через for',
        content: 'Цикл for дозволяє перебрати всі елементи масиву по індексу. Синтаксис: for (початок; умова; крок). Класичний підхід до ітерації.',
        example: `const prices = [100, 200, 150];\nlet sum = 0;\n\nfor (let i = 0; i < prices.length; i++) {\n  console.log(\`Ціна #\${i + 1}: \${prices[i]}\`);\n  sum += prices[i];\n}\n\nconsole.log("Загальна сума:", sum); // 450`,
        notes: [
            'let i = 0 — початковий індекс',
            'i < prices.length — умова продовження',
            'i++ — збільшення індексу після кожної ітерації'
        ]
    },
    {
        id: 'map-filter',
        title: 'map та filter',
        content: 'map() створює НОВИЙ масив, трансформуючи кожен елемент. filter() створює НОВИЙ масив, залишаючи лише елементи, що проходять умову. Обидва НЕ змінюють оригінал.',
        example: `const prices = [100, 200, 300];\n\n// map — трансформація\nconst doubled = prices.map(p => p * 2);\n// [200, 400, 600]\n\n// filter — відбір\nconst expensive = prices.filter(p => p > 150);\n// [200, 300]\n\n// Ланцюжок\nconst result = prices\n  .filter(p => p > 100)\n  .map(p => p * 0.9);  // [180, 270]`,
        notes: [
            'map завжди повертає масив тієї ж довжини',
            'filter може повернути масив будь-якої довжини (0 до оригіналу)',
            'Колбек отримує (element, index, array)'
        ]
    },
    {
        id: 'reduce-find-includes',
        title: 'reduce, find, includes, concat та spread',
        content: 'reduce() — зводить масив до одного значення. find() — знаходить перший елемент за умовою. includes() — перевіряє наявність. concat() та ... об\'єднують масиви.',
        example: `const nums = [1, 2, 3, 4, 5];\n\n// reduce — сума\nconst sum = nums.reduce((acc, n) => acc + n, 0); // 15\n\n// find — перший > 3\nconst found = nums.find(n => n > 3); // 4\n\n// includes\nnums.includes(3);  // true\n\n// concat та spread\nconst a = [1, 2];\nconst b = [3, 4];\nconst merged = [...a, ...b]; // [1, 2, 3, 4]`,
        notes: [
            'reduce приймає (акумулятор, поточний елемент, індекс)',
            'find повертає елемент або undefined',
            'includes використовує суворе порівняння ==='
        ]
    }
];