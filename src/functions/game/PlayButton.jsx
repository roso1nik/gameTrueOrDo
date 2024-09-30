import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../context";
import { STARTPAGE_ROUTE } from "../../routes/consts";

const PlayButton = () => {

    const history = useNavigate();
    const {setFastType, showPenalty, setShowPenaltyDefault} = useContext(appContext);

    const play = () => {
        history(STARTPAGE_ROUTE); 
        setFastType(false); 
        if (showPenalty) setShowPenaltyDefault(false);
        if (showPenalty === false) setShowPenaltyDefault(true)
    }

    return (
        <Button 
            className="wfull"
            onClick={() => play()}
        >
            Играть
        </Button>
    )
}

export default PlayButton;