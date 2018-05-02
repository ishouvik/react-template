import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';

const initialState = {}
const enhancers = []

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [
  ReduxThunk
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default () => {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};
