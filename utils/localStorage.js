const store = {
  getByKey(key) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    } catch (e) {
      return Error(e);
    }
  },

  setItem(key, data) {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (e) {
      return Error(e);
    }
  },
  deleteByKey(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return Error(e);
    }
  },
  deleteAll() {
    try {
      localStorage.clear();
    } catch (e) {
      return Error(e);
    }
  },
  getAll() {
    try {
      const data = {};
      const keys = Object.keys(localStorage);
      let i = keys.length;

      while (i--) {
        data[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
      }
      return data;
    } catch (e) {
      return Error(e);
    }
  }
};

export default store;
