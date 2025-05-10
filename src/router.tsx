import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdoptionPage from "./pages/AdoptionPage/AdoptionPage";
import AnimalPage from "./pages/AnimalPage/AnimalPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ReportPage from "./pages/ReportPage/ReportPage";
import NewsletterPage from "./pages/NewsletterPage/NewsletterPage";

const router = createBrowserRouter([
	{
		element: <App />,
		path: "/",
		children: [
			{
				element: <AdoptionPage />,
				path: "/adoption",
			},
			{
				element: <AnimalPage />,
				path: "/animal",
			},
			{
				element: <NewsletterPage />,
				path: "/news",
			},
			{
				element: <ReportPage />,
				path: "/report",
			},
			{
				element: <LoginPage />,
				path: "/login",
			},
		],
	},
]);

export default router;
