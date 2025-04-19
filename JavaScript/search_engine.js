/* In-memory search engine 

    - where multiple documents could be stored under a particular namespace
    - search on them and sort the results by passing the orderBy parameter
    - use map
*/

class InMemorySearch {
  constructor() {
    this.entities = new Map();
  }

  // register the new namespace
  registerNameSpace(name) {
    this.entities.set(name, []);
  }

  // add document to namespace
  addDocuments(namespace, ...documents) {
    const existing = this.entities.get(namespace);
    if (!existing) {
      this.entities.set(namespace, [...documents]);
    } else {
      this.entities.set(namespace, [...existing, ...documents]);
    }
  }

  // search the documents of the given namespace
  search(namespace, filterFN, orderByFN) {
    // get the namespace
    const docs = this.entities.get(namespace);

    // get it filtered
    const filteredDocs = docs.filter((e) => filterFN(e));

    // if orderBy is requested
    if (orderByFN) {
      const { key, asc } = orderByFN;
      return filteredDocs.sort((a, b) => {
        if (asc) {
          return a[key] - b[key];
        } else {
          return b[key] - a[key];
        }
      });
    }
    return filteredDocs;
  }
}

const searcEngine = new InMemorySearch();

searcEngine.addDocuments(
  'Movies',
  { name: 'Avenger', rating: 8.5, year: 2017 },
  { name: 'Black Adam', rating: 8.7, year: 2022 },
  { name: 'John Wick 4', rating: 8.2, year: 2023 },
  { name: 'Black Panther', rating: 9.0, year: 2022 },
);

console.log(
  searcEngine.search('Movies', (e) => e.rating > 8.5, {
    key: 'rating',
    asc: false,
  }),
);
