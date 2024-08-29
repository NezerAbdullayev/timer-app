import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (theme) return theme;
};
