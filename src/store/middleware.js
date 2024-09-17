import { combineReducers, createStore } from "redux";
import tokenReducer from "./tokens.js"

const reducers = combineReducers({
    [tokenReducer.mountPoint]: tokenReducer.reducer
})

const store = createStore(reducers);

export default store;