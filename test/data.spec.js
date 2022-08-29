import {sortByAZ, sortByZA,filterData,filterName,computeStats} from '../src/data.js';

const characters = [
  { 
    "id": 1,
   "name": "Rick Sanchez",
   "status": "Alive",
   "species": "Human",
   "gender": "Male",
  },  
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female", 
  },
  {
    "id": 13,
    "name": "Alien Googah",
    "status": "unknown",
    "species": "Alien",
    "gender": "unknown", 
  }
  
];

describe("sortByAZ", () => {
  it('is a function', () => {
    expect(typeof sortByAZ).toBe('function');
  });

  it('deve ordenar um array por ordem alfabética', () => {
    const ordenado = sortByAZ(characters)    
    
    expect(ordenado.length).toBe(characters.length);
    expect(ordenado).toEqual([  
  {
    "id": 13,
    "name": "Alien Googah",
    "status": "unknown",
    "species": "Alien",
    "gender": "unknown", 
  },
  { 
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },  
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female", 
  },
]);
});
});

describe("sortByZA", () => {
  it('is a function', () => {
    expect(typeof sortByZA).toBe('function');
  });

  it('deve ordenar um array pela ordem de Z a A', () => {
    const sortByZA = sortByAZ(characters).reverse();   
    expect(sortByZA).toEqual([  
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female", 
      },
      { 
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
      },
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "gender": "unknown", 
      }
    ]); 
  });
});

describe("filterData", () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('deve filtrar pelo os dados de gender', () => {   
    expect(filterData(characters,"gender", "Female" )).toEqual([
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female", 
      }
    ]);

    expect(filterData(characters,"gender", "Male" )).toEqual([
      { 
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
      }
    ]);

    expect(filterData(characters,"gender", "unknown")).toEqual([
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "gender": "unknown", 
      }
    ]);
  });
});

describe("filterData", () => {
    it('deve filtrar pelo os dados de status', () => {   
    expect(filterData(characters,"status","Alive")).toEqual([
     { 
       "id": 1,
       "name": "Rick Sanchez",
       "status": "Alive",
       "species": "Human",
       "gender": "Male",
    },  
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female", 
    }  
  ]);
  });
});

describe("filterData", () => {
  it('deve filtrar pelo os dados de species', () => {   
  expect(filterData(characters,"species","Alien")).toEqual([
    {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "gender": "unknown", 
    }
  ]);
  });
});

describe("filterName", () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('deve pesquisar pelo nome', () => {
    const pesquisar = filterName(characters, 'Summer');   
    expect(pesquisar).toEqual([
      {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female", 
    }  
    ])
  });
});

describe("computeStats", () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('calcular a pocentagem de personagens "Alive"', () => {
    const calcular = computeStats(characters,"status", "Alive");   
    const resultado = 2;
    expect(calcular).toEqual(resultado);
  });
});