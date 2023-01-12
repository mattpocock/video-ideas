export function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet(123123123, new Date());
