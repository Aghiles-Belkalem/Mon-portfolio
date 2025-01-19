import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
};

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "dark" ? "light" : "dark";
			document.documentElement.setAttribute("data-theme", newTheme);
			return newTheme;
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme doit être utilisé dans un ThemeProvider");
	}
	return context;
};

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button className="theme-mode" type="button" onClick={toggleTheme}>
			{theme === "dark" ? "🌙" : "☀️"}
		</button>
	);
};
