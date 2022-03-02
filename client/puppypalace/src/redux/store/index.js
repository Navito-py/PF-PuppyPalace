import { createStore, applyMidleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMidleware(thunk))
);