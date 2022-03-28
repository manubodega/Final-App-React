import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './users/users';

export default configureStore({
  reducer: {
    users
  }
});