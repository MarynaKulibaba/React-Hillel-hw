import { StorageKey } from "./const";

class LocalStorageService {
  key = null;
  constructor(key) {
    this.key = key;
  }

  getData() {
    return JSON.parse(localStorage.getItem(StorageKey))
      ? JSON.parse(localStorage.getItem(StorageKey))
      : [];
  }

  saveItem(data) {
    if (!data.id) throw new Error("No id on todo item");

    const savedData = this.getData();
    savedData.push(data);
    localStorage.setItem(this.key, JSON.stringify(savedData));
    return this.getData().at(-1);
  }

  removeTodoItem(todoItemId) {
    const data = this.getData();
    const index = data.findIndex(({ id }) => todoItemId === id);
    data.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(data));

    return this.getData();
  }
}

const localStorageService = new LocalStorageService(StorageKey);

export default localStorageService;
