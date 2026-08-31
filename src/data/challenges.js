import { challenges as basicsChallenges } from './challenges/basics';
import { challenges as arraysChallenges } from './challenges/arrays';
import { challenges as functionsChallenges } from './challenges/functions';
import { challenges as objectsChallenges } from './challenges/objects';
import { challenges as es6Challenges } from './challenges/es6';
import { challenges as asyncChallenges } from './challenges/async';

export const challenges = [
    ...basicsChallenges,
    ...arraysChallenges,
    ...functionsChallenges,
    ...objectsChallenges,
    ...es6Challenges,
    ...asyncChallenges
];

export const categoryNames = {
    basics: 'Основи',
    arrays: 'Масиви',
    functions: 'Функції',
    objects: "Об'єкти",
    es6: 'ES6+',
    async: 'Async JavaScript'
};

export const categoryOrder = ['basics', 'arrays', 'functions', 'objects', 'es6', 'async'];

export function getChallengesByCategory(categoryId) {
    return challenges.filter(c => c.category === categoryId);
}