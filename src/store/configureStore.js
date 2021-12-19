import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import login from './login'
import photos from './photos'
/* import logger from './middleware/logger' */
import localStorage from './middleware/localStorage'

const middleware = [...getDefaultMiddleware(), localStorage]

const reducer = combineReducers({ login, photos })

const store = configureStore({ reducer, middleware })

export default store
