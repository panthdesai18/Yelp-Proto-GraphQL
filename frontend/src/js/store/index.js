import { createStore, applyMiddleware, compose } from 'redux';
import defaultReducer from "../reducers/index";
import thunk from 'redux-thunk';

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // let rr;
    const store = createStore(
      defaultReducer,
      storeEnhancers(applyMiddleware(thunk))
    );
    // console.log("store");
    // console.log(rr);
    
export default store; 