import { Button } from "@mui/material";
import React, { useContext } from "react";
import { appContext } from "../../context";
import actions from "../../static/actions.json"
import questions from "../../static/questions.json"
import penaltys from "../../static/penaltys.json"
import getRandomInt from "../../functions/getRandomInt";



const ChooserVariant = () => {
    const {fastType, setFastType, gameType, setGameType, players, setPlayers, text, setText, textPenalty, setTextPenalty, textWhoStart, setWhoStart, choose, setChoose, penalty, setPenalty, customQuestion, setCustomQuestion, customAction, setCustomAction, customPenalty, setCustomPenalty, playerStepNow, setPlayerStepNow, showPenalty, setShowPenalty, showPenaltyDefault, setShowPenaltyDefault, theme, setTheme} = useContext(appContext);

    if (playerStepNow === players.length) {setPlayerStepNow(0)}

    function chooseVariant(type) {
        if (type === 'question') {
            if (gameType === 'classic') {
                const i = getRandomInt(1, questions.classic.length) - 1
                setText(questions.classic[i])
                setChoose('question')
                choosePenalty()
                const next = playerStepNow + 1
                setPlayerStepNow(next)
                if (showPenaltyDefault) setShowPenalty(true)
                if (showPenaltyDefault === false) setShowPenalty(false)
            }
            if (gameType === 'party') {
                const i = getRandomInt(1, questions.party.length) - 1
                setText(questions.party[i])
                setChoose('question')
                choosePenalty()
                const next = playerStepNow + 1
                setPlayerStepNow(next)
                if (showPenaltyDefault) setShowPenalty(true)
                if (showPenaltyDefault === false) setShowPenalty(false)
            }
            if (gameType === 'custom') {
                const i = getRandomInt(1, customQuestion.length) - 1
                setText(customQuestion[i])
                setChoose('question')
                choosePenalty()
                const next = playerStepNow + 1
                setPlayerStepNow(next)
                if (showPenaltyDefault) setShowPenalty(true)
                if (showPenaltyDefault === false) setShowPenalty(false)
            }
        }
        if (type === 'action') {
            if (gameType === 'classic') {
                const i = getRandomInt(1, actions.classic.length) - 1
                setText(actions.classic[i])
                setChoose('action')
                choosePenalty()
                const next = playerStepNow + 1
                setPlayerStepNow(next)
                if (showPenaltyDefault) setShowPenalty(true)
                if (showPenaltyDefault === false) setShowPenalty(false)
            }
            if (gameType === 'party') {
                const i = getRandomInt(1, actions.party.length) - 1
                setText(actions.party[i])
                setChoose('action')
                choosePenalty()
                const next = playerStepNow + 1
                setPlayerStepNow(next)
                if (showPenaltyDefault) setShowPenalty(true)
                if (showPenaltyDefault === false) setShowPenalty(false)
            }
            if (gameType === 'custom') {
                const i = getRandomInt(1, customAction.length) - 1
                setText(customAction[i])
                setChoose('action')
                choosePenalty()
                const next = playerStepNow + 1
                setPlayerStepNow(next)
                if (showPenaltyDefault) setShowPenalty(true)
                if (showPenaltyDefault === false) setShowPenalty(false)
            }
        }
    }

    function choosePenalty() {
        if (penalty === 'light') {
            const i = getRandomInt(1, penaltys.light.length) - 1
            setTextPenalty(penaltys.light[i])
        }
        if (penalty === 'hard') {
            const i = getRandomInt(1, penaltys.hard.length) - 1
            setTextPenalty(penaltys.hard[i])
        }
        if (penalty === 'custom') {
            const i = getRandomInt(1, customPenalty.length) - 1
            setTextPenalty(customPenalty[i])
        }
    }

    return (
        <div className="flex-row play-buttons mt-3">
            <Button 
                variant="contained"
                onClick={() => chooseVariant('question')}
            >
                Правда
            </Button>
            или
            <Button 
                variant="contained"
                onClick={() => chooseVariant('action')}
                className="nobg-button"
            >
                Действие
            </Button>
        </div>
    )
}

export default ChooserVariant;