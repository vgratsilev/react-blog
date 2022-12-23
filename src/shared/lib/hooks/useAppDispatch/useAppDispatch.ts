import { TAppDispatch } from '@/app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
