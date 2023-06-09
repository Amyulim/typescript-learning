// type Word = {
//   term:string;
//   def:string;
// }
class Word {
  constructor(public term: string, public def: string) {}
}

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.get(term)) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.get(term)) {
      this.words[term] = newDef;
    }
  }
  count() {
    return Object.keys(this.words).length;
  }
  showAll() {
    let output = "\n-Dictionary Content-\n";
    Object.keys(this.words).forEach(
      (term) => (output += `${term}: ${this.words[term]}\n`)
    );
    output += "--End \n";
    console.log(output);
  }
  upsert(term: string, def: string) {
    if (this.get(term)) {
      this.update(term, def);
    } else {
      this.add(term, def);
    }
  }
  exists(term: string) {
    return this.get(term) ? true : false;
  }
  bulkAdd(words: Word[]) {
    words.forEach((word) => this.add(word.term, word.def));
  }
  bulkDelete(terms: string[]) {
    terms.forEach((term) => this.delete(term));
  }
}

const dictionary = new Dict();

// Add
dictionary.add("kimchi", "korean food");
dictionary.showAll();

// Count
console.log(dictionary.count());

// Update
dictionary.update("kimchi", "Good food");
console.log(dictionary.get("kimchi"));

// Delete
dictionary.delete("kimchi");
console.log(dictionary.count());

// Upsert
dictionary.upsert("kimchi", "healthy food");
console.log(dictionary.get("kimchi"));

// Exists
console.log(dictionary.exists("kimchi"));

// Bulk Add
dictionary.bulkAdd([
  { term: "pizza", def: "delicious food" },
  { term: "tomato pasta", def: "carbs" },
]);
dictionary.showAll();

// Bulk Delete
dictionary.bulkDelete(["pizza", "kimchi"]);
dictionary.showAll();
