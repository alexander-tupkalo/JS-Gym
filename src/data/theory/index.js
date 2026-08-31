import { topics as basicsTopics } from './basics';
import { topics as arraysTopics } from './arrays';
import { topics as functionsTopics } from './functions';
import { topics as objectsTopics } from './objects';
import { topics as es6Topics } from './es6';
import { topics as asyncTopics } from './async';

export const theoryData = {
    basics: basicsTopics,
    arrays: arraysTopics,
    functions: functionsTopics,
    objects: objectsTopics,
    es6: es6Topics,
    async: asyncTopics
};

export const categoryNames = {
    basics: 'Основи',
    arrays: 'Масиви',
    functions: 'Функції',
    objects: "Об'єкти",
    es6: 'ES6+',
    async: 'Async JavaScript'
};

export const categoryOrder = ['basics', 'arrays', 'functions', 'objects', 'es6', 'async'];