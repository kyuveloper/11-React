import { legacy_createStore as createStore } from "redux";
import { composeWirhDevTools } from "@redux-devtools/extension";
import { thunk as ReduxThunk} from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./moduls";


const store = createStore(
    rootReducer,
    composeWirhDevTools(applyMiddleware(ReduxThunk, logger))
)

export default store;