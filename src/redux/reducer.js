import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// ## Generator Reducer Imports
import app from '../modules/AppState';
import auth from '../reducers/AuthReducer';
import users from '../reducers/UserReducer';
import gallery from '../reducers/GalleryReducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['isLoading'],
};

const usersPersistConfig = {
  key: 'users',
  storage: storage,
  blacklist: ['isLoading', 'success', 'error', 'searchUsers'],
};

export default combineReducers({
  // ## Generator Reducers
  app: persistReducer(getNormalConfig('app', []), app),
  auth: persistReducer(authPersistConfig, auth),
  users,
  gallery
});


function getNormalConfig(name, blackList) {
  return {
    key: name,
    storage: storage,
    blacklist: blackList,
  };
}