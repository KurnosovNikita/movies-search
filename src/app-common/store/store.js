import {createStore, applyMiddleware} from "redux";
import rootReducer from './store.reducer';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;