import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);
// rootReducer là 1 function, dùng để cập nhập lại các state của kho chung dựa trên action hiện tại
// initValue là 1 object, dùng này cập đặt state ban đầu
// enhancer là 1 function, dùng này cập đặt middleware

export default store;