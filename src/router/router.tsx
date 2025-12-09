import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import App from "../App";
import AboutPage from "../pages/association/AboutPage";
import PartnersPage from "../pages/association/PartnersPage";
import RecruitmentPage from "../pages/association/RecruitmentPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ArticlesPage from "../pages/publications/ArticlesPage";
import FirefightersPage from "../pages/publications/FirefightersPage";
import DangersPage from "../pages/safety/DangersPage";
import GoodPracticePage from "../pages/safety/GoodPractice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "association",
        element: <Outlet />,
        children: [
          { index: true, element: <Navigate to="histoire" replace /> },
          { path: "histoire", element: <AboutPage /> },
          { path: "partenaires", element: <PartnersPage /> },
          { path: "recrutement", element: <RecruitmentPage /> },
        ],
      },

      {
        path: "prevention",
        element: <Outlet />,
        children: [
          { index: true, element: <Navigate to="bonnes-pratiques" replace /> },
          { path: "bonnes-pratiques", element: <GoodPracticePage /> },
          { path: "dangers", element: <DangersPage /> },
        ],
      },

      {
        path: "reportages",
        element: <Outlet />,
        children: [
          { index: true, element: <Navigate to="articles" replace /> },
          { path: "articles", element: <ArticlesPage /> },
          { path: "pompiers", element: <FirefightersPage /> },
        ],
      },

      {
        path: "contact",
        element: <ContactPage />,
      },

      {
        path: "*",
        element: <h1>404 - Page non trouvée</h1>,
      },
    ],
  },
]);
