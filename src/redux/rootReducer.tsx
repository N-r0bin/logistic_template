import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import userReducer from './slices/user'

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["settings"],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export { rootPersistConfig, rootReducer };