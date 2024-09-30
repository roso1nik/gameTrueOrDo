import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../context";
import PlayButton from "../../functions/game/PlayButton";
import BetaTitleUI from "../UI/BetaTitleUI";

const BetaPage = () => {
    const history = useNavigate();

    return (
        <Box component="main">
            <BetaTitleUI />
            <Box className="play-buttons mt-3">
                <PlayButton />
            </Box>
        </Box>
    )
}

export default BetaPage;