export const topics = [
    {
        id: 'es6-let-const',
        title: 'let та const',
        content: 'У ES6 let та const замінили var. Головна різниця: let та const мають блочну область видимості (block scope) і не піддаються hoisting у тому ж вигляді, що var.',
        example: `// var — function scope, hoisting з undefined
console.log(x); // undefined (не помилка!)
var x = 10;

// let/const — block scope, temporal dead zone
// console.log(y); // ReferenceError!
let y = 10;

// Блочна область видимості
if (true) {
    let inner = 5;
}

// console.log(inner); // ReferenceError!`,
        notes: [
            'const — для значень, які не будуть переприсвоюватися, let — для змінних, значення яких може змінюватися',
            'Temporal Dead Zone: змінна не доступна до моменту її оголошення',
            'У сучасному JavaScript використовуйте let та const замість var'
        ]
    },

    {
        id: 'es6-arrow-functions',
        title: 'Arrow Functions',
        content: 'Arrow functions в ES6+ — це не просто коротший синтаксис. Вони не мають власного this, arguments, super та new.target. Це робить їх особливо зручними для callback-функцій.',
        example: `// Звичайна функція має власний this
const obj = {
    name: "Menu",

    regular: function() {
        console.log(this.name);
    },

    arrow: () => console.log(this.name)
};

regular.call(obj);

// Arrow зручна для callback-функцій
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled);`,
        notes: [
            'Не використовуйте arrow function як метод об’єкта, якщо вам потрібен власний this',
            'Arrow functions зручні для map, filter, reduce та setTimeout',
            'Arrow function не можна використовувати як конструктор через new'
        ]
    },

    {
        id: 'es6-template-literals',
        title: 'Template Literals',
        content: 'Зворотні лапки дозволяють створювати рядки з вставками ${}, багаторядкові рядки та використовувати вирази всередині тексту. Вони значно зручніші за конкатенацію за допомогою +.',
        example: `const user = {
    name: "Олег",
    role: "Офіціант"
};

// Багаторядковий рядок
const html = \`
    <div class="card">
        <h2>\${user.name}</h2>
        <p>\${user.role}</p>
    </div>
\`;

console.log(html);

// Вирази всередині \${}
const total = 100;
const msg = \`Сума: \${total > 50 ? "велика" : "мала"}\`;

console.log(msg);`,
        notes: [
            'Всередині ${} можна використовувати змінні та будь-які JavaScript-вирази',
            'Багаторядкові рядки можна створювати без ручного використання \\n',
            'Template literals особливо зручні для динамічного формування тексту'
        ]
    },

    {
        id: 'es6-destructuring',
        title: 'Destructuring',
        content: 'Деструктуризація дозволяє витягувати значення з масивів і об’єктів у змінні за допомогою короткого синтаксису. Вона також використовується в параметрах функцій та циклах.',
        example: `// Об’єкти
const { name, price } = {
    name: "Борщ",
    price: 120
};

console.log(name);
console.log(price);

// Масиви
const [first, second] = ["Кава", "Чай", "Сік"];

console.log(first);
console.log(second);

// Параметри функції
function greet({ name, age }) {
    console.log(\`\${name}, \${age}\`);
}

greet({
    name: "Олег",
    age: 25
});`,
        notes: [
            'Властивість можна перейменувати: { name: title }',
            'Можна задавати значення за замовчуванням: { name = "Гість" }',
            'Rest можна використовувати для отримання решти властивостей: { name, ...rest }'
        ]
    },

    {
        id: 'es6-spread',
        title: 'Spread operator',
        content: 'Spread operator (...) "розгортає" ітерабельний об’єкт на окремі елементи. Він використовується для копіювання масивів та об’єктів, їх об’єднання та передачі значень як аргументів функції.',
        example: `// Копіювання масиву
const original = [1, 2, 3];
const copy = [...original];

console.log(copy);

// Об’єднання масивів
const merged = [...[1, 2], ...[3, 4]];

console.log(merged);

// Копіювання та об’єднання об’єктів
const defaults = {
    theme: "dark",
    lang: "uk"
};

const user = {
    ...defaults,
    theme: "light"
};

console.log(user);`,
        notes: [
            'Spread створює поверхневу копію масиву або об’єкта',
            'Порядок важливий: властивості праворуч перезаписують властивості ліворуч',
            'Не плутайте spread з rest parameters: spread розгортає, а rest збирає значення'
        ]
    },

    {
        id: 'es6-rest-parameters',
        title: 'Rest parameters',
        content: 'Rest parameters (...args) збирають необмежену кількість аргументів функції в один масив. Rest-параметр завжди повинен бути останнім параметром функції.',
        example: `function sum(first, ...rest) {
    console.log(first);
    console.log(rest);

    return rest.reduce((a, b) => a + b, first);
}

console.log(sum(1, 2, 3, 4, 5));

const {
    name,
    ...details
} = {
    name: "Борщ",
    price: 120,
    category: "Супи"
};

console.log(name);
console.log(details);`,
        notes: [
            'Rest-параметр завжди повинен бути останнім у списку параметрів',
            'Rest створює справжній масив, на відміну від arguments',
            'Rest можна використовувати не тільки у функціях, а й під час деструктуризації'
        ]
    },

    {
        id: 'es6-default-parameters',
        title: 'Default parameters',
        content: 'Параметри за замовчуванням дозволяють вказати значення, яке буде використане, якщо аргумент не передано або передано undefined.',
        example: `function createOrder(dish, quantity = 1, extras = []) {
    return {
        dish,
        quantity,
        extras
    };
}

console.log(createOrder("Борщ"));

console.log(createOrder(
    "Борщ",
    2,
    ["хліб"]
));

console.log(createOrder(
    "Борщ",
    undefined,
    ["сметана"]
));`,
        notes: [
            'undefined активує значення за замовчуванням, а null — ні',
            'Параметри зі значенням за замовчуванням зазвичай розміщують у кінці списку',
            'Значення за замовчуванням може використовувати попередні параметри: (a, b = a * 2)'
        ]
    }
];