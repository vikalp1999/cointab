import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { deletereducer } from "./DeleteData/delete.reducer";
import { fetchReducer } from "./FetchData/fetch.reducer";
import { userReducer } from "./UserData/user.reducer";

const rootReducer= combineReducers({
    fetch:fetchReducer,
    delete:deletereducer,
    user:userReducer
})


export const store = legacy_createStore( rootReducer,applyMiddleware(thunk));