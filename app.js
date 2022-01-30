const createInstructor = (firstName, lastName) => {
	return { firstName, lastName };
};

let favoriteNumber = 42;
let instructor = {
	firstName: 'Colt',
	[favoriteNumber]: 'That is my favorite!'
};

let newInstructor = {
	firstName: 'Colt',
	sayHi() {
		return 'hi!';
	},
	sayBye() {
		return `${this.firstName} says bye!`;
	}
};

const createAnimal = (species, verb, noise) => {
	return {
		species,
		[verb]() {
			return `${noise}`;
		}
	};
};
