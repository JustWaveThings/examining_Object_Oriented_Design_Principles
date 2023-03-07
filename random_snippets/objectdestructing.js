/* const Person = (name) => {
	const sayName = () => console.log(`my name is ${name}`);

	const nameToCaps = () => name.toUpperCase();

	const sayNameCaps = () => console.log(`my name is ${nameToCaps()}`);

	return { sayName, sayNameCaps };
};

const Nerd = (name) => {
	const prototype = Person(name);
	const doSomethingNerdy = () => console.log('nerd stuff');
	return { ...prototype, doSomethingNerdy };
};

const jeff = Nerd('jeff');
jeff.sayName();
jeff.doSomethingNerdy();
jeff.sayNameCaps(); */

/* const user = {
	name: 'John',
	age: 30,
	email: 'john@example.com',
	address: {
		city: 'New York',
		state: 'NY',
		country: 'USA',
	},
};

const {
	name,
	age,
	address: { city },
} = user;

console.log({ name });
console.log({ age });
console.log({ city });
 */

/* const user = {
	name: 'John',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345',
	},
	hobbies: ['reading', 'hiking', 'coding'],
};

// Destructure the user object to get the following variables:
// - name
// - city
// - second hobby (hiking)

const {
	name,
	address: { city },
	hobbies,
} = user;

const secondHobby = hobbies[1];

console.log({ name, city, secondHobby }); */

/* const user = {
	name: 'John Doe',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345',
	},
	hobbies: ['reading', 'hiking', 'coding'],
}; */

// Destructure the user object to get the following variables:
// - firstName (the first name of the user)
// - lastName (the last name of the user)
// - street (the street address of the user)
// - city (the city of the user)
// - state (the state of the user)
// - hobby1 (the first hobby in the hobbies array)
// - hobby2 (the second hobby in the hobbies array)

/* const {
	name,
	address: { street, state },
	hobbies,
} = user;
const firstName = name.split(' ')[0];
const lastName = name.split(' ')[1];
const selectedHobbies = [hobbies[0], hobbies[1]];

console.log({
	firstName,
	lastName,
	street,
	city,
	selectedHobbies,
}); */

/* You have an array of 5 objects, each with a name and age property. Write a function that takes in the array and returns an array containing only the name property of each object. */

/* const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 35 },
	{ name: 'David', age: 40 },
	{ name: 'Eve', age: 45 },
];

const names = people.map(({ name }) => name);

const age = people.map(({ age }) => age);
console.log(age);
console.log(names); */

/* You have an array of objects representing different books. Each book object has the following properties: title, author, year, and publisher. Write a function that takes in the array of book objects and returns an array of just the book titles.

Remember to use destructuring to access the title property of each book object. */

/* const title = books.map(({ title }) => title); */

const user = {
	name: 'John Doe',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345',
	},
};

// Use the assignment syntax to destructure the user object and assign the values to variables
// named userName, userAge, userStreet, userCity, userState, and userZip.

({
	name: userName,
	age: userAge,
	address: { street: userStreet, state: userState, zip: userZip },
} = user);

console.log({ userName, userAge, userStreet, userState, userZip });
