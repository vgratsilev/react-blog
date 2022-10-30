import { userActions, userReducer } from './model/slice/userSlice';
import type { IUser, IUserSchema } from './model/types/IUserSchema';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export { userActions, userReducer, IUser, IUserSchema, getUserAuthData, getUserMounted };
