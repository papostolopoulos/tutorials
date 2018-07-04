var animals = [
	{name: 'Fluffykins', species: 'rabbit'},
	{name: 'Monroe', species: 'dog'},
	{name: 'Lily', species: 'cat'},
	{name: 'Orlando', species: 'dog'},
	{name: 'Harold', species: 'rabbit'},
	{name: 'Marilyn', species: 'cat'},
	{name: 'Maud', species: 'bird'},
	{name: 'Hyde', species: 'snake'},
	{name: 'Hamilton', species: 'dog'},
	{name: 'Doc', species: 'bird'}
];

var animalType = (item) => {
  return animals.filter(function(el){
    if(item === el.species)
    return el;
  });
	};

animalType('cat');

var rabbits = animals.filter(el => animals === el.species);
console.log(rabbits);
