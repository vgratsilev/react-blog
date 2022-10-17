import { IStateSchema } from 'app/providers/StoreProvider';
import { loginInitialState } from '../../slice/loginSlice';

export const getLoginState = (state: IStateSchema) => state?.loginForm ?? loginInitialState;
