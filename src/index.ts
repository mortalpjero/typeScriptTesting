let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

let newSales = 123;

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [1, 2, 3];

let randonInfo: any[] = ['good'];


// --------------List of Built-in types---------------- //


// Tuples

/* 1, 'Mosh' */
let user: [number, string] = [1, 'Mosh'];

// Enums

//const small = 1;
//const medium = 2;
//const large = 3;

/* or */
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);


//----------------------Functions-----------------------//

function calculateTax(income: number, taxYear = 2021) {
  if (taxYear < 2022) {
    return income * 0.2;
  }
  return income * 0.3;
}

calculateTax(10_000);


// Union types

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');


// Intersection type

type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => { },
  resize: () => { },
}


// Literal type
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';


// Nullable type
function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  }
  if (!name) {
    console.log('Hola!');
  }
}

greet(null);


// Null Checks
type Customer = {
  birthday?: Date
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(4);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = (message: string) => console.log(message);
log?.('a');

//-----------------------Objects------------------------//

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: 'John',
  retire: (date: Date) => {
    console.log(date);
  }
}
employee.name = 'Mosh';
