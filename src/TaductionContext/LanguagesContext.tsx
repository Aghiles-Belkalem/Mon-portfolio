import { createContext, useContext, useState, type ReactNode } from "react";
import { Traduction } from "../Traduction";

type Lang = "fr" | "en";

interface LanguageContextType {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: { [key: string]: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [lang, setLang] = useState<Lang>("fr");

	const t = Traduction[lang];

	return (
		<LanguageContext.Provider value={{ lang, setLang, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
