import { UserRole } from '../consts/userConsts';

export interface IUser {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface IUserSchema {
    authData?: IUser;

    _mounted: boolean;
}
