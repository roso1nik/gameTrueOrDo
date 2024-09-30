import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GAME_ROUTE } from "../../routes/consts";
import { appContext } from "../../context";
import getRandomInt from "../../functions/getRandomInt";
import whostart from "../../static/whostart.json";
import { modes } from "../../static/modes.js";
import AlertDialogSlideIcon from "../UI/AlertDialogSlideIcon";



const Start = () => {
    const history = useNavigate();

    const {fastType, setFastType} = useContext(appContext);
    const {gameType, setGameType} = useContext(appContext);
    const {penalty, setPenalty} = useContext(appContext);
    const {text, setText, choose, setChoose, textWhoStart, setWhoStart} = useContext(appContext)
    const {customQuestion, setCustomQuestion, customAction, setCustomAction, playerStepNow, setPlayerStepNow, showPenalty, setShowPenalty, showPenaltyDefault, setShowPenaltyDefault} = useContext(appContext)

    
    
    const handleChange = (event, newGameType) => {
        setGameType(newGameType);
    };

    console.log(gameType)

    function startGame(type) {
        history(GAME_ROUTE)
        setText('')
        setChoose('')
        chooseStartMessage()
        setPlayerStepNow(0)
        if (gameType !== null) setFastType(type)
        if (gameType === 'custom') setFastType(false)
        if (penalty === null) setPenalty('none')
        setShowPenaltyDefault(showPenalty)
    }

    function chooseStartMessage() {
        const i = getRandomInt(1, whostart.random.length) - 1
        setWhoStart(whostart.random[i])
    }

    return (
        <main className="start-page">
            <div className="hello">
                <h1 className="title">Правда или действие?</h1>
                <p className="note mb-3">Играй в случайном порядке или по очереди</p>
            </div>
            <div className="flex-column gap-0">
                <div className="flex-row">
                    <ToggleButtonGroup
                        color="primary"
                        value={gameType}
                        exclusive
                        onChange={handleChange}
                        className="choosegame-buttons wrap"
                    >
                        {modes.map(mode => (
                            <ToggleButton 
                                value={mode.value} 
                                key={Math.random()}
                            >
                                {mode.emoji}
                                {mode.name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>
                <div className="flex-row play-buttons">
                    <Button 
                        variant="contained"
                        onClick={() => startGame(true)}
                    >
                        Играть!
                    </Button>
                    <Button 
                        variant="contained"
                        onClick={() => startGame(false)}
                        className="nobg-button"
                    >
                        Настроить
                    </Button>
                    <AlertDialogSlideIcon
                        icon={<ShareIcon />} 
                        title="Поделиться сайтом"
                        textTITLE="Поделиться сайтом"
                        textDESC="Ссылка: https://roso1nik.github.io/truth-or-dare/"
                    />
                </div>
            </div>
        </main>
    )
}

export default Start;