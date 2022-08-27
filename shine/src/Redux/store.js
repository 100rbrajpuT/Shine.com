import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
const rootReducer=combineReducers({AppReducer,AuthReducer})




const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
export const store =legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))); 
 


// import {legacy_createStore}from"redux"
// import { reducer   } from "./reducer"
// const store=legacy_createStore(AppReducer)
// export {store}    