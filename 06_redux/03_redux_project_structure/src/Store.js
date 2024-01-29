// import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly'
// import {applyMiddleware, combineReducers, createStore} from 'redux'
// import ReduxThunk from'redux-thunk'

// const rootReducer = combineReducers({
//     'action' : (state, {payload}) => {
//         console.log('payload : ', payload);
//         return payload;
//     }
// })

// const Store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(ReduxThunk))
// )

// export default Store;

import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./modules";



const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
/* 
redux 변경 사항

최신버전 redux 5.0.1에서 composeWithDevTools를 사용하려면 아래와 같이 install 해야 한다
npm install @redux-devtools/extension
*/

export default store;