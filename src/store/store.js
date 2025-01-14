import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Agrega tus slices aquí
    // user: userReducer,
  },
});

export default store;