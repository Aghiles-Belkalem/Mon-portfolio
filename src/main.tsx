import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MesProjets from "./Pages/Projets.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MonParcour from "./Pages/Parcours.tsx";
import HomePage from "./components/Accueil/HomePage.tsx";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext.tsx";
import { LanguageProvider } from "./TaductionContext/LanguagesContext.tsx";
import App from "./App.tsx";
import MesDiplomes from "./Pages/diplomes.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/Mes diplomes",
				element: <MesDiplomes />,
			},
			{
				path: "/Mon Parcours",
				element: <MonParcour />,
			},
			{
				path: "/Mes Projets",
				element: <MesProjets />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<LanguageProvider>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</LanguageProvider>
	</StrictMode>,
);
