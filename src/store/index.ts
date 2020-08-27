import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../redux/reducers';

const persistConfig: any = {
  key: 'marvelHeroes',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [],
  timeout: null,
};

let middleware: any[] = [];
if (__DEV__) {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store: any = createStore(
  persistedReducer,
  {},
  applyMiddleware(...middleware),
);

const persistor = persistStore(store);
if (__DEV__) {
  console.log('store was created:', store.getState().check);
}

export { store, persistor };
