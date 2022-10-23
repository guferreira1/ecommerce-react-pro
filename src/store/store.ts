import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// @ts-ignore
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore'

import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cartReducer']
}

const persistedRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
)

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(thunk, logger)
)
export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
