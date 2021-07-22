function createPerson(name, age, hobbies, city, gender, job) {
    return { name, age, hobbies, city, gender, job };
};

const enrike = createPerson('Энрике', 30, ['бег', 'свежий сок'], "Лондон", "мужской", "програмист",);
const sarah = createPerson('Сара', 30, ['сериалы', 'журналистика'], "Лондон", "женский", "журналист");
const ann = createPerson('Энни', 4, ['рисование', 'игры',], "Лондон", "женский", "неприменимо");
const jim = createPerson("Джим", 60, ['путешествия'], "Манчестер", "мужской", "на пенсии");
const kelly = createPerson("Келли", 60, ['путешествия'], "Манчестер", "женский", "на пенсии");
const niki = createPerson("Николай", 70, ['скрипка'], "Ливерпуль", "мужской", "начальник охраны");
const noName = createPerson("неизвестно", 66, ['неизвестно'], "Ливерпуль", "женский", "неизвестно",);

Object.assign(enrike, { spouse: [sarah] }, { children: [ann] }, { mother: [noName] }, { stepfather: [niki] }, { coParentInLowHe: [jim] }, { coParenntInLowShe: [kelly] });
Object.assign(sarah, { spouse: [enrike] }, { children: [ann] }, { mother: [kelly] }, { father: [jim] }, { coParentInLowHe: [niki] }, { coParenntInLowShe: [noName] });
Object.assign(ann, { mother: [sarah] }, { father: [enrike] },);
Object.assign(jim, { spouse: [kelly] }, { children: [sarah] }, { childInLaw: [enrike] }, { grandchildren: [ann] }, { coParentInLowHe: [niki] }, { coParenntInLowShe: [noName] });
Object.assign(kelly, { spouse: [jim] }, { children: [sarah] }, { childInLaw: [enrike] }, { grandchildren: [ann] }, { coParentInLowHe: [niki] }, { coParenntInLowShe: [noName] });
Object.assign(niki, { spouse: [noName] }, { childInLaw: [sarah] }, { grandchildren: [ann] }, { coParentInLowHe: [jim] }, { coParenntInLowShe: [kelly] });
Object.assign(noName, { spouse: [niki] }, { childInLaw: [enrike] }, { grandchildren: [ann] }, { coParentInLowHe: [jim] }, { coParenntInLowShe: [kelly] });

console.log(enrike);
console.log(sarah);
console.log(ann);
console.log(jim);
console.log(kelly);
console.log(noName);

