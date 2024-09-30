import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BETA_ROUTE, STARTPAGE_ROUTE } from "../../routes/consts";
import { appContext } from "../../context";
import actions from "../../static/actions.json"
import questions from "../../static/questions.json"
import penaltys from "../../static/penaltys.json"
import whostart from "../../static/whostart.json"
import { modes } from "../../static/modes"

const AboutPage = () => {
    const history = useNavigate();

    const {setFastType, showPenalty, setShowPenaltyDefault} = useContext(appContext);

    return (
        <main>
            <div className="settings">
                <h1 className="title">О проекте</h1>
                <p className="p-big mt-1">
                    Данный сайт - это игра "Правда или Действие" (да, да), которую так сильно любят многие. 
                    <br />
                    Мы имеем самую большую базу данных "Правды" и "Действий"
                </p>
                <h2 className="mt-4">Статистика</h2>
                <p className="note">На данный момент на сайте:</p>
                <div className="p-big mt-1">
                    {/* сделать подсчет автономным в независимости от количества */}
                    <p>{questions.classic.length + questions.party.length} вопроса ("правда")</p>
                    <p>{actions.classic.length + actions.party.length} действий</p>
                    <p>{penaltys.light.length + penaltys.hard.length} наказаний (из них - {penaltys.light.length} легких и {penaltys.hard.length} тяжелых)</p>
                    <p>{modes.length} режима игры</p>
                    <p>{whostart.random.length} вариантов, кто будет начинать</p>
                    <p className="note">скоро - больше</p>
                </div>
                <h2 className="mt-4">О содержании контента</h2>
                <p className="p-big mt-1">Все вопросы и действия придумывал автор сайта, все совпадения - случайны и не имеют отношения к контенту в интернете</p>
                <h2 className="mt-4 mb-1">Автор</h2>
                <a 
                    href="https://github.com/roso1nik" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    github@roso1nik
                </a>
                <div className="flex-row mt-2">
                    <Button 
                        variant="text" 
                        onClick={() => history(BETA_ROUTE)}
                        sx={{ p: 0 }}
                        className="white"
                    >
                        бета-версия
                    </Button>
                </div>
                <div className="flex-row play-buttons mt-3">
                    <Button 
                        className="wfull"
                        onClick={() => {history(STARTPAGE_ROUTE); setFastType(false); if (showPenalty) setShowPenaltyDefault(false); if (showPenalty === false) setShowPenaltyDefault(true)}}
                    >
                        Играть
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default AboutPage;