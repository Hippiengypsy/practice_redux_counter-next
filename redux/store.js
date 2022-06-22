const { createStore } = require("redux");
const { rootReducer } = require("./reducer");

export const store = createStore(rootReducer)