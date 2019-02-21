class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; // km2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per sq/km`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'medium');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street`
    );
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3456),
  new Park('Oak Park', 1953, 0.4, 949)
];
const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen street ', 1967, 2.1, 2),
  new Street('St. Judas', 1932, 3.6),
  new Street('Electric Avenue', 2012, 2.3, 5)
];

function reportParks(park) {
  console.log('<=== Park Report ===>');
}

function reportStreets(street) {}

reportParks(allParks);
reportStreets(allStreets);
