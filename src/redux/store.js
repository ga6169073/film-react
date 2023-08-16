
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import homeSlice from "./homeSlice";
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { combineReducers } from "redux"
import sessionStorage from "redux-persist/lib/storage"
const persistConfig = {
    key: "root",
    version: 1,
    storage: sessionStorage,
};
const reducer = combineReducers({
    user: userReducer,
    home: homeSlice
})
const persistedReducer = persistReducer(persistConfig, reducer);
// export default configureStore({
//     reducer: {
//         user: userReducer,
//         home: homeSlice
//     }
// });
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    )
});

export default store;