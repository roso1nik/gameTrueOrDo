import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../context";
import { STARTPAGE_ROUTE } from "../../routes/consts";

const BetaTitleUI = () => {

    const history = useNavigate();
    const {setFastType, showPenalty, setShowPenaltyDefault} = useContext(appContext);

    return (
        <>
            <Typography variant="h3" className="note infinite-text-revert">
                beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta
            </Typography>
            <Typography variant="h3" sx={{ my: 5 }}>
                Скоро здесь будут показаны новые фишки
            </Typography>
            <Typography variant="h3" className="note infinite-text">
                beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta beta
            </Typography>
        </>
    )
}

export default BetaTitleUI;