import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import { Container } from '@mui/material';
import { appContext } from "./context/index";
import FooterOnPage from './components/UI/FooterOnPage';


const App = () => {
  const [fastType, setFastType] = useState(false);
  const [gameType, setGameType] = useState('classic');
  const [text, setText] = useState('');
  const [textPenalty, setTextPenalty] = useState('');
  const [textWhoStart, setWhoStart] = useState('Начинает самый старый игрок');
  const [choose, setChoose] = useState('');
  const [players, setPlayers] = useState([]);
  const [penalty, setPenalty] = useState('none');
  const [customQuestion, setCustomQuestion] = useState([]);
  const [customAction, setCustomAction] = useState([]);
  const [customPenalty, setCustomPenalty] = useState([]);
  const [playerStepNow, setPlayerStepNow] = useState(-1);
  const [showPenalty, setShowPenalty] = useState(false);
  const [showPenaltyDefault, setShowPenaltyDefault] = useState(false);
  const [theme, setTheme] = useState(false);

  // first check
  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (defaultDark) setTheme(true)
    if (defaultDark === false) setTheme(false)
  }, [])
  
  

  return (
    <appContext.Provider value={{
      fastType,
      setFastType,
      gameType,
      setGameType,
      text,
      setText,
      textPenalty,
      setTextPenalty,
      textWhoStart, 
      setWhoStart,
      choose,
      setChoose,
      players,
      setPlayers,
      penalty,
      setPenalty,
      customQuestion,
      setCustomQuestion,
      customAction,
      setCustomAction,
      customPenalty,
      setCustomPenalty,
      playerStepNow,
      setPlayerStepNow,
      showPenalty, 
      setShowPenalty,
      showPenaltyDefault, 
      setShowPenaltyDefault,
      theme,
      setTheme
    }}>
      <BrowserRouter>
        {theme
          ? <style>:root {"{--font: 'Inter', sans-serif !important;--color: #fff;--colorOpacity: #ffffffe0;--colorInvert: #000;--colorAction: #0066ff;--colorWhite: #fff;--helpColor: #a3a3a3; --bgBody: #101010;--bgSecond: #181818;--bgSecondHelper: #282828;--headerBorderBottom: #606060;--boxShadow: #b5b5b52b;}"}</style>
          : <style>:root {"{--font: 'Inter', sans-serif !important;--color: #000;--colorOpacity: #000000e0;--colorInvert: #fff;--colorAction: #0066ff;--colorWhite: #fff;--helpColor: #a3a3a3; --bgBody: #fff;--bgSecond: #f9f9f9;--bgSecondHelper: #dddddd;--headerBorderBottom: #606060;--boxShadow: #d8d8da}"}</style>
        }
        <Container maxWidth="lg">
          <AppRouter />
          <FooterOnPage />
        </Container>
      </BrowserRouter>
    </appContext.Provider>
  );
}

export default App;