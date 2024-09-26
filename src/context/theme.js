import { createContext, useContext } from "react";

export const themeMode = createContext({
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
});

export const ThemeProvider = themeMode.Provider;

export default function useTheme() {
	return useContext(themeMode);
}
