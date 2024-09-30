import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleIcon from '@mui/icons-material/People';

export const modes = [
    {
        name: "Классик",
        value: "classic",
        emoji: <PeopleIcon />
    },
    {
        name: "Пати",
        value: "party",
        emoji: <WhatshotIcon />
    },
    {
        name: "Свои вопросы",
        value: "custom",
        emoji: <DashboardCustomizeIcon />
    },
]