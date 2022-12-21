import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
