const objs = [
  {
    'name': 'Paulo Andreola',
    'age': 47,
    'height': 1.72,
    'working': true,
    'job_details': {
      'job': 'trainee developer',
      'company': 'Sidelab/Dataside'
  },
    'hobbies': ['cycling','gym','reader'],
  },
  {
    'name': 'João',
    'age': 30,
    'height': 1.72,
    'working': false,
    'job_details': {
      'job': null,
      'company': null,
  },
    'hobbies': ['soccer','games'],
  },
]

// JSON
// converter objeto para JSON

const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter JSON para objeto

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
})
