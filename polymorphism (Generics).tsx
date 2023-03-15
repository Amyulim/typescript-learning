//-------Polymorphism (Generics)-------//

interface IStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: IStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.set("hello", "hi");
stringsStorage.get("he");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
