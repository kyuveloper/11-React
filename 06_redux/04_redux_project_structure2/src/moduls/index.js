import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";


const rootReducer = combineReducers({/* 여러개의 리듀서 등록해서 하나로 만든다 */
    userReducer,
    menuReducer
});

export default rootReducer;