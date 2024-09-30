import { Button, Chip, IconButton, Switch, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../context";
import { GAME_ROUTE, STARTPAGE_ROUTE } from "../../routes/consts";
import ChooserVariant from "../UI/ChooserVariant";
import whostart from "../../static/whostart.json";
import getRandomInt from "../../functions/getRandomInt";
import { modes } from "../../static/modes.js";
import { penalty_modes } from "../../static/penalty_modes";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';


const Game = () => {
    const history = useNavigate();
    const {fastType, setFastType, gameType, setGameType, text, setText, textPenalty, setTextPenalty, textWhoStart, setWhoStart, choose, setChoose, players, setPlayers, penalty, setPenalty, customQuestion, setCustomQuestion, customAction, setCustomAction, customPenalty, setCustomPenalty, playerStepNow, setPlayerStepNow, showPenalty, setShowPenalty, showPenaltyDefault, setShowPenaltyDefault, theme, setTheme} = useContext(appContext);

    let russianGameType = gameType
    if (gameType === 'classic') russianGameType = 'классик'
    if (gameType === 'party') russianGameType = 'пати'
    if (gameType === 'custom') russianGameType = 'свои вопросы'

    const [showPenaltyBool, setShowPenaltyBool] = useState(false);
    const handleShowPenalty = () => {
        if (showPenaltyBool === false) {
            setShowPenalty(true)
            setShowPenaltyBool(true)
            return
        }
        if (showPenaltyBool) {
            setShowPenalty(false)
            setShowPenaltyBool(false)
            return
        }
    }
    const handleChange = (event, newGameType) => {
        setGameType(newGameType);
    };
    const handleChangePenalty = (event, newGameType) => {
        setPenalty(newGameType);
    };

    function startGame(type) {
        history(GAME_ROUTE)
        setText('')
        setChoose('')
        chooseStartMessage()
        setPlayerStepNow(0)
        if (gameType !== null) setFastType(type)
        if (gameType === 'custom' && customQuestion.length === 0 && customAction.length === 0) {
            history(GAME_ROUTE)
            setFastType(false)
        }
        if (penalty === null) setPenalty('none')
        setShowPenaltyDefault(showPenalty)
    }

    const [inputValue, setInputValue] = useState('');
    function addPlayer() {
        if (inputValue !== '') {
            setPlayers([...players, [inputValue]])
            setInputValue('')
        }
    }
    function removeAll() {
        setPlayers([])
    }

    const [inputValueQuestion, setInputValueQuestion] = useState('');
    function addQuestion() {
        if (inputValueQuestion !== '') {
            setCustomQuestion([...customQuestion, [inputValueQuestion]])
            setInputValueQuestion('')
        }
    }
    function removeQuestion() {
        setCustomQuestion([])
    }
    const [inputValueAction, setInputValueAction] = useState('');
    function addAction() {
        if (inputValueAction !== '') {
            setCustomAction([...customAction, [inputValueAction]])
            setInputValueAction('')
        }
    }
    function removeAction() {
        setCustomAction([])
    }
    const [inputValuePenalty, setInputValuePenalty] = useState('');
    function addPenalty() {
        if (inputValuePenalty !== '') {
            setCustomPenalty([...customPenalty, [inputValuePenalty]])
            setInputValuePenalty('')
        }
    }
    function removePenalty() {
        setCustomPenalty([])
    }
    
    // защита от случайной перезагрузке страницы при добавлении своих вариантов
    if (gameType === 'custom' && (customQuestion.length !== 0 || customAction.length !== 0)) {
        window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            event.returnValue = '';
        });
    }
    

    function chooseStartMessage() {
        const i = getRandomInt(1, whostart.random.length) - 1
        setWhoStart(whostart.random[i])
    }


    console.log(`game started with fast start(${fastType}) and ${gameType} mode, penalty: ${penalty}(${showPenalty}), players: ${players}; THEME: ${theme}`)
    return (
        <main>
            {fastType
                ?   <div>
                        <div className="flex-row note mb-1 gap-0">
                            <Tooltip title="Вернуться в главное меню" placement="top" arrow>
                                <IconButton
                                    onClick={() => {history(STARTPAGE_ROUTE); setFastType(false); if (showPenalty) setShowPenaltyDefault(false); if (showPenalty === false) setShowPenaltyDefault(true)}}
                                >
                                    <HomeIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Настройки" placement="top" arrow>
                                <IconButton
                                    onClick={() => {setFastType(false)}}
                                >
                                    <SettingsIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <Chip 
                            color="error" 
                            label={`режим: ${russianGameType}`} 
                            variant="outlined"
                        />
                        {text !== ''
                            ?   <h1 className="title">
                                    {choose === 'question'
                                        ?   <>Вопрос</>
                                        :   <>Действие</>
                                    }
                                </h1>
                            :   <h1 className="title">Погнали!</h1>
                        }
                        {choose !== ''
                            ?   <></>
                            :   <h1 className="note">
                                    {textWhoStart}
                                    {/* {players.length === 0
                                        ?   <p>{textWhoStart}</p>
                                        :   <></>
                                    } */}
                                </h1>
                        }
                        <p className="mt-3 question">{text}</p>
                        {penalty !== 'none'
                            ?   <div>
                                    {text !== ''
                                        ?   <div className="flex-row">
                                                {textPenalty !== undefined
                                                    ?   <div className="note mt-3 flex-row wrap">
                                                            Наказание, если игрок не выполнил задачу:&nbsp;
                                                            {showPenalty
                                                                ?   <div className="flex-row">
                                                                        <p>{textPenalty}</p>
                                                                        <Button 
                                                                            variant="text"
                                                                            onClick={handleShowPenalty}
                                                                            sx={{ ml: 3 }}
                                                                        >
                                                                            скрыть
                                                                        </Button>
                                                                    </div>
                                                                :   <div className="flex-row">
                                                                        <p className="penalty-blur">{textPenalty}</p>
                                                                        <Button 
                                                                            variant="text"
                                                                            onClick={handleShowPenalty}
                                                                            sx={{ ml: 3 }}
                                                                        >
                                                                            показать
                                                                        </Button>
                                                                    </div>
                                                            }
                                                        </div>
                                                    :   <></>
                                                }
                                            </div>
                                        :   <></>
                                    }
                                </div>
                            :   <></>
                        }
                        {players.length !== 0
                            ?   <p className="mt-1">Следующий(-ая) ходит: {`${players[playerStepNow]}`}</p>
                            :   <></>
                        }
                        <ChooserVariant />
                    </div>
                :   <div className="settings">
                        <h1 className="title">Настройки</h1>
                        <div className="mt-3">
                            <h2>Тип вопросов:</h2>
                            <div className="flex-row mt-1">
                                <ToggleButtonGroup
                                    color="primary"
                                    value={gameType}
                                    exclusive
                                    onChange={handleChange}
                                    className="choosegame-buttons wrap"
                                >
                                    {modes.map(mode => (
                                        <ToggleButton value={mode.value} key={Math.random()}>
                                            {mode.emoji}
                                            {mode.name}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h2>Наказания:</h2>
                            <div className="flex-row mt-1">
                                <ToggleButtonGroup
                                    color="primary"
                                    value={penalty}
                                    exclusive
                                    onChange={handleChangePenalty}
                                    className="choosegame-buttons wrap"
                                >
                                    {penalty_modes.map(i => (
                                        <ToggleButton value={i.value} key={Math.random()}>
                                            {i.name}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                            <div className="mt-1 flex-row">
                                <p className="note">Показывать наказание сразу:</p>
                                <Switch 
                                    value={showPenalty}
                                    onChange={handleShowPenalty}
                                    checked={showPenalty}
                                />
                            </div>
                        </div>
                        <div className="paper">
                        {gameType === 'custom'
                            ?   <div className="mt-3">
                                    <h2>Добавить свои вопросы:</h2>
                                    <div className="mt-2">
                                        <h3>Правда:</h3>
                                        {customQuestion.length !== 0
                                            ?   <div>
                                                    {customQuestion.map(question => (
                                                        <p
                                                            key={Math.random()}
                                                            className="player-li"
                                                        >
                                                            {question}
                                                        </p>
                                                    ))}
                                                </div>
                                            :   <p className="note">Не добавлено ни одной правды</p>
                                        }
                                        <div className="flex-row players-box mt-1 wrap gap-1">
                                            <input
                                                placeholder="например, сколько ошибок ты совершил в жизни?"
                                                value={inputValueQuestion}
                                                onChange={e => setInputValueQuestion(e.target.value)}
                                            />
                                            <Button onClick={addQuestion}>
                                                Добавить
                                            </Button>
                                        </div>
                                        <Button 
                                            onClick={removeQuestion}
                                            color="error"
                                        >
                                            Удалить все
                                        </Button>
                                    </div>
                                    <div className="mt-2">
                                        <h3>Действие:</h3>
                                        {customAction.length !== 0
                                            ?   <div>
                                                    {customAction.map(action => (
                                                        <p
                                                            key={Math.random()}
                                                            className="player-li"
                                                        >
                                                            {action}
                                                        </p>
                                                    ))}
                                                </div>
                                            :   <p className="note">Не добавлено ни одного действия</p>
                                        }
                                        <div className="flex-row players-box mt-1 wrap gap-1">
                                            <input
                                                placeholder="например, встань на голову"
                                                value={inputValueAction}
                                                onChange={e => setInputValueAction(e.target.value)}
                                            />
                                            <Button onClick={addAction}>
                                                Добавить
                                            </Button>
                                        </div>
                                        <Button 
                                            onClick={removeAction}
                                            color="error"
                                        >
                                            Удалить все
                                        </Button>
                                    </div>
                                </div>
                            :   <></>
                        }
                        {penalty === "custom"
                            ?   <div className="mt-3">
                                    <h2>Добавить свои наказания:</h2>
                                    <div className="mt-1">
                                        {customPenalty.length === 0
                                            ?   <p className="note">Не добавлено ни одного наказания</p>
                                            :   <div>
                                                    {customPenalty.map(penalty => (
                                                        <p
                                                            key={Math.random()}
                                                            className="player-li"
                                                        >
                                                            {penalty}
                                                        </p>
                                                    ))}
                                                </div>
                                        }
                                        <div className="flex-row mt-3 gap-1 players-box wrap">
                                            <input
                                                placeholder="добавьте новое наказание здесь"
                                                value={inputValuePenalty}
                                                onChange={e => setInputValuePenalty(e.target.value)}
                                            />
                                            <Button onClick={addPenalty}>
                                                Добавить
                                            </Button>
                                        </div>
                                        <Button 
                                            onClick={removePenalty}
                                            color="error"
                                        >
                                            Удалить все
                                        </Button>
                                    </div>
                                </div>
                            :   <></>
                        }
                        <div className="mt-3 players-box">
                            <h2>Игроки:</h2>
                            {!players.length
                                ?   <p className="note mt-1">игроков еще нет:(</p>
                                :   <div>
                                        {players.map(player => (
                                            <p 
                                                key={Math.random()}
                                                className="player-li"
                                            >
                                                {player}
                                            </p>
                                        ))}
                                    </div>
                            }
                            <div className="flex-row mt-3 gap-1 wrap">
                                <input
                                    placeholder="добавьте нового игрока здесь"
                                    value={inputValue}
                                    onChange={e => setInputValue(e.target.value)}
                                />
                                <Button onClick={addPlayer}>
                                    Добавить
                                </Button>
                            </div>
                            <Button 
                                onClick={removeAll}
                                color="error"
                            >
                                Удалить всех
                            </Button>
                        </div>
                        </div>
                        <div className="mt-3 play-buttons">
                            {gameType === 'custom' && (customQuestion.length === 0 || customAction.length === 0)
                                ?   <div className="flex-row note gap-1">
                                        <Tooltip 
                                            title="Чтобы начать игру добавьте хотя бы 1 вопрос и действие или выберите другой тип вопросов"
                                            arrow
                                        >
                                            <Button 
                                                variant="contained"
                                                className="disabled"
                                            >
                                                Играть!
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Вернуться в главное меню" arrow>
                                            <IconButton
                                                className="nobg"
                                                onClick={() => {history(STARTPAGE_ROUTE); setFastType(false); if (showPenalty) setShowPenaltyDefault(false); if (showPenalty === false) setShowPenaltyDefault(true)}}
                                            >
                                                <HomeIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                :   <div className="flex-row note gap-1">
                                        <Button 
                                            variant="contained"
                                            onClick={() => startGame(true)}
                                        >
                                            Играть!
                                        </Button>
                                        <Tooltip title="Вернуться в главное меню" arrow>
                                            <IconButton
                                                className="nobg"
                                                onClick={() => {history(STARTPAGE_ROUTE); setFastType(false); if (showPenalty) setShowPenaltyDefault(false); if (showPenalty === false) setShowPenaltyDefault(true)}}
                                            >
                                                <HomeIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                            }
                        </div>
                    </div>
            }
        </main>
    )
}

export default Game;