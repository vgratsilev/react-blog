export { IUser, IUserSchema, UserRole } from './model/types/user';
export { userActions, userReducer } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/roleSelectors/roleSelectors';
