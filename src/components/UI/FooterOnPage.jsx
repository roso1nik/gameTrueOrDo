import { Box, Button } from "@mui/material";
import React from "react";
import ConstructionIcon from '@mui/icons-material/Construction';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ABOUT_ROUTE } from "../../routes/consts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../context";

const FooterOnPage = () => {
    const history = useNavigate();
    const {theme, setTheme} = useContext(appContext);

    const changeTheme = () => {
        if (theme === false) setTheme(true)
        if (theme) setTheme(false)
    }

    return (
        <footer>
            <Box
                sx={{ my: 3 }}
            >
                <div className="flex-row note gap-2 feedback wrap">
                    {/* <Button
                        variant="text"
                        className="flex-row tdn"
                        onClick={() => history(ABOUT_ROUTE)}
                        startIcon={<ConstructionIcon />}
                    >
                        внести свой вклад
                    </Button>
                    <Button
                        variant="text"
                        className="flex-row tdn"
                        onClick={() => history(ABOUT_ROUTE)}
                        startIcon={<FeedbackIcon />}
                    >
                        отзыв
                    </Button> */}
                    <Button
                        variant="text"
                        className="flex-row tdn"
                        onClick={() => history(ABOUT_ROUTE)}
                        startIcon={<HelpOutlineIcon />}
                    >
                        о проекте
                    </Button>
                    <Button
                        variant="text"
                        className="flex-row tdn"
                        onClick={() => window.open("https://github.com/roso1nik/truth-or-dare/releases", "_blank")}
                    >
                        v1.3
                    </Button>
                    <Button
                        variant="text"
                        className="flex-row tdn"
                        onClick={() => changeTheme()}
                    >
                        {!theme
                            ?   'белая'
                            :   'темная'
                        }
                        &nbsp;тема
                    </Button>
                </div>
                <div className="flex-column note mt-1 aic_f">
                    <div className="flex-row">
                        <p>created by&nbsp;</p>
                        <a href="https://github.com/roso1nik" target="_blank" rel="noreferrer noopener">roso1nik</a>
                    </div>
                    <p className="note">?ILNP❤</p>
                </div>
            </Box> 
        </footer>
    )
}

export default FooterOnPage;