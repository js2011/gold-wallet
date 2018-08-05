class Store {
  set (key, value) {
    this[key] = value
  }
  get (key) {
    return this[key]
  }
  del (key) {
    delete this[key]
  }
}
export default new Store()
