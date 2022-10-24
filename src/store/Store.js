import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  qoutesGenrator  from "./Slice/QouteApi";
const rootReducer = combineReducers({
  qouteDataInfo: qoutesGenrator,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
