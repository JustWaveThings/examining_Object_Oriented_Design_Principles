let animal = function (name) {
	this.name = `${name} of the shire`;
};

animal.prototype.noise = function () {
	return 'typical animal noises';
};

animal.prototype.getName = function () {
	return this.name;
};

let cat = function (name) {
	animal.call(this, name);
};
cat.prototype = Object.create(animal.prototype);
cat.prototype.noise = function () {
	return 'Meeeeeoooooowwwwws';
};

cat.prototype.litterbox = function () {
	return 'I use a litterbox';
};

let dog = function (name) {
	animal.call(this, name);
};
dog.prototype = Object.create(animal.prototype);
dog.prototype.noise = function () {
	return 'Woof woofs';
};

let goat = function (name) {
	animal.call(this, name);
};

goat.prototype = Object.create(animal.prototype);
goat.prototype.noise = function () {
	return `${this.name} - a study of differential calculus`;
};

const ZooAnimal = new animal('ZooAnimal');
const Tabby = new cat('Tabby');
const Fido = new dog('Fido');
const Terry = new goat('Terry');

let creatures = [ZooAnimal, Tabby, Fido, Terry];

creatures.forEach(function (creature) {
	console.log(
		`I am ${creature.getName()} and I make ${creature.noise()}`
	);
	// only cats - works
	if (creature?.litterbox instanceof Function) {
		console.log(`${creature.litterbox()}`);
	}
	console.log(`----------------`);
});

/* output - 
typical animal noises 
Meeeeeoooooowwwww
Woof woof
typical animal noises  */ //
