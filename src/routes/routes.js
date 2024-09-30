import React from 'react';
import { ABOUT_ROUTE, BETA_ROUTE, ERROR_ROUTE, GAME_ROUTE, STARTPAGE_ROUTE } from "./consts";
import ErrorPage from "../components/pages/ErrorPage";
import Start from "../components/pages/Start";
import Game from '../components/pages/Game';
import AboutPage from '../components/pages/AboutPage';
import BetaPage from '../components/pages/BetaPage';

export const publicRoutes = [
    {
        path: STARTPAGE_ROUTE,
        Component: <Start />
    },
    {
        path: ERROR_ROUTE,
        Component: <ErrorPage />
    },
    {
        path: GAME_ROUTE,
        Component: <Game />
    },
    {
        path: ABOUT_ROUTE,
        Component: <AboutPage />
    },
    {
        path: BETA_ROUTE,
        Component: <BetaPage />
    }
]